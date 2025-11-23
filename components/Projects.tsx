"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { clubInfo } from "@/data/club-info";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Our Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Service above self. Here's how we are making a difference in our community.
            </p>
          </div>
          <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
            View all projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {clubInfo.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 border-border/50 group">
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
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground mb-6">Proudly partnered with</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {clubInfo.partners.map(partner => (
              <span key={partner} className="text-lg font-semibold text-foreground/60 hover:text-primary transition-colors">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
