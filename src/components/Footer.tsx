import Link from "next/link";
import { Twitter, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Brand & Copy */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-serif font-bold text-white">
              Gracious Legacy<span className="text-accent-gold">.</span>
            </Link>
            <p className="text-gray-300 font-medium text-sm max-w-xs leading-relaxed">
              Polished PR & Administrative Support for modern businesses.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-white mb-2">Contact</h4>
            <div className="flex items-center space-x-3 text-white font-medium hover:text-accent-gold transition-colors text-sm">
              <Mail size={16} className="text-accent-gold shrink-0" />
              <a href="mailto:ndindamithamo@gmail.com" className="break-all">ndindamithamo@gmail.com</a>
            </div>
            <div className="flex items-center space-x-3 text-white font-medium hover:text-accent-gold transition-colors text-sm">
              <Phone size={16} className="text-accent-gold shrink-0" />
              <a href="tel:+254724788158">+254 724 788 158</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-white mb-2">Connect</h4>
            <div className="flex items-center space-x-4">
              <Link href="#" className="p-2 bg-white/10 rounded-full text-white hover:text-accent-gold hover:bg-white/20 transition-all flex items-center justify-center">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full text-white hover:text-accent-gold hover:bg-white/20 transition-all flex items-center justify-center">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
           <p className="text-gray-400 text-xs">
            &copy; {currentYear} Grace Mithamo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
