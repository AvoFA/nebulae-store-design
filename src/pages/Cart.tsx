import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, total } = useCart();

  const handleRemove = (id: string, name: string) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-32 glass-card rounded-3xl mx-auto max-w-2xl">
            <div className="inline-flex p-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-8">
              <ShoppingBag className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground text-lg mb-10">Add some products to get started</p>
            <Link to="/catalog">
              <Button size="lg" className="glow-primary text-lg h-14 px-8 hover:scale-105 transition-transform">
                Browse Products →
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Shopping Cart</h1>
          <p className="text-muted-foreground text-lg">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {items.map((item) => (
              <Card key={item.id} className="glass-card border-border/50 hover:border-primary/30 transition-all group">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-muted/20 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl mb-2 truncate group-hover:text-primary transition-colors">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">${item.price}</p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemove(item.id, item.name)}
                        className="hover:bg-destructive/10 hover:text-destructive transition-all hover:scale-110"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>

                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-10 text-center font-bold text-lg">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card className="glass-card sticky top-24 border-border/50">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  Order Summary
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-muted-foreground text-base">
                    <span>Subtotal</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground text-base">
                    <span>Shipping</span>
                    <span className="font-medium text-green-500">Free</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div className="flex justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button size="lg" className="w-full glow-primary text-lg h-14 mb-3 hover:scale-[1.02] transition-transform">
                    Proceed to Checkout →
                  </Button>
                </Link>
                <Link to="/catalog">
                  <Button size="lg" variant="outline" className="w-full text-base h-12 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
