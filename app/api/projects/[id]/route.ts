import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { cookies } from "next/headers";

const dataFilePath = path.join(process.cwd(), "data", "projects.json");

function getProjects() {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  const fileContent = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(fileContent);
}

function saveProjects(projects: any[]) {
  fs.writeFileSync(dataFilePath, JSON.stringify(projects, null, 2));
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    
    if (!session || session.value !== "true") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const projects = getProjects();
    const filteredProjects = projects.filter((p: any) => p.id !== id);

    if (projects.length === filteredProjects.length) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    saveProjects(filteredProjects);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    
    if (!session || session.value !== "true") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const projects = getProjects();
    const projectIndex = projects.findIndex((p: any) => p.id === id);

    if (projectIndex === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    projects[projectIndex] = { ...projects[projectIndex], ...body };
    saveProjects(projects);

    return NextResponse.json(projects[projectIndex]);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}
