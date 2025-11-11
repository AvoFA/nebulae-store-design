import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Smartphone, Laptop, Tablet } from 'lucide-react';

const Home = () => {
  const popularProducts = products.slice(0, 6);

  const categories = [
    { name: 'Smartphones', icon: Smartphone, path: '/catalog?category=phones', color: 'from-blue-500 to-blue-700' },
    { name: 'Laptops', icon: Laptop, path: '/catalog?category=laptops', color: 'from-purple-500 to-purple-700' },
    { name: 'Tablets', icon: Tablet, path: '/catalog?category=tablets', color: 'from-pink-500 to-pink-700' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Hero />

        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.name} to={category.path}>
                  <div className="glass-card p-10 text-center border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 group hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="inline-flex p-8 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg glow-primary">
                        <Icon className="h-14 w-14 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{category.name}</h3>
                      <Button variant="link" className="text-primary font-semibold group-hover:translate-x-2 transition-transform">
                        Browse Collection →
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Popular Products</h2>
              <p className="text-muted-foreground">Trending items this week</p>
            </div>
            <Link to="/catalog">
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                View All →
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="mt-24 glass-card p-16 rounded-3xl text-center relative overflow-hidden border-border/50">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
          <div className="relative">
            <div className="inline-block mb-4 px-6 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="text-primary font-semibold text-sm">✨ Premium Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Why Choose OnlineStore?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              We're committed to providing you with the latest technology, competitive prices, 
              and exceptional customer service. Every product is carefully selected to meet our 
              high standards of quality and innovation.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all text-base h-14 px-8">
                Learn More About Us →
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
