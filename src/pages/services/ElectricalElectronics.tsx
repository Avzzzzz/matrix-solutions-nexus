import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, CircuitBoard, Zap, Settings2 } from 'lucide-react';

const ElectricalElectronics = () => {
  const electricalServices = [
    {
      icon: Cpu,
      title: 'PLC Programming',
      description: 'Industrial automation solutions with programmable logic controllers for manufacturing processes.',
      features: ['Ladder logic programming', 'HMI development', 'SCADA integration', 'Process automation'],
      image: '/placeholder.svg'
    },
    {
      icon: CircuitBoard,
      title: 'Panel Wiring',
      description: 'Professional electrical panel design, wiring, and installation for industrial applications.',
      features: ['Control panel design', 'Wire harness assembly', 'Component integration', 'Testing & commissioning'],
      image: '/placeholder.svg'
    },
    {
      icon: Zap,
      title: 'Circuit Design',
      description: 'Custom electronic circuit design and development for various applications and industries.',
      features: ['PCB design', 'Analog/Digital circuits', 'Power electronics', 'Signal processing'],
      image: '/placeholder.svg'
    },
    {
      icon: Settings2,
      title: 'Automation Systems',
      description: 'Complete automation solutions including sensors, actuators, and control systems.',
      features: ['Industrial IoT', 'Motor control', 'Sensor integration', 'Remote monitoring'],
      image: '/placeholder.svg'
    }
  ];

  const technicalCapabilities = [
    {
      category: 'Programming Languages',
      items: ['Ladder Logic', 'Function Block Diagram', 'Structured Text', 'C/C++', 'Python']
    },
    {
      category: 'Hardware Platforms',
      items: ['Allen-Bradley', 'Siemens', 'Schneider Electric', 'Mitsubishi', 'Arduino/Raspberry Pi']
    },
    {
      category: 'Communication Protocols',
      items: ['Modbus', 'Profibus', 'Ethernet/IP', 'CAN Bus', 'Serial Communication']
    },
    {
      category: 'Design Software',
      items: ['RSLogix', 'TIA Portal', 'Unity Pro', 'Altium Designer', 'KiCad']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Electrical & Electronics
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Advanced electrical solutions and electronic systems for industrial automation and control
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Electrical Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical and electronics solutions from design to implementation and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {electricalServices.map((service, index) => (
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
                    <h4 className="font-semibold text-foreground">Capabilities:</h4>
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

      {/* Technical Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Technical Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team has extensive experience with industry-standard platforms and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <Card 
                key={capability.category}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-center">{capability.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Industry Applications</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our electrical and electronics solutions serve various industries with reliable and efficient automation systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Manufacturing</h4>
                  <h4 className="font-semibold">Automotive</h4>
                  <h4 className="font-semibold">Food & Beverage</h4>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Pharmaceutical</h4>
                  <h4 className="font-semibold">Oil & Gas</h4>
                  <h4 className="font-semibold">Water Treatment</h4>
                </div>
              </div>
            </div>
            <div>
              <Card className="shadow-large">
                <CardContent className="p-0">
                  <img 
                    src="/placeholder.svg" 
                    alt="Industrial Control Panel" 
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
          <h2 className="text-4xl font-bold mb-4">Need Electrical Solutions?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our electrical engineering experts design and implement the perfect automation solution for your needs.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => window.location.href = '/contact'}
            className="bg-card text-card-foreground hover:bg-card/90"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ElectricalElectronics;