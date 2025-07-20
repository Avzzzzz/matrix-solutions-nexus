import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Eye, MessageSquare, Bot, BarChart3, Zap } from 'lucide-react';

const AIML = () => {
  const aiServices = [
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image processing and object recognition systems for industrial automation and quality control.',
      features: ['Object detection', 'Quality inspection', 'OCR systems', 'Real-time monitoring'],
      image: '/placeholder.svg'
    },
    {
      icon: MessageSquare,
      title: 'Chatbots & NLP',
      description: 'Intelligent conversational AI systems for customer service and business automation.',
      features: ['Natural language processing', 'Intent recognition', 'Multi-language support', 'Integration APIs'],
      image: '/placeholder.svg'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting models to optimize business operations and decision making.',
      features: ['Demand forecasting', 'Maintenance prediction', 'Risk assessment', 'Performance optimization'],
      image: '/placeholder.svg'
    },
    {
      icon: Bot,
      title: 'Process Automation',
      description: 'Intelligent automation solutions that learn and adapt to streamline business processes.',
      features: ['RPA integration', 'Workflow optimization', 'Decision automation', 'Adaptive systems'],
      image: '/placeholder.svg'
    }
  ];

  const technologies = [
    {
      category: 'Machine Learning',
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost']
    },
    {
      category: 'Computer Vision',
      tools: ['OpenCV', 'YOLO', 'ResNet', 'VGG', 'Custom CNNs']
    },
    {
      category: 'Natural Language',
      tools: ['BERT', 'GPT Models', 'spaCy', 'NLTK', 'Transformers']
    },
    {
      category: 'Deployment',
      tools: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Edge Computing']
    }
  ];

  const useCases = [
    {
      icon: Brain,
      title: 'Quality Control',
      description: 'Automated visual inspection systems for manufacturing quality assurance.'
    },
    {
      icon: Zap,
      title: 'Predictive Maintenance',
      description: 'AI-powered systems to predict equipment failures and optimize maintenance schedules.'
    },
    {
      icon: Eye,
      title: 'Security Systems',
      description: 'Intelligent surveillance and access control with facial recognition and behavior analysis.'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Advanced analytics for data-driven decision making and process optimization.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI & Machine Learning
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Harness the power of artificial intelligence to transform your business with intelligent automation and insights
          </p>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our AI/ML Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge artificial intelligence solutions tailored to your business needs and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
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

      {/* Technologies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Latest AI/ML frameworks and tools to deliver state-of-the-art solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card 
                key={tech.category}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-center">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tech.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Real-World Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our AI solutions are transforming industries and solving complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={useCase.title}
                className="group hover:shadow-large transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <useCase.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our AI Development Process</h2>
              <p className="text-lg text-muted-foreground mb-6">
                From concept to deployment, we follow a systematic approach to deliver robust AI solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold">Data Analysis & Problem Definition</h4>
                    <p className="text-muted-foreground">Understanding your data and defining clear objectives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold">Model Development & Training</h4>
                    <p className="text-muted-foreground">Building and training custom AI models for your needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold">Testing & Optimization</h4>
                    <p className="text-muted-foreground">Rigorous testing and performance optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold">Deployment & Monitoring</h4>
                    <p className="text-muted-foreground">Seamless deployment with continuous monitoring</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="shadow-large">
                <CardContent className="p-0">
                  <img 
                    src="/placeholder.svg" 
                    alt="AI Development Process" 
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
          <h2 className="text-4xl font-bold mb-4">Ready to Embrace AI?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Transform your business with intelligent AI solutions. Let's discuss how artificial intelligence can revolutionize your operations.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => window.location.href = '/contact'}
            className="bg-card text-card-foreground hover:bg-card/90"
          >
            Start Your AI Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIML;