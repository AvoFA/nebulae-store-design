import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              OnlineStore
            </h3>
            <p className="text-muted-foreground text-sm">
              Your trusted source for premium electronics. Quality products, exceptional service.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?category=phones" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=laptops" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=tablets" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Tablets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <a href="mailto:support@onlinestore.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 OnlineStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
