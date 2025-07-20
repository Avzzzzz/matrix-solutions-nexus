import { useState } from 'react';
import { Filter, Search, Mail, MessageCircle, Send, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [chatStep, setChatStep] = useState(1);
  const [userEmail, setUserEmail] = useState('');
  const [userDetails, setUserDetails] = useState('');
  const { toast } = useToast();

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

  const handleContactForPricing = (product: any) => {
    setSelectedProduct(product);
    setIsContactModalOpen(true);
    setChatStep(1);
  };

  const handleEmailSubmit = () => {
    if (!userEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    setChatStep(2);
  };

  const handleDetailsSubmit = () => {
    if (!userDetails) {
      toast({
        title: "Details Required", 
        description: "Please provide some details about your inquiry",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate sending email
    setTimeout(() => {
      setChatStep(3);
      toast({
        title: "Inquiry Sent!",
        description: "Your inquiry has been sent successfully. We'll respond soon!",
      });
    }, 1000);
  };

  const resetChat = () => {
    setIsContactModalOpen(false);
    setSelectedProduct(null);
    setChatStep(1);
    setUserEmail('');
    setUserDetails('');
  };

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
                        onClick={() => handleContactForPricing(product)}
                        className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        Contact for Pricing
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Modal with Chatbot */}
      <Dialog open={isContactModalOpen} onOpenChange={resetChat}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-accent" />
              Product Inquiry
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={resetChat}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Chat Messages */}
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
              {/* Bot Initial Message */}
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="bg-background p-3 rounded-lg flex-1">
                  <p className="text-sm">
                    Hi! I understand you want to enquire about the price of <strong>{selectedProduct?.title}</strong>. 
                    I'll help you get in touch with our team.
                  </p>
                </div>
              </div>

              {/* Step 1: Email Request */}
              {chatStep >= 1 && (
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div className="bg-background p-3 rounded-lg flex-1">
                    <p className="text-sm">Please provide your email address so we can respond to your inquiry:</p>
                  </div>
                </div>
              )}

              {/* Step 2: Details Request */}
              {chatStep >= 2 && (
                <>
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-accent p-3 rounded-lg text-accent-foreground">
                      <p className="text-sm">{userEmail}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div className="bg-background p-3 rounded-lg flex-1">
                      <p className="text-sm">Great! Please provide some details about your requirements or any specific questions you have:</p>
                    </div>
                  </div>
                </>
              )}

              {/* Step 3: Thank You */}
              {chatStep >= 3 && (
                <>
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-accent p-3 rounded-lg text-accent-foreground max-w-[80%]">
                      <p className="text-sm">{userDetails}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div className="bg-background p-3 rounded-lg flex-1">
                      <p className="text-sm font-medium text-accent">
                        Thank you! We've received your inquiry about {selectedProduct?.title}. 
                        Our team will respond as soon as possible to {userEmail}.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Input Forms */}
            {chatStep === 1 && (
              <div className="space-y-3">
                <Label htmlFor="email">Email Address</Label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleEmailSubmit} size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {chatStep === 2 && (
              <div className="space-y-3">
                <Label htmlFor="details">Your Requirements</Label>
                <div className="space-y-2">
                  <Textarea
                    id="details"
                    placeholder="Please describe your requirements, quantity needed, timeline, or any specific questions..."
                    value={userDetails}
                    onChange={(e) => setUserDetails(e.target.value)}
                    rows={3}
                  />
                  <Button onClick={handleDetailsSubmit} className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Inquiry
                  </Button>
                </div>
              </div>
            )}

            {chatStep === 3 && (
              <Button onClick={resetChat} className="w-full" variant="outline">
                Close
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;