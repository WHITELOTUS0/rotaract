import { clubInfo } from "@/data/club-info";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{clubInfo.shortName}</h3>
            <p className="mb-6 text-slate-400">
              {clubInfo.slogan}
            </p>
            <div className="flex gap-4">
              <Link href={clubInfo.contact.socials.facebook} className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={clubInfo.contact.socials.twitter} className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href={clubInfo.contact.socials.instagram} className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              {clubInfo.contact.emails.map(email => (
                <a key={email} href={`mailto:${email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  {email}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#projects" className="hover:text-primary transition-colors">Our Projects</Link></li>
              <li><Link href="#membership" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Donate</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {clubInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
