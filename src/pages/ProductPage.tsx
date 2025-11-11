import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
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

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="aspect-square overflow-hidden rounded-3xl glass-card border-border/50 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none z-10" />
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 w-fit">
              <span className="text-primary font-semibold text-sm capitalize">{product.category}</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">{product.name}</h1>
            
            <div className="flex items-baseline gap-3 mb-8">
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">${product.price}</p>
              <span className="text-muted-foreground line-through text-xl">${(product.price * 1.2).toFixed(0)}</span>
              <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-semibold">Save 20%</span>
            </div>
            
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 mb-10">
              <Button
                size="lg"
                className="w-full glow-primary text-lg h-16 hover:scale-[1.02] transition-transform"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-6 w-6" />
                Add to Cart
              </Button>
              <Link to="/cart" className="block">
                <Button size="lg" variant="outline" className="w-full text-lg h-16 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
                  View Cart
                </Button>
              </Link>
            </div>

            <div className="glass-card p-8 rounded-2xl border-border/50">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
                Key Features
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Premium build quality
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Latest technology
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Fast shipping available
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  1-year warranty included
                </li>
              </ul>
            </div>
          </div>
        </div>

        {similarProducts.length > 0 && (
          <section className="mt-24">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-3">Similar Products</h2>
              <p className="text-muted-foreground text-lg">You might also like</p>
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
