import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden rounded-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the Latest in
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {' '}Premium Tech
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore cutting-edge smartphones, powerful laptops, and versatile tablets. 
            Your next device awaits.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/catalog">
              <Button size="lg" className="glow-primary group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
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
