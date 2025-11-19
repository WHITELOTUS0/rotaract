"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function Membership() {
  const steps = [
    {
      title: "Application",
      description: "Fill out the membership form to express your interest.",
    },
    {
      title: "Guest Attendance",
      description: "Attend at least 2 meetings to get to know the club.",
    },
    {
      title: "Induction",
      description: "Officially join the family and receive your pin.",
    },
  ];

  return (
    <section id="membership" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
         <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">Become a Member</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-lg">
              Join a global network of young leaders. Open to paramedical/nursing students and young professionals ages 18-30.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-white" />
                <span className="text-lg text-white">Develop Professional Skills</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-white" />
                <span className="text-lg text-white">Serve the Community</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-white" />
                <span className="text-lg text-white">Make Lifelong Friends</span>
              </div>
            </div>

            <Button asChild size="lg" className="bg-white text-[#D91B5C] hover:bg-slate-100 font-bold h-12 px-8 shadow-lg hover:shadow-xl transition-all border-none">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSMyqMDiT9eqTxA4HpXR5hicoY1iJWz0DBa1f32010FIwnJA/viewform" target="_blank" rel="noopener noreferrer">
                Apply for Membership
              </a>
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">How to Join</h3>
            <div className="space-y-8 relative">
               {/* Vertical Line */}
               <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-white/30" />

              {steps.map((step, index) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex gap-6"
                >
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-white text-[#D91B5C] flex items-center justify-center font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
