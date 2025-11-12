import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, Star, Check, Truck, Shield, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8 pt-36">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link to="/catalog">
              <Button>Return to Catalog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const similarProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const features = [
    'Premium build quality',
    'Latest technology',
    'Long battery life',
    'High performance',
    'Sleek design',
    '1-year warranty',
  ];

  const benefits = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders over $500' },
    { icon: Shield, title: 'Secure Payment', description: '100% protected' },
    { icon: RefreshCw, title: '30-Day Returns', description: 'Money back guarantee' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-36 pb-20">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 rounded-xl hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="sticky top-36">
              <div className="aspect-square overflow-hidden rounded-3xl border border-border/50 bg-muted/20 mb-6 group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden rounded-2xl border border-border/50 bg-muted/20 cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <span className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary font-semibold text-sm uppercase tracking-wider">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">4.8 (256 reviews)</span>
            </div>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ${product.price}
              </span>
              <span className="text-2xl text-muted-foreground line-through">
                ${(product.price * 1.2).toFixed(0)}
              </span>
              <span className="px-4 py-2 rounded-xl bg-destructive/10 text-destructive font-bold">
                Save 20%
              </span>
            </div>
            
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 mb-10">
              <Button
                size="lg"
                className="w-full glow-primary h-16 text-lg rounded-2xl hover:scale-[1.02] transition-transform"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-6 w-6" />
                Add to Cart
              </Button>
              <Link to="/cart" className="block">
                <Button size="lg" variant="outline" className="w-full h-16 text-lg rounded-2xl border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
                  View Cart
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="text-center p-4 rounded-2xl border border-border/50 bg-card/50">
                    <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm mb-1">{benefit.title}</p>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            <Card className="p-6 rounded-2xl border-border/50">
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="w-full mb-6 h-12">
                  <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
                  <TabsTrigger value="specs" className="flex-1">Specifications</TabsTrigger>
                </TabsList>
                <TabsContent value="features">
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="specs">
                  <div className="space-y-3">
                    <div className="flex justify-between py-3 border-b border-border/50">
                      <span className="text-muted-foreground">Brand</span>
                      <span className="font-semibold">Premium Tech</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border/50">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-semibold capitalize">{product.category}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border/50">
                      <span className="text-muted-foreground">Warranty</span>
                      <span className="font-semibold">1 Year</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-muted-foreground">SKU</span>
                      <span className="font-semibold">{product.id.toUpperCase()}</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>

        {similarProducts.length > 0 && (
          <section>
            <div className="mb-12">
              <h2 className="text-5xl font-bold mb-3">You May Also Like</h2>
              <p className="text-muted-foreground text-lg">Similar products in this category</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
