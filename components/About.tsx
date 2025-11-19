"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { clubInfo } from "@/data/club-info";
import { Calendar, MapPin, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">Who We Are</h2>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/80 border-l-4 border-primary pl-6 mb-8">
              "{clubInfo.mission}"
            </blockquote>
            
            <Card className="bg-card border-border/50 shadow-sm">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">The Gathering</h3>
                    <p className="text-muted-foreground">Every {clubInfo.meeting.day}, {clubInfo.meeting.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">{clubInfo.meeting.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <StatsCard 
              label="Total Members" 
              value={clubInfo.stats.totalMembers} 
              icon={<Users className="h-5 w-5" />}
            />
            <StatsCard 
              label="Active Members" 
              value={clubInfo.stats.activeMembers} 
              icon={<Users className="h-5 w-5" />}
              className="sm:translate-y-8"
            />
            <StatsCard 
              label="Honorary Members" 
              value={clubInfo.stats.honoraryMembers} 
              icon={<Users className="h-5 w-5" />}
            />
             <div className="bg-secondary/10 rounded-xl p-6 flex flex-col justify-center items-center text-center sm:translate-y-8">
                <span className="text-4xl font-bold text-secondary mb-2">100%</span>
                <span className="text-sm font-medium text-muted-foreground">Commitment to Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsCard({ label, value, icon, className }: { label: string, value: number, icon: React.ReactNode, className?: string }) {
  return (
    <Card className={`border-none shadow-md ${className}`}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-primary/5 text-primary">
          {icon}
        </div>
        <span className="text-4xl font-bold text-foreground mb-1">{value}</span>
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
      </CardContent>
    </Card>
  )
}
