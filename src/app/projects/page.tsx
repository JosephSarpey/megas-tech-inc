import { Metadata } from 'next';
import ProjectsList from '@/components/projects/ProjectsList';

export const metadata: Metadata = {
  title: 'Our Projects | MEGAS TECH',
  description: 'Explore our portfolio of successful projects and see how we help businesses transform through technology.',
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Projects</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of our recent work and see how we&#39;ve helped our clients achieve their business goals
            through innovative technology solutions.
          </p>
        </div>

        <ProjectsList />

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have a project in mind?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&#39;s build something amazing together. Get in touch to discuss your project requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
