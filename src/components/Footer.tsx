import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-card border-t mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              OnlineStore
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted source for premium electronics. Quality products, exceptional service.
            </p>
            <div className="mt-6 inline-flex px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
              <span className="text-xs text-primary font-semibold">🔥 New deals every week</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/catalog?category=phones" className="text-muted-foreground hover:text-primary transition-all text-sm hover:translate-x-1 inline-block group">
                  <span className="relative">
                    Smartphones
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=laptops" className="text-muted-foreground hover:text-primary transition-all text-sm hover:translate-x-1 inline-block group">
                  <span className="relative">
                    Laptops
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=tablets" className="text-muted-foreground hover:text-primary transition-all text-sm hover:translate-x-1 inline-block group">
                  <span className="relative">
                    Tablets
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-all text-sm hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <a href="mailto:support@onlinestore.com" className="text-muted-foreground hover:text-primary transition-all text-sm hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-all text-sm hover:translate-x-1 inline-block">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 <span className="text-primary font-semibold">OnlineStore</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
