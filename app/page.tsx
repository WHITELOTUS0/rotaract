import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Leadership } from "@/components/Leadership";
import { Projects } from "@/components/Projects";
import { Membership } from "@/components/Membership";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Projects />
      <Membership />
      <Footer />
    </main>
  );
}
