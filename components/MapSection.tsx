"use client";

import { motion } from "framer-motion";

export function MapSection() {
  return (
    <section className="w-full h-[400px] md:h-[500px] relative bg-slate-100 dark:bg-slate-800">
      <iframe 
        width="100%" 
        height="100%" 
        id="gmap_canvas" 
        src="https://maps.google.com/maps?q=International+Paramedical+Institute+OFFICE&t=&z=15&ie=UTF8&iwloc=&output=embed" 
        frameBorder="0" 
        scrolling="no" 
        marginHeight={0} 
        marginWidth={0}
        title="Location Map"
        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
      ></iframe>
      
      <div className="absolute bottom-4 right-4 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-lg max-w-xs z-10 hidden md:block">
        <h3 className="font-bold text-primary mb-1">Visit Us</h3>
        <p className="text-sm text-muted-foreground">
          The International School of Nursing and Midwifery
        </p>
      </div>
    </section>
  );
}
