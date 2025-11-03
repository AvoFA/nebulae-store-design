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

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.name} to={category.path}>
                  <div className={`glass-card p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg group`}>
                    <div className={`inline-flex p-6 rounded-full bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                    <Button variant="link" className="text-primary">
                      Browse Collection →
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Popular Products</h2>
            <Link to="/catalog">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="mt-20 glass-card p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose OnlineStore?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're committed to providing you with the latest technology, competitive prices, 
            and exceptional customer service. Every product is carefully selected to meet our 
            high standards of quality and innovation.
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Learn More About Us
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
