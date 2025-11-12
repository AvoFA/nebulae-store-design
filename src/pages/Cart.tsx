import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag, Tag } from 'lucide-react';
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
        <main className="container mx-auto px-4 pt-36 pb-20">
          <div className="text-center py-32 max-w-2xl mx-auto">
            <div className="inline-flex p-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-8">
              <ShoppingBag className="h-20 w-20 text-primary" />
            </div>
            <h1 className="text-6xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground text-xl mb-10">Start adding products to your cart</p>
            <Link to="/catalog">
              <Button size="lg" className="glow-primary h-16 px-12 text-lg rounded-2xl hover:scale-105 transition-transform">
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
      <main className="container mx-auto px-4 pt-36 pb-20">
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-muted-foreground text-xl">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-6 border-border/50 hover:border-primary/30 transition-all group">
                <div className="flex gap-6">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-muted/20 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-xl mb-2 truncate">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemove(item.id, item.name)}
                        className="rounded-xl hover:bg-destructive/10 hover:text-destructive -mt-2"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        ${item.price}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded-xl w-10 h-10 border-border/50 hover:bg-primary/10 hover:border-primary/50"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-bold text-xl">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded-xl w-10 h-10 border-border/50 hover:bg-primary/10 hover:border-primary/50"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <Card className="p-8 sticky top-36 border-border/50">
              <h2 className="text-3xl font-bold mb-8">Order Summary</h2>

              <div className="space-y-4 mb-8 pb-8 border-b border-border">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-bold text-green-500">Free</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-bold">${(total * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-3xl font-bold mb-8">
                <span>Total</span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ${(total * 1.1).toFixed(2)}
                </span>
              </div>

              <div className="mb-6 p-4 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Special Offer</span>
                </div>
                <p className="text-sm text-muted-foreground">Free shipping on all orders!</p>
              </div>

              <Link to="/checkout">
                <Button size="lg" className="w-full glow-primary h-16 text-lg rounded-2xl mb-3 hover:scale-[1.02] transition-transform">
                  Proceed to Checkout →
                </Button>
              </Link>
              <Link to="/catalog">
                <Button size="lg" variant="outline" className="w-full h-14 rounded-2xl border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50">
                  Continue Shopping
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
