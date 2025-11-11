import { Link } from 'react-router-dom';
import { Product } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
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
    <Link to={`/product/${product.id}`}>
      <Card className="glass-card overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 group hover:scale-[1.02]">
        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
            <span className="text-xs font-bold text-primary-foreground">${product.price}</span>
          </div>
        </div>
        <CardContent className="pt-5 pb-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="gap-2 pt-0">
          <Button 
            variant="outline" 
            className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button className="flex-1 glow-primary hover:scale-105 transition-transform">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
