import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'panel', name: 'Panels' },
    { id: 'actuator', name: 'Actuators' },
    { id: 'robotic', name: 'Robotic Kits' },
    { id: 'pneumatic', name: 'Pneumatic' },
    { id: 'enclosure', name: 'Enclosures' }
  ];

  const products = [
    {
      id: 1,
      title: 'Control Panel CP-100',
      category: 'panel',
      description: 'Industrial control panel with advanced PLC integration and safety features.',
      image: '/api/placeholder/300/200',
      price: 'Contact for pricing',
      features: ['PLC Compatible', 'Safety Certified', 'Customizable']
    },
    {
      id: 2,
      title: 'Linear Actuator LA-500',
      category: 'actuator',
      description: 'High-precision linear actuator for industrial automation applications.',
      image: '/api/placeholder/300/200',
      price: 'Contact for pricing',
      features: ['High Precision', 'Heavy Duty', 'Programmable']
    },
    {
      id: 3,
      title: 'Mini Robot Kit MRK-01',
      category: 'robotic',
      description: 'Educational robotic kit perfect for learning and prototyping.',
      image: '/api/placeholder/300/200',
      price: 'Contact for pricing',
      features: ['Educational', 'Programmable', 'Expandable']
    },
    {
      id: 4,
      title: 'Pneumatic Cylinder PC-200',
      category: 'pneumatic',
      description: 'Reliable pneumatic cylinder for various industrial applications.',
      image: '/api/placeholder/300/200',
      price: 'Contact for pricing',
      features: ['Durable', 'High Force', 'Corrosion Resistant']
    },
    {
      id: 5,
      title: 'Plastic Enclosure PE-150',
      category: 'enclosure',
      description: 'Weather-resistant plastic enclosure for electronic components.',
      image: '/api/placeholder/300/200',
      price: 'Contact for pricing',
      features: ['Weather Resistant', 'UV Stable', 'Multiple Sizes']
    },
    {
      id: 6,
      title: 'Touch Panel TP-700',
      category: 'panel',
      description: 'Advanced touch panel interface for modern control systems.',
      image: '/api/placeholder/300/200',
      price: 'Contact for pricing',
      features: ['Multi-touch', 'High Resolution', 'Industrial Grade']
    },
    {
      id: 7,
      title: 'Servo Actuator SA-300',
      category: 'actuator',
      description: 'Precision servo actuator with feedback control system.',
      image: '/api/placeholder/300/200',
      price: 'Contact for pricing',
      features: ['Precise Control', 'Feedback System', 'Low Maintenance']
    },
    {
      id: 8,
      title: 'Advanced Robot Kit ARK-02',
      category: 'robotic',
      description: 'Professional-grade robotic kit for advanced automation projects.',
      image: '/api/placeholder/300/200',
      price: 'Contact for pricing',
      features: ['Professional Grade', 'AI Ready', 'Modular Design']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Products</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-slide-up">
            Innovative hardware solutions designed and manufactured to the highest standards
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-200"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id}
                  className="group hover:shadow-large transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="w-full h-48 bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">Product Image</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <CardTitle className="text-lg mb-2 group-hover:text-accent transition-colors">
                      {product.title}
                    </CardTitle>
                    
                    <CardDescription className="mb-4 line-clamp-3">
                      {product.description}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-accent">{product.price}</span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;