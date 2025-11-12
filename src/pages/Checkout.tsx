import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Wallet, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.success('Order placed successfully!');
      clearCart();
      setTimeout(() => navigate('/'), 2000);
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const steps = [
    { number: 1, title: 'Contact Info' },
    { number: 2, title: 'Shipping' },
    { number: 3, title: 'Payment' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-36 pb-20">
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-4">Checkout</h1>
          <p className="text-muted-foreground text-xl">Complete your purchase</p>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all ${
                      currentStep >= step.number
                        ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {currentStep > step.number ? <CheckCircle2 className="h-6 w-6" /> : step.number}
                  </div>
                  <span className={`font-semibold ${currentStep >= step.number ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-20 h-1 mx-4 rounded-full ${currentStep > step.number ? 'bg-primary' : 'bg-muted'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {currentStep === 1 && (
                <Card className="p-8 border-border/50">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required placeholder="John" className="h-12" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required placeholder="Doe" className="h-12" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="h-12" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required placeholder="+1 (234) 567-890" className="h-12" />
                    </div>
                  </div>
                </Card>
              )}

              {currentStep === 2 && (
                <Card className="p-8 border-border/50">
                  <h3 className="text-2xl font-bold mb-6">Shipping Address</h3>
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" required placeholder="123 Main St" className="h-12" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required placeholder="New York" className="h-12" />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" required placeholder="10001" className="h-12" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" required placeholder="United States" className="h-12" />
                    </div>
                  </div>
                </Card>
              )}

              {currentStep === 3 && (
                <Card className="p-8 border-border/50">
                  <h3 className="text-2xl font-bold mb-6">Payment Method</h3>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4 mb-6">
                    <div
                      className={`flex items-center space-x-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                        paymentMethod === 'card'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50 hover:bg-primary/5'
                      }`}
                    >
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-3 flex-1 cursor-pointer">
                        <CreditCard className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-bold">Credit/Debit Card</p>
                          <p className="text-sm text-muted-foreground">Pay securely with your card</p>
                        </div>
                      </Label>
                    </div>
                    <div
                      className={`flex items-center space-x-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                        paymentMethod === 'cash'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50 hover:bg-primary/5'
                      }`}
                    >
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex items-center gap-3 flex-1 cursor-pointer">
                        <Wallet className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-bold">Cash on Delivery</p>
                          <p className="text-sm text-muted-foreground">Pay when you receive</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </Card>
              )}

              <div className="mt-6 flex gap-4">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex-1 h-14 rounded-2xl border-2"
                  >
                    Previous
                  </Button>
                )}
                <Button type="submit" size="lg" className="flex-1 glow-primary h-14 rounded-2xl">
                  {currentStep < 3 ? 'Continue' : 'Complete Order'} →
                </Button>
              </div>
            </div>

            <div>
              <Card className="p-8 sticky top-36 border-border/50">
                <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted/20 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 pt-6 border-t border-border">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-bold">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="font-bold text-green-500">Free</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span className="font-bold">${(total * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />
                  <div className="flex justify-between text-3xl font-bold">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      ${(total * 1.1).toFixed(2)}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
