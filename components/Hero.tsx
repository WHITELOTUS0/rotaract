"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { clubInfo } from "@/data/club-info";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url('${clubInfo.heroImage}')` }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-0" />

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-sm">
            <span className="text-xs font-semibold uppercase tracking-wider">District {clubInfo.district}</span>
            <span className="w-1 h-1 rounded-full bg-white" />
            <span className="text-xs font-semibold uppercase tracking-wider">Club ID: {clubInfo.id}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto">
            {clubInfo.slogan}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-900 dark:text-slate-300 font-medium mb-8 max-w-2xl mx-auto">
            Chartered {clubInfo.charterDate} | Sponsored by Rotary Club of Nsangi
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">
              Join Us
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
              <Link href="/projects">
                Our Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
