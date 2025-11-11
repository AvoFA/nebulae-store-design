import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="relative h-[700px] overflow-hidden rounded-3xl group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="text-primary font-semibold text-sm">✨ New Arrivals Available</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Latest in
            <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Premium Tech
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed max-w-2xl">
            Explore cutting-edge smartphones, powerful laptops, and versatile tablets. 
            Your next device awaits.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/catalog">
              <Button size="lg" className="glow-primary group text-lg h-14 px-8 hover:scale-105 transition-transform">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
