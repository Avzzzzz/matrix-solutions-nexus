import { ArrowRight, Code, Cpu, Lightbulb, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Lightbulb,
      title: 'Designing',
      description: '2D/3D modeling, drafting, and innovative design solutions for your projects.',
      link: '/services#designing'
    },
    {
      icon: Wrench,
      title: 'Manufacturing',
      description: 'Precision manufacturing with CNC, VMC, 3D printing, and advanced fabrication.',
      link: '/services#manufacturing'
    },
    {
      icon: Cpu,
      title: 'Electrical/Electronics',
      description: 'PLC programming, panel wiring, and custom electronic circuit solutions.',
      link: '/services#electrical'
    },
    {
      icon: Code,
      title: 'AI/ML',
      description: 'Computer vision, chatbots, and intelligent automation solutions.',
      link: '/services#ai-ml'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Matrix <span className="text-accent">Solution</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up">
            Transforming ideas into reality through innovative design, precision manufacturing, 
            and cutting-edge technology solutions.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground animate-glow-pulse"
            onClick={() => scrollToSection('about')}
          >
            Explore Our Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-6">
                About Matrix Solution
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a technology-driven company committed to delivering excellence through 
                innovation, precision, and reliability. Our expertise spans across multiple 
                domains, ensuring comprehensive solutions for modern businesses.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-foreground"><strong>Vision:</strong> To be the leading provider of integrated technology solutions.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-foreground"><strong>Expertise:</strong> 10+ years of combined experience in design and manufacturing.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-foreground"><strong>Reliability:</strong> Trusted by 100+ clients worldwide for quality solutions.</p>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <Card className="shadow-large hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <img 
                    src={heroImage} 
                    alt="Matrix Solution Team" 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions across design, manufacturing, electronics, and AI technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-large transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.location.href = service.link}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Innovative hardware solutions including panels, actuators, robotic kits, and more.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.location.href = '/products'}
            className="hover:bg-accent hover:text-accent-foreground"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how Matrix Solution can transform your business with our innovative technology solutions.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => window.location.href = '/contact'}
            className="bg-card text-card-foreground hover:bg-card/90"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;