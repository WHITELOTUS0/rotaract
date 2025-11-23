import fs from "fs";
import path from "path";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

async function getProjects() {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-background font-sans antialiased flex flex-col">
      <Navbar />
      <div className="flex-grow py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary">Our Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Service above self. Explore the impactful initiatives we are undertaking to serve our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any) => (
              <Card key={project.id} className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 border-border/50 group">
                <div className="relative h-48 bg-muted overflow-hidden">
                   <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className="object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   {project.comingSoon && (
                     <div className="absolute top-4 right-4">
                       <Badge variant="secondary" className="bg-yellow-500/90 text-white hover:bg-yellow-500">Coming Soon</Badge>
                     </div>
                   )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
