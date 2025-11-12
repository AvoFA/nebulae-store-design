import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TechStore
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Your trusted destination for premium electronics. We bring you the latest in technology with unbeatable prices and exceptional service.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/catalog?category=phones" className="text-muted-foreground hover:text-primary transition-colors">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=laptops" className="text-muted-foreground hover:text-primary transition-colors">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=tablets" className="text-muted-foreground hover:text-primary transition-colors">
                  Tablets
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="mailto:support@techstore.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Your email"
                  className="pl-10 h-11 rounded-xl"
                />
              </div>
              <Button size="icon" className="h-11 w-11 rounded-xl glow-primary">
                →
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 <span className="text-primary font-semibold">TechStore</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
