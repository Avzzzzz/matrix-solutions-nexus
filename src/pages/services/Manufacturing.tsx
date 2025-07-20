import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Wrench, Zap, Cog } from 'lucide-react';

const Manufacturing = () => {
  const manufacturingServices = [
    {
      category: 'CNC Machining',
      icon: Settings,
      services: [
        {
          name: 'CNC Milling',
          description: 'Precision milling operations for complex geometries',
          image: '/placeholder.svg'
        },
        {
          name: 'CNC Turning',
          description: 'High-precision turning for cylindrical parts',
          image: '/placeholder.svg'
        },
        {
          name: 'VMC Operations',
          description: 'Vertical machining center for versatile manufacturing',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      category: 'Conventional Manufacturing',
      icon: Wrench,
      services: [
        {
          name: 'Turning',
          description: 'Traditional lathe operations for cylindrical components',
          image: '/placeholder.svg'
        },
        {
          name: 'Milling',
          description: 'Conventional milling for standard manufacturing needs',
          image: '/placeholder.svg'
        },
        {
          name: 'Grinding',
          description: 'Surface and cylindrical grinding for fine finishes',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      category: 'Advanced Manufacturing',
      icon: Zap,
      services: [
        {
          name: 'EDM',
          description: 'Electrical discharge machining for complex shapes',
          image: '/placeholder.svg'
        },
        {
          name: '3D Printing',
          description: 'Additive manufacturing for rapid prototyping',
          image: '/placeholder.svg'
        },
        {
          name: 'Laser Cutting',
          description: 'Precision laser cutting for sheet metal and acrylics',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      category: 'Fabrication & Assembly',
      icon: Cog,
      services: [
        {
          name: 'Sheet Metal',
          description: 'Custom sheet metal fabrication and forming',
          image: '/placeholder.svg'
        },
        {
          name: 'Welding',
          description: 'Professional welding services for various materials',
          image: '/placeholder.svg'
        },
        {
          name: 'Wiring Connector',
          description: 'Electrical connector assembly and wire harness',
          image: '/placeholder.svg'
        },
        {
          name: 'Buffing',
          description: 'Surface finishing and polishing services',
          image: '/placeholder.svg'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Manufacturing Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Precision manufacturing solutions with cutting-edge technology and traditional craftsmanship
          </p>
        </div>
      </section>

      {/* Manufacturing Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Manufacturing Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From conventional machining to advanced manufacturing technologies, we deliver precision parts and assemblies.
            </p>
          </div>

          <div className="space-y-16">
            {manufacturingServices.map((category, categoryIndex) => (
              <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, index) => (
                    <Card 
                      key={service.name}
                      className="group hover:shadow-large transition-all duration-300 overflow-hidden"
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <CardDescription>
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Quality & Precision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our manufacturing processes adhere to the highest quality standards, ensuring precision and reliability in every component we produce.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p><strong>ISO Standards:</strong> Certified quality management systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p><strong>Precision:</strong> Tolerances up to ±0.001" achievable</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p><strong>Materials:</strong> Wide range of metals, plastics, and composites</p>
                </div>
              </div>
            </div>
            <div>
              <Card className="shadow-large">
                <CardContent className="p-0">
                  <img 
                    src="/placeholder.svg" 
                    alt="Quality Control" 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Manufacturing?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get your precision parts manufactured with our advanced capabilities and quality assurance.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => window.location.href = '/contact'}
            className="bg-card text-card-foreground hover:bg-card/90"
          >
            Request Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;