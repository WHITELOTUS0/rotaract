"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { clubInfo } from "@/data/club-info";

export function Leadership() {
  return (
    <section id="leadership" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Our Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team guiding our club towards impactful service and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {clubInfo.leadership.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow border-border/50">
                <CardHeader className="pt-8 pb-4">
                  <Avatar className="w-48 h-48 mx-auto mb-4 ring-4 ring-primary/10">
                    <AvatarImage src={leader.image} alt={leader.name} />
                    <AvatarFallback className="text-lg bg-primary/5 text-primary">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg leading-none">{leader.name}</h3>
                    <p className="text-sm text-primary font-medium">{leader.role}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Optional: Add bio or social links here */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
