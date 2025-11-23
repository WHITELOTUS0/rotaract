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

export async function GET() {
  try {
    const projects = getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    
    if (!session || session.value !== "true") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, tags, image, comingSoon } = body;

    if (!title || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const projects = getProjects();
    const newProject = {
      id: Date.now().toString(),
      title,
      description,
      tags: tags || [],
      image: image || "/placeholder.jpg",
      comingSoon: comingSoon || false,
    };

    projects.push(newProject);
    saveProjects(projects);

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
