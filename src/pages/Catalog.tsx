import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Card } from '@/components/ui/card';

type Category = 'all' | 'phones' | 'laptops' | 'tablets';

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as Category | null;
  
  const [selectedCategory, setSelectedCategory] = useState<Category>(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Products' },
    { value: 'phones', label: 'Smartphones' },
    { value: 'laptops', label: 'Laptops' },
    { value: 'tablets', label: 'Tablets' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-36 pb-20">
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-4">Product Catalog</h1>
          <p className="text-muted-foreground text-xl">Explore our complete collection</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card className="p-6 sticky top-36 border-border/50">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">Filters</h3>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">CATEGORIES</h4>
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? 'default' : 'ghost'}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`w-full justify-start rounded-xl ${
                      selectedCategory === category.value 
                        ? 'glow-primary' 
                        : 'hover:bg-primary/10'
                    }`}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Showing</p>
                  <p className="text-2xl font-bold text-primary">{filteredProducts.length}</p>
                  <p className="text-sm text-muted-foreground">Products</p>
                </div>
              </div>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 h-16 text-lg rounded-2xl border-border/50 bg-card/50 backdrop-blur-sm"
                />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 rounded-3xl border-2 border-dashed border-border">
                <div className="inline-flex p-8 rounded-full bg-muted/20 mb-6">
                  <Search className="h-16 w-16 text-muted-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-3">No products found</h3>
                <p className="text-muted-foreground text-lg">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
