import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
	{
		id: 'ecommerce-platform',
		title: 'Vestraversa Fashion Hub',
		description: 'A scalable online store with seamless checkout and modern UI.',
		image: '/vestraversa.jpg',
		details: 'This e-commerce platform features a complete shopping experience with product listings, cart functionality, secure checkout, and order management. Built with modern web technologies for optimal performance and user experience.',
		technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Paypal', 'Tailwind CSS'],
		github: 'https://github.com/JosephSarpey/VESTRA-VERSA',
		demo: 'https://www.vestraversa.com'
	},
	{
		id: 'travel-agency',
		title: 'TeeBel Global Travel Consultancy',
		description: 'A travel agency website with interactive animations and responsive design.',
		image: '/teebel.jpg',
		details: 'A modern travel booking platform featuring destination showcases, tour packages, booking system, and customer reviews. The website includes smooth animations and is fully responsive across all devices.',
		technologies: ['Next.js', 'Paystack', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
		github: 'https://github.com/JosephSarpey/teebel-global-travel-consultancy',
		demo: 'https://teebel-global-travel-consultancy.vercel.app/'
	},
	{
		id: 'construction',
		title: 'Dermolahu Draughtmanship Construction Works',
		description: 'A construction website with interactive animations and responsive design.',
		image: '/dermolahu.jpg',
		details: 'A professional construction company website showcasing services, completed projects, and client testimonials. Features include project galleries, service details, and contact forms.',
		technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Formik'],
		github: 'https://github.com/JosephSarpey/Dermolahu-draughtmanship-construction-works',
		demo: 'https://dermolahu-draughtmanship-construction-works.vercel.app/'
	}
];

export async function generateMetadata(
  { params }: { params: Promise<{ projectId: string }> }
): Promise<Metadata> {
  const { projectId } = await params;
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return {
      title: 'Project Not Found | MEGAS TECH INC',
    };
  }

  return {
    title: `${project.title} | MEGAS TECH INC`,
    description: project.description,
    openGraph: {
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
		<div className="min-h-screen bg-gray-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="mb-12">
					<Link 
						href="/projects" 
						className="inline-flex items-center text-accent hover:text-accent-light transition-colors mb-6"
					>
						<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
						</svg>
						Back to Projects
					</Link>
					
					<h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
					<p className="text-xl text-gray-300 mb-8">{project.description}</p>
					
					<div className="relative w-full h-auto aspect-video rounded-xl overflow-hidden mb-8">
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-contain"
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
						/>
					</div>
					
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2">
							<h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
							<p className="text-gray-300 mb-8">{project.details}</p>
							
							<div className="mt-8">
								<h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<span key={tech} className="bg-gray-800 text-accent px-3 py-1 rounded-full text-sm">
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
						
						<div className="lg:col-span-1">
							<div className="bg-gray-800 p-6 rounded-xl">
								<h3 className="text-xl font-semibold mb-4">Project Details</h3>
								<ul className="space-y-4">
									<li>
										<span className="text-gray-400">Category:</span> Web Development
									</li>
									<li>
										<span className="text-gray-400">Client:</span> {project.title}
									</li>
									<li>
										<span className="text-gray-400">Technologies:</span> {project.technologies.join(', ')}
									</li>
								</ul>
								
								<div className="mt-8 space-y-3">
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent-dark transition-colors"
									>
										<FiExternalLink className="mr-2" />
										View Live Demo
									</a>
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-colors"
									>
										<FiGithub className="mr-2" />
										View on GitHub
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export function generateStaticParams() {
	return projects.map((project) => ({
		projectId: project.id,
	}));
}
