import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, Smartphone, Laptop, Tablet } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Phones",
    icon: Smartphone,
    count: 45,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Laptops",
    icon: Laptop,
    count: 32,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Tablets",
    icon: Tablet,
    count: 28,
    color: "from-orange-500 to-red-500",
  },
];

export default function Categories() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Categories
          </h1>
          <p className="text-muted-foreground">
            Manage product categories
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="glow-primary bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="category-name">Category Name</Label>
                <Input id="category-name" placeholder="Accessories" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category-icon">Icon (optional)</Label>
                <Input id="category-icon" placeholder="icon-name" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="glow-primary">Add Category</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card 
              key={category.id} 
              className="glass-card group hover:border-primary/50 transition-all duration-300 hover:glow-primary hover:scale-105 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-9 w-9 rounded-lg hover:bg-primary/10 hover:text-primary"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-lg hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {category.count} products
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Category Stats */}
      <Card className="glass-card border-border/50 glow-secondary">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Category Overview
          </h3>
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/30 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-md`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-lg">{category.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-base font-bold text-foreground">{category.count} items</p>
                    <p className="text-xs text-muted-foreground font-medium">
                      {Math.round((category.count / 105) * 100)}% of total
                    </p>
                  </div>
                  <div className="w-40 h-3 bg-muted rounded-full overflow-hidden border border-border/50">
                    <div
                      className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500`}
                      style={{ width: `${(category.count / 105) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
