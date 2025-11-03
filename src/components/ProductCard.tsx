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
      <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
        <div className="aspect-[4/3] overflow-hidden bg-muted/20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="pt-4">
          <h3 className="font-semibold mb-2 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.description}
          </p>
          <p className="text-2xl font-bold text-primary">${product.price}</p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button className="flex-1 glow-primary">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
