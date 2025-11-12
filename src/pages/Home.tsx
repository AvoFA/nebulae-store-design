import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Smartphone, Laptop, Tablet, TrendingUp, Award, Sparkles } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  const categories = [
    { name: 'Smartphones', icon: Smartphone, path: '/catalog?category=phones', count: products.filter(p => p.category === 'phones').length },
    { name: 'Laptops', icon: Laptop, path: '/catalog?category=laptops', count: products.filter(p => p.category === 'laptops').length },
    { name: 'Tablets', icon: Tablet, path: '/catalog?category=tablets', count: products.filter(p => p.category === 'tablets').length },
  ];

  const features = [
    { icon: TrendingUp, title: 'Best Prices', description: 'Competitive pricing guaranteed' },
    { icon: Award, title: 'Quality Products', description: 'Premium brands only' },
    { icon: Sparkles, title: 'Latest Tech', description: 'Always up to date' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <Hero />
        </div>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground text-lg">Choose your device type</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  to={category.path}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50 hover:border-primary/30 p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                    <p className="text-muted-foreground mb-4">{category.count} products available</p>
                    <span className="text-primary font-semibold group-hover:translate-x-2 inline-block transition-transform">
                      Explore →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-5xl font-bold mb-3">Featured Products</h2>
              <p className="text-muted-foreground text-lg">Handpicked for you</p>
            </div>
            <Link to="/catalog">
              <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 rounded-xl h-14 px-8">
                View All Products →
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-8 rounded-3xl border border-border/50 hover:border-primary/30 bg-gradient-to-br from-background to-muted/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 p-16 text-center">
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
            <div className="relative">
              <h2 className="text-5xl font-bold mb-6">Ready to Upgrade?</h2>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10">
                Discover the perfect device that matches your lifestyle. Premium quality, unbeatable prices.
              </p>
              <Link to="/catalog">
                <Button size="lg" className="glow-primary h-16 px-12 text-lg rounded-2xl hover:scale-105 transition-transform">
                  Start Shopping Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
