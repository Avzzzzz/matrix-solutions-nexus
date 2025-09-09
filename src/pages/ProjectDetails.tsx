import { useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const projectData = [
  {
    id: 1,
    title: 'Automated Quality Control System',
    category: 'R&D',
    description: 'AI-powered vision system for real-time quality control in manufacturing processes.',
    image: '/images/project1.jpg', // Place image in public/images
    technologies: ['Computer Vision', 'PLC', 'AI/ML'],
    timeline: '6 months',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Custom SPM for Automotive Parts',
    category: 'SPM',
    description: 'Special Purpose Machine designed for precision manufacturing of automotive components.',
    image: '/images/project2.jpg',
    technologies: ['CNC', 'Automation', 'Control Systems'],
    timeline: '8 months',
    status: 'completed'
  },
  // ... rest of your projects
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-500';
    case 'ongoing': return 'bg-blue-500';
    default: return 'bg-gray-500';
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-2xl text-red-600">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6 md:px-20 bg-background text-foreground">
      <Card className="max-w-4xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-4xl mb-2">{project.title}</CardTitle>
          <div className="flex items-center gap-4">
            <Badge className="text-sm">{project.category}</Badge>
            <span className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`}></span>
            <span className="text-muted-foreground text-sm capitalize">{project.status}</span>
          </div>
        </CardHeader>
        <CardContent>
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg w-full h-64 object-cover mb-6"
          />
          <p className="text-lg mb-4">{project.description}</p>

          <div className="mb-4">
            <h3 className="font-semibold mb-1">Timeline:</h3>
            <p className="text-muted-foreground">{project.timeline}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs border-accent text-accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetails;
