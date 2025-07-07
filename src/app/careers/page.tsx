import { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight, FiMapPin, FiClock, FiDollarSign } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Careers | Join Our Team | MEGAS TECH INC',
  description: 'Explore career opportunities at MEGAS TECH INC. Join our team of talented professionals and work on exciting technology projects.',
};

type JobOpening = {
  id: string;
  title: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

const jobOpenings: JobOpening[] = [
  {
    id: 'fe-dev',
    title: 'Senior Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    salary: '$90,000 - $130,000',
    description: 'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces and implementing features using modern web technologies.',
    responsibilities: [
      'Develop and maintain responsive web applications using React/Next.js',
      'Collaborate with designers to implement pixel-perfect UIs',
      'Optimize applications for maximum speed and scalability',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and team discussions'
    ],
    requirements: [
      '5+ years of experience in frontend development',
      'Proficiency in JavaScript/TypeScript, React, and Next.js',
      'Experience with state management (Redux, Context API)',
      'Strong understanding of responsive design and CSS-in-JS',
      'Familiarity with RESTful APIs and GraphQL'
    ]
  },
  {
    id: 'ui-designer',
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Remote',
    salary: '$80,000 - $110,000',
    description: 'We are seeking a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into beautiful, intuitive, and functional designs.',
    responsibilities: [
      'Create user-centered designs by considering market analysis, customer feedback, and usability findings',
      'Design UI elements and tools such as navigation menus, search boxes, tabs, and widgets',
      'Develop UI mockups and prototypes that clearly illustrate how sites function and look',
      'Create original graphic designs (e.g., images, sketches, and tables)',
      'Identify and troubleshoot UX problems'
    ],
    requirements: [
      '3+ years of UI/UX design experience',
      'Portfolio of design projects',
      'Knowledge of wireframe tools (e.g., Figma, Sketch)',
      'Team spirit; strong communication skills to collaborate with various stakeholders',
      'Good time-management skills'
    ]
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote',
    salary: '$100,000 - $150,000',
    description: 'We are looking for a DevOps Engineer to help us build functional systems that improve customer experience. You will be responsible for deploying product updates, identifying production issues, and implementing integrations that meet customer needs.',
    responsibilities: [
      'Implement CI/CD pipelines for automated testing and deployment',
      'Manage cloud infrastructure (AWS/Azure/GCP)',
      'Monitor and maintain system health and performance',
      'Automate infrastructure provisioning and configuration',
      'Ensure security best practices are implemented'
    ],
    requirements: [
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Knowledge of containerization (Docker, Kubernetes)',
      'Experience with infrastructure as code (Terraform, CloudFormation)',
      'Strong background in Linux/Unix administration',
      'Experience with monitoring tools (Prometheus, Grafana, etc.)'
    ]
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          We&apos;re looking for talented individuals who are passionate about technology and innovation. 
          Join us in building the future of digital solutions.
        </p>
        <Link 
          href="#open-positions" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-300"
        >
          View Open Positions
          <FiArrowRight className="ml-2" />
        </Link>
      </div>

      {/* Why Work With Us */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Flexible Work Environment',
              description: 'Work from anywhere with our remote-first policy and flexible working hours.'
            },
            {
              title: 'Competitive Compensation',
              description: 'We offer competitive salaries, stock options, and comprehensive benefits.'
            },
            {
              title: 'Continuous Learning',
              description: 'Access to learning resources, conferences, and training programs.'
            },
            {
              title: 'Cutting-Edge Technology',
              description: 'Work with the latest technologies and tools in the industry.'
            },
            {
              title: 'Impactful Work',
              description: 'Build products that make a real difference in people\'s lives.'
            },
            {
              title: 'Great Team',
              description: 'Collaborate with talented, passionate, and supportive colleagues.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 text-accent">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div id="open-positions" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-accent/50 transition-colors duration-300">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                  <div className="flex items-center space-x-4 mt-2 md:mt-0">
                    <span className="flex items-center text-gray-300">
                      <FiMapPin className="mr-1" /> {job.location}
                    </span>
                    <span className="flex items-center text-gray-300">
                      <FiClock className="mr-1" /> {job.type}
                    </span>
                    <span className="flex items-center text-accent font-medium">
                      <FiDollarSign className="mr-1" /> {job.salary}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      {job.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link 
                  href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
                >
                  Apply for this position
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Match Section */}
        <div className="text-center mt-16 bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Don&apos;t see a role that fits?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals to join our team. 
            Send us your resume and tell us how you can contribute to our mission.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-2 border border-accent text-base font-medium rounded-md text-white bg-accent/10 hover:bg-accent/20 transition-colors duration-300"
          >
            Contact Us
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
