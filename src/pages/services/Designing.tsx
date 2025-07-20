import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Box, FileText, PenTool, Lightbulb } from 'lucide-react';

const Designing = () => {
  const designServices = [
    {
      icon: Box,
      title: '3D Modelling',
      description: 'Create detailed three-dimensional models using advanced CAD software for visualization, prototyping, and manufacturing preparation.',
      features: ['Parametric modeling', 'Assembly design', 'Rendering & visualization', 'File format compatibility'],
      image: '/placeholder.svg' // Will be replaced with actual images later
    },
    {
      icon: FileText,
      title: '2D Modelling',
      description: 'Precise technical drawings and schematics for manufacturing, construction, and documentation purposes.',
      features: ['Technical drawings', 'Schematic diagrams', 'Dimensioning', 'Standards compliance'],
      image: '/placeholder.svg'
    },
    {
      icon: PenTool,
      title: 'Drafting',
      description: 'Professional engineering drafts with precise measurements, annotations, and industry-standard formatting.',
      features: ['Engineering drawings', 'Blueprint creation', 'Detail drawings', 'Revision control'],
      image: '/placeholder.svg'
    },
    {
      icon: Lightbulb,
      title: 'Product Designing',
      description: 'Complete product development from concept to market-ready designs with user-centered approach.',
      features: ['Concept development', 'Prototyping', 'User experience design', 'Market analysis'],
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Design Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Transform your ideas into detailed designs with our comprehensive modeling and drafting services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Design Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we provide comprehensive design solutions for all your engineering needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-large transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Ready to Start Your Design Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experienced design team bring your vision to life with precision and innovation.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => window.location.href = '/contact'}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Designing;