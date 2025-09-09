import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import WhatsappChat from "@/components/WhatsappChat";

const designServices = [
	{
		title: 'Product Designing',
		description: 'We offer complete product development from concept to market-ready designs. Our user-centered approach ensures your product stands out and meets market needs.',
		features: ['Concept development', 'Prototyping', 'User experience design', 'Market analysis'],
		image: '/placeholder.svg'
	},
	{
		title: '2D Modelling',
		description: 'Get precise technical drawings and schematics for manufacturing, construction, and documentation. We ensure all drawings meet industry standards and requirements.',
		features: ['Technical drawings', 'Schematic diagrams', 'Dimensioning', 'Standards compliance'],
		image: '/placeholder.svg'
	},
	{
		title: '3D Modelling',
		description: 'We create detailed three-dimensional models using advanced CAD software for visualization, prototyping, and manufacturing preparation.',
		features: ['Parametric modeling', 'Assembly design', 'Rendering & visualization', 'File format compatibility'],
		image: '/placeholder.svg'
	},
];

const callNumber = "+919867214498"; // Replace with your actual number

const Designing = () => {
    return (
        <div className="min-h-screen pt-16 bg-white text-black font-sans">
            <WhatsappChat />
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] flex items-center justify-center bg-white">
  <img
    src="\images\hero-bg.jpg"
    alt="Designing"
    className="absolute inset-0 w-full h-full object-cover"
    style={{ zIndex: 0 }}
  />
  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center bg-black/40">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
      Design Solutions
    </h1>
    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 text-white drop-shadow">
      Transform your ideas into detailed designs with our comprehensive modeling and drafting services
    </p>
  </div>
</section>

            {/* Services Paragraphs */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-6 space-y-12">
                    {designServices.map((service, index) => (
                        <div key={service.title} className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-8 gap-8">
                            <div className="w-full md:w-1/3 flex justify-center">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-64 h-48 object-cover rounded-lg border border-gray-200"
                                />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                                <p className="text-lg text-gray-700 mb-4">{service.description}</p>
                                <ul className="list-disc list-inside text-gray-600 mb-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                                <Button
                                    size="lg"
                                    className="bg-green-600 hover:bg-green-700 text-white"
                                    onClick={() => window.location.href = "mailto:sagarchothani8@gmail.com"}
                                >
                                    Get in touch
                                </Button>
                            </div>
                        </div>
                    ))}
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
