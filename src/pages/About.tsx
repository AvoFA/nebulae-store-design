import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Shield, Truck, HeadphonesIcon, Award, Users, Target, Heart } from 'lucide-react';

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

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring exceptional service and satisfaction.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly seek the latest technology and innovations to bring you the best products.',
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Every product is carefully selected to meet our high standards of excellence.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-7xl font-bold mb-6">About TechStore</h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in bringing tomorrow's technology today
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-5xl font-bold mb-8">Our Story</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2020, TechStore emerged from a simple vision: to make cutting-edge technology accessible to everyone. We started as a small team of tech enthusiasts who believed that premium devices shouldn't come with premium hassle.
                  </p>
                  <p>
                    Today, we've grown into a trusted destination for thousands of customers seeking the latest in smartphones, laptops, and tablets. Our success is built on three pillars: quality products, competitive pricing, and exceptional customer service.
                  </p>
                  <p>
                    Every product in our catalog is handpicked by our expert team, ensuring it meets our rigorous standards for performance, design, and value. We partner directly with leading manufacturers to bring you authentic products at the best prices.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-xl">What drives us forward</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-8 text-center border-border/50 hover:border-primary/30 transition-all group">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground text-xl">Experience the difference</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="p-6 text-center border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 border-border/50 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="relative">
                <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6 text-lg">
                  <p className="text-muted-foreground">
                    Have questions? We're here to help!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-2xl bg-background/50">
                      <p className="font-semibold mb-2">Email</p>
                      <a href="mailto:support@techstore.com" className="text-primary hover:underline">
                        support@techstore.com
                      </a>
                    </div>
                    <div className="p-6 rounded-2xl bg-background/50">
                      <p className="font-semibold mb-2">Phone</p>
                      <a href="tel:+1234567890" className="text-primary hover:underline">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground pt-6">
                    <strong>Business Hours:</strong> Monday - Friday, 9am - 6pm EST
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
