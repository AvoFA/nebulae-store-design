import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, FolderTree, TrendingUp } from "lucide-react";
import { products } from "@/data/products";

export default function Dashboard() {
  const totalProducts = products.length;
  const categories = [...new Set(products.map((p) => p.category))].length;
  const totalValue = products.reduce((sum, p) => sum + p.price, 0);
  const avgPrice = Math.round(totalValue / totalProducts);

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: Package,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Categories",
      value: categories,
      icon: FolderTree,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Orders Today",
      value: 12,
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Avg Price",
      value: `$${avgPrice}`,
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const categoryStats = [
    { name: "Phones", count: products.filter((p) => p.category === "phones").length },
    { name: "Laptops", count: products.filter((p) => p.category === "laptops").length },
    { name: "Tablets", count: products.filter((p) => p.category === "tablets").length },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of your online store
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Category Breakdown */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Products by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryStats.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between">
                <span className="font-medium">{cat.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">{cat.count} items</span>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      style={{ width: `${(cat.count / totalProducts) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Products */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Recent Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {products.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {product.category}
                  </p>
                </div>
                <p className="font-bold text-primary">${product.price}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
