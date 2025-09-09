import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit, Activity, Eye, Bot } from 'lucide-react';
import WhatsappChat from "@/components/WhatsappChat";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const heroText = "AI & Machine Learning";

const TypingAnimation = ({ text, speed = 80 }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-900 bg-clip-text text-transparent font-extrabold text-5xl md:text-6xl mb-6" style={{ textShadow: "0 2px 16px rgba(37,99,235,0.3)" }}>
      {displayed}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
};

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
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-white">
        {/* AI Image fills the hero section */}
        <img
          src="/images/ai.jpg"
          alt="AI Hero"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          style={{ opacity: 1 }}
        />
        {/* Hero Content */}
        <div className="relative z-10 w-full text-center flex flex-col items-center justify-center">
          <TypingAnimation text={heroText} speed={80} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-bold text-blue-100"
            style={{ textShadow: "0 2px 12px rgba(37,99,235,0.5)" }}
          >
            Unlock intelligence in your systems with next-gen AI and ML technologies tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-primary mb-4 bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900 bg-clip-text text-transparent"
            >
              Our AI/ML Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              From algorithms to automation, we help you turn data into actionable insights through AI innovation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group hover:shadow-large transition-all duration-300 animate-fade-in overflow-hidden bg-white rounded-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-base text-blue-700">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-primary mb-4 bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900 bg-clip-text text-transparent"
          >
            Want to Integrate AI into Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Let our experts design intelligent solutions that drive innovation and growth.
          </motion.p>
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
