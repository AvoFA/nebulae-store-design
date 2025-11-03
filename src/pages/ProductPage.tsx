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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square overflow-hidden rounded-2xl glass-card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full glow-primary"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Link to="/cart" className="block">
                <Button size="lg" variant="outline" className="w-full">
                  View Cart
                </Button>
              </Link>
            </div>

            <div className="mt-8 glass-card p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Premium build quality</li>
                <li>• Latest technology</li>
                <li>• Fast shipping available</li>
                <li>• 1-year warranty included</li>
              </ul>
            </div>
          </div>
        </div>

        {similarProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Similar Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
