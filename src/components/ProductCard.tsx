import { Link } from 'react-router-dom';
import { Product } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingCart, Star } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Card className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted/20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-primary/90 backdrop-blur-sm text-xs font-bold text-primary-foreground">
              NEW
            </span>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-xs font-bold">4.8</span>
          </div>

          <Button
            onClick={handleAddToCart}
            size="icon"
            className="absolute bottom-4 right-4 rounded-xl w-12 h-12 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 glow-primary"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="mb-3">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          
          <h3 className="font-bold text-xl mb-3 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-5 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ${product.price}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                ${(product.price * 1.2).toFixed(0)}
              </span>
            </div>
            <div className="text-xs text-green-500 font-semibold">
              In Stock
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;
