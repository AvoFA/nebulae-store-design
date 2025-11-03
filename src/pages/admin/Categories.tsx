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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Categories</h1>
          <p className="text-muted-foreground mt-1">
            Manage product categories
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="glow-primary">
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
            <Card key={category.id} className="glass-card group hover:border-primary/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} products
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Category Stats */}
      <Card className="glass-card">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Category Overview</h3>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">{category.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{category.count} items</p>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((category.count / 105) * 100)}% of total
                    </p>
                  </div>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${category.color}`}
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
