import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Truck, HeadphonesIcon, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your data is protected with industry-leading security measures.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your products delivered quickly with our reliable shipping partners.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our customer service team is always here to help you.',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'All products come with warranty and quality assurance.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">About OnlineStore</h1>
          <p className="text-muted-foreground text-xl">Your trusted partner in technology</p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <Card className="glass-card border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
            <CardContent className="p-12 relative">
              <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-10 bg-gradient-to-b from-primary to-secondary rounded-full" />
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                OnlineStore is your premier destination for cutting-edge electronics. We specialize in 
                bringing you the latest smartphones, laptops, and tablets from the world's leading brands.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Founded with a passion for technology and innovation, we've built our reputation on 
                providing exceptional products, competitive prices, and unmatched customer service.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every product in our catalog is carefully selected to ensure it meets our high standards 
                of quality, performance, and value. We believe in making technology accessible to everyone 
                while maintaining the highest level of service excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg">Experience the difference with our premium service</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="glass-card text-center border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 relative">
                  <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg glow-primary">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 pointer-events-none" />
            <CardContent className="p-12 relative">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-10 bg-gradient-to-b from-primary to-secondary rounded-full" />
                Contact Us
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg">
                <p>
                  <strong className="text-foreground">Email:</strong>{' '}
                  <a href="mailto:support@onlinestore.com" className="text-primary hover:underline">
                    support@onlinestore.com
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong>{' '}
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-890
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">Hours:</strong> Monday - Friday, 9am - 6pm EST
                </p>
                <div className="pt-4">
                  <strong className="text-foreground block mb-2">Follow Us:</strong>
                  <p>Stay connected on Facebook, Twitter, Instagram, and YouTube for the latest updates and exclusive offers.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
