import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Smartphone, Laptop, Tablet } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Navbar = () => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'Smartphones', icon: Smartphone, path: '/catalog?category=phones' },
    { name: 'Laptops', icon: Laptop, path: '/catalog?category=laptops' },
    { name: 'Tablets', icon: Tablet, path: '/catalog?category=tablets' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b backdrop-blur-2xl bg-background/70">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg glow-primary group-hover:scale-110 transition-transform">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TechStore
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  to={category.path}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl hover:bg-primary/10 transition-all group"
                >
                  <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link to="/auth">
              <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background/95 backdrop-blur-2xl">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  to={category.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{category.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
