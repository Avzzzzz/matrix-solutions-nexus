import { useState } from 'react';
import emailjs from "emailjs-com";
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import WhatsappChat from "@/components/WhatsappChat";

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone: string) =>
  /^\+?\d{10,15}$/.test(phone.replace(/\s/g, ""));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ email?: string; contactNumber?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: undefined
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: { email?: string; contactNumber?: string } = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!validatePhone(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number (10-15 digits, with country code).";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    // Updated EmailJS integration
    emailjs.send(
      "service_tqa1axe", // new service id
      "template_03xph0x", // new template id
      {
        from_name: formData.name,
        from_email: formData.email,
        contact_number: formData.contactNumber,
        message: formData.message,
      },
      "FGCgYRsuOVMCF72vb" // new public key
    )
    .then(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting Matrix Solution. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', contactNumber: '', message: '' });
      setIsSubmitting(false);
    })
    .catch((error) => {
      toast({
        title: "Failed to send message.",
        description: error.text || "Please try again later or contact us directly.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email',
      contact: 'info@matrixsolution.com',
      action: 'mailto:info@matrixsolution.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Message us directly',
      contact: '+91 9867214498',
      action: 'https://wa.me/919867214498'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call us directly',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Visit our office',
      contact: 'Tech Hub, Innovation District',
      action: '#'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <WhatsappChat />
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-slide-up">
            Ready to transform your business? Get in touch with our team of experts
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-large">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="transition-all duration-200 focus:shadow-medium"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-all duration-200 focus:shadow-medium"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">{errors.email}</span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-number">Contact Number</Label>
                      <Input
                        id="contact-number"
                        name="contactNumber"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        placeholder="+91 "
                        required
                        className="transition-all duration-200 focus:shadow-medium"
                      />
                      {errors.contactNumber && (
                        <span className="text-red-500 text-sm">{errors.contactNumber}</span>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project or requirements..."
                        rows={6}
                        required
                        className="transition-all duration-200 focus:shadow-medium"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      variant="hero"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  We're here to help you succeed. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className="group hover:shadow-large transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      if (info.action.startsWith('http') || info.action.startsWith('mailto') || info.action.startsWith('tel')) {
                        window.open(info.action, '_blank');
                      }
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <info.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                          <p className="text-sm font-medium text-accent group-hover:underline">
                            {info.contact}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <Card className="shadow-large">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <p className="text-lg font-medium text-primary">Interactive Map</p>
                  <p className="text-muted-foreground">Our office location will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;