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
        <h1 className="text-4xl font-bold mb-8 text-center">About OnlineStore</h1>

        <div className="max-w-3xl mx-auto mb-16">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OnlineStore is your premier destination for cutting-edge electronics. We specialize in 
                bringing you the latest smartphones, laptops, and tablets from the world's leading brands.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a passion for technology and innovation, we've built our reputation on 
                providing exceptional products, competitive prices, and unmatched customer service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every product in our catalog is carefully selected to ensure it meets our high standards 
                of quality, performance, and value. We believe in making technology accessible to everyone 
                while maintaining the highest level of service excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="glass-card text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="space-y-3 text-muted-foreground">
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
