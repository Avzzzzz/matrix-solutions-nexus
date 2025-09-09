import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { ChevronDown, ChevronRight, Code, Cpu, Lightbulb, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import WhatsappChat from "@/components/WhatsappChat";

const Services = () => {
  const [openSections, setOpenSections] = useState<string[]>(['designing']);
  const navigate = useNavigate(); // Initialize navigate

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const services = [
    {
      id: 'designing',
      icon: Lightbulb,
      title: 'Designing',
      description: 'Professional design services from concept to completion',
      route: '/services/designing', // Add route
      subservices: [
        { title: '2D Modelling', description: 'Precise 2D technical drawings and blueprints for manufacturing and documentation.' },
        { title: '3D Modelling', description: 'Advanced 3D modeling for visualization, prototyping, and manufacturing planning.' },
        { title: 'Drafting', description: 'Technical drafting services for engineering documentation and compliance.' },
        { title: 'Product Designing', description: 'We transform innovative ideas into user-centric, manufacturable products through expert design and prototyping.' }
      ]
    },
    {
      id: 'manufacturing',
      icon: Wrench,
      title: 'Manufacturing',
      description: 'Complete manufacturing solutions with advanced machinery and techniques',
      route: '/services/manufacturing', // Add route
      subservices: [
        { title: 'Non-Conventional Manufacturing', description: 'EDM, laser cutting, and other advanced non-conventional manufacturing processes.' },
        { title: 'Conventional Machining', description: 'Traditional machining operations including milling, drilling, and boring.' },
        { title: 'Fabrication', description: 'Structural fabrication and assembly services for various industries.' },
        { title: 'Prototyping', description: 'Rapid prototyping services for product development and testing.' }
      ]
    },
    {
      id: 'electrical',
      icon: Cpu,
      title: 'Electrical/Electronics',
      description: 'Complete electrical and electronic solutions for industrial applications',
      route: '/services/electrical-electronics', // Add route
      subservices: [
        { title: 'PLC Programming', description: 'Industrial automation programming for PLCs and control systems.' },
        { title: 'Electrical Panel Wiring', description: 'Professional electrical panel design, wiring, and installation services.' },
        { title: 'DIY Circuits', description: 'Custom circuit design and development for specialized applications.' }
      ]
    },
    {
      id: 'ai-ml',
      icon: Code,
      title: 'AI/ML',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      route: '/services/ai-ml', // Add route
      subservices: [
        { title: 'Computer Vision', description: 'Advanced computer vision systems for quality control, inspection, and automation.' },
        { title: 'Chatbots', description: 'Intelligent chatbot development for customer service and business automation.' }
      ]
    },
    {
      id: 'development',
      icon: Code,
      title: 'Development',
      description: 'Web, mobile, and embedded development solutions',
      route: '/services/development', // Add route
      subservices: [
        { title: 'Web Development', description: 'Custom web applications and websites.' },
        { title: 'Mobile Development', description: 'iOS and Android app development.' },
        { title: 'Embedded Systems', description: 'Firmware and embedded software solutions.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 font-sans">
      <WhatsappChat />
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions across design, manufacturing, electrical systems, and AI/ML
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card 
                key={service.id}
                className="shadow-large hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Collapsible 
                  open={openSections.includes(service.id)}
                  onOpenChange={() => toggleSection(service.id)}
                >
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="hover:bg-accent/5 transition-colors duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                            <service.icon className="h-8 w-8 text-accent" />
                          </div>
                          <div className="text-left">
                            {/* Make the title clickable for navigation */}
                            <button
                              className="text-2xl mb-2 font-bold text-accent hover:underline focus:outline-none"
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent dropdown toggle
                                navigate(service.route);
                              }}
                            >
                              {service.title}
                            </button>
                            <CardDescription className="text-base">
                              {service.description}
                            </CardDescription>
                          </div>
                        </div>
                        {openSections.includes(service.id) ? (
                          <ChevronDown className="h-6 w-6 text-accent" />
                        ) : (
                          <ChevronRight className="h-6 w-6 text-accent" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.subservices.map((subservice, subIndex) => (
                          <Card 
                            key={subservice.title}
                            className="border-accent/20 hover:border-accent/40 hover:shadow-medium transition-all duration-300"
                          >
                            <CardHeader>
                              <CardTitle className="text-lg text-accent">
                                {subservice.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground">
                                {subservice.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;