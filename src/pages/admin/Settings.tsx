import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Save, Upload } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your store configuration</p>
      </div>

      {/* Store Information */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Store Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="store-name">Store Name</Label>
            <Input id="store-name" defaultValue="OnlineStore" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="store-tagline">Tagline</Label>
            <Input
              id="store-tagline"
              defaultValue="Premium Electronics & Gadgets"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="store-description">Description</Label>
            <Textarea
              id="store-description"
              rows={4}
              defaultValue="Your trusted destination for the latest smartphones, laptops, and tablets."
            />
          </div>
          <div className="space-y-2">
            <Label>Store Logo</Label>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold">
                OS
              </div>
              <Button variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Upload Logo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="contact@onlinestore.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              rows={2}
              defaultValue="123 Tech Street, Silicon Valley, CA 94025"
            />
          </div>
          <Separator />
          <div className="space-y-4">
            <Label>Social Media</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="facebook" className="text-sm text-muted-foreground">
                  Facebook
                </Label>
                <Input id="facebook" placeholder="facebook.com/yourstore" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter" className="text-sm text-muted-foreground">
                  Twitter
                </Label>
                <Input id="twitter" placeholder="twitter.com/yourstore" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram" className="text-sm text-muted-foreground">
                  Instagram
                </Label>
                <Input id="instagram" placeholder="instagram.com/yourstore" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-sm text-muted-foreground">
                  LinkedIn
                </Label>
                <Input id="linkedin" placeholder="linkedin.com/company/yourstore" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive email notifications for new orders
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Low Stock Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when products are running low
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Maintenance Mode</Label>
              <p className="text-sm text-muted-foreground">
                Temporarily disable the storefront
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="glow-primary">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
