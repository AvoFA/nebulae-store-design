import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Mail, Lock, User as UserIcon } from 'lucide-react';
import { toast } from 'sonner';

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Welcome back!');
      navigate('/');
    }, 1500);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Account created successfully!');
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-36 pb-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg glow-primary">
              <ShoppingCart className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Welcome</h1>
            <p className="text-muted-foreground text-lg">Sign in to continue shopping</p>
          </div>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-14 p-1.5 rounded-2xl">
              <TabsTrigger value="login" className="text-base rounded-xl">Login</TabsTrigger>
              <TabsTrigger value="register" className="text-base rounded-xl">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="p-8 border-border/50">
                <h3 className="text-3xl font-bold mb-2">Welcome Back</h3>
                <p className="text-muted-foreground mb-8">Enter your credentials to continue</p>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <Label htmlFor="login-email" className="text-base mb-2 block">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="pl-12 h-14 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="login-password" className="text-base mb-2 block">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="pl-12 h-14 rounded-xl"
                      />
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="link"
                    className="px-0 text-primary"
                  >
                    Forgot password?
                  </Button>
                  <Button
                    type="submit"
                    className="w-full glow-primary h-14 text-lg rounded-xl mt-2"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In →'}
                  </Button>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card className="p-8 border-border/50">
                <h3 className="text-3xl font-bold mb-2">Create Account</h3>
                <p className="text-muted-foreground mb-8">Join us and start shopping</p>
                <form onSubmit={handleRegister} className="space-y-6">
                  <div>
                    <Label htmlFor="register-name" className="text-base mb-2 block">Full Name</Label>
                    <div className="relative">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="pl-12 h-14 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="register-email" className="text-base mb-2 block">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="pl-12 h-14 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="register-password" className="text-base mb-2 block">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="pl-12 h-14 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="register-confirm" className="text-base mb-2 block">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="register-confirm"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="pl-12 h-14 rounded-xl"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full glow-primary h-14 text-lg rounded-xl mt-2"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating account...' : 'Create Account →'}
                  </Button>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
