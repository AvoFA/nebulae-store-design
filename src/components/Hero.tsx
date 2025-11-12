import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Fast Shipping</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Warranty Included</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Best Prices</span>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-none">
            Next-Gen
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          
          <p className="text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Experience innovation with our curated selection of premium devices. 
            From smartphones to laptops, we bring you tomorrow's technology today.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/catalog">
              <Button size="lg" className="glow-primary h-16 px-10 text-lg rounded-2xl hover:scale-105 transition-transform">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-2xl border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-primary/50" />
        <div className="w-2 h-2 rounded-full bg-primary/30" />
      </div>
    </section>
  );
};

export default Hero;
