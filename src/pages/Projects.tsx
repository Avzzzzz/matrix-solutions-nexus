import { ArrowRight, Calendar, Users, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Automated Quality Control System',
      category: 'R&D',
      description: 'AI-powered vision system for real-time quality control in manufacturing processes.',
      image: '/api/placeholder/400/250',
      technologies: ['Computer Vision', 'PLC', 'AI/ML'],
      timeline: '6 months',
      team: '4 engineers',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Custom SPM for Automotive Parts',
      category: 'SPM',
      description: 'Special Purpose Machine designed for precision manufacturing of automotive components.',
      image: '/api/placeholder/400/250',
      technologies: ['CNC', 'Automation', 'Control Systems'],
      timeline: '8 months',
      team: '6 engineers',
      status: 'completed'
    },
    {
      id: 3,
      title: 'IoT-Enabled Smart Factory Solution',
      category: 'R&D',
      description: 'Complete IoT infrastructure for smart factory monitoring and predictive maintenance.',
      image: '/api/placeholder/400/250',
      technologies: ['IoT', 'Cloud Computing', 'Data Analytics'],
      timeline: '12 months',
      team: '8 engineers',
      status: 'ongoing'
    },
    {
      id: 4,
      title: 'Robotic Assembly Line',
      category: 'Prototype',
      description: 'Fully automated robotic assembly line for electronic component manufacturing.',
      image: '/api/placeholder/400/250',
      technologies: ['Robotics', 'Vision Systems', 'PLCs'],
      timeline: '10 months',
      team: '5 engineers',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Advanced Material Testing Machine',
      category: 'Product Development',
      description: 'High-precision testing equipment for advanced material characterization.',
      image: '/api/placeholder/400/250',
      technologies: ['Precision Engineering', 'Data Acquisition', 'Control Systems'],
      timeline: '9 months',
      team: '7 engineers',
      status: 'completed'
    },
    {
      id: 6,
      title: 'AI Chatbot for Customer Service',
      category: 'R&D',
      description: 'Intelligent chatbot system with natural language processing capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['NLP', 'Machine Learning', 'Cloud APIs'],
      timeline: '4 months',
      team: '3 engineers',
      status: 'ongoing'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'ongoing': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'ongoing': return 'In Progress';
      default: return 'Planning';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Projects</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-slide-up">
            Showcasing our expertise through innovative solutions and successful project deliveries
          </p>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">30+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">R&D Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group hover:shadow-large transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-48 bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Project Image</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-card text-card-foreground">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`}></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className={`text-xs px-2 py-1 rounded text-white ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                  
                  <CardDescription className="mb-4 line-clamp-3">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-accent/30 text-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{project.team}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Have a Project in Mind?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your ideas to life with our expertise and innovative solutions.
          </p>
          <Button 
            size="lg" 
            variant="hero"
            onClick={() => window.location.href = '/contact'}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;