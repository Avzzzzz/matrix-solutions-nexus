import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit, Activity, Eye, Bot } from 'lucide-react';
import WhatsappChat from "@/components/WhatsappChat";

const AIML = () => {
  const aiServices = [
    {
      icon: BrainCircuit,
      title: 'Predictive Analytics',
      description: 'Leverage historical data to forecast trends and improve decision-making across your business processes.',
      features: ['Data-driven models', 'Real-time insights', 'Forecasting accuracy', 'Business intelligence'],
      image: '/services/aiml/analytics.jpg'
    },
    {
      icon: Activity,
      title: 'Machine Learning Models',
      description: 'Design and deploy ML algorithms for classification, clustering, regression, and more.',
      features: ['Supervised learning', 'Unsupervised learning', 'Model training', 'Performance tuning'],
      image: '/services/aiml/ml.jpg'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Empower systems to interpret and understand images or video data automatically.',
      features: ['Object detection', 'Image recognition', 'Facial analysis', 'Visual data pipelines'],
      image: '/services/aiml/vision.jpg'
    },
    {
      icon: Bot,
      title: 'Natural Language Processing (NLP)',
      description: 'Extract meaning and insights from text with NLP tools for chatbots, sentiment analysis, and more.',
      features: ['Text classification', 'Chatbot integration', 'Speech-to-text', 'Entity recognition'],
      image: '/services/aiml/nlp.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white text-black font-sans">
      <WhatsappChat />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI & Machine Learning
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Unlock intelligence in your systems with next-gen AI and ML technologies tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our AI/ML Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From algorithms to automation, we help you turn data into actionable insights through AI innovation.
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

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Want to Integrate AI into Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experts design intelligent solutions that drive innovation and growth.
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

export default AIML;
