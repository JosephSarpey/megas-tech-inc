"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { FiUsers, FiTarget, FiAward, FiGlobe, FiCode, FiLayers, FiCheckCircle, FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiFlyingTarget } from 'react-icons/gi';
import { LuCodesandbox, LuFileSearch } from 'react-icons/lu';
import { TbFileAnalytics } from 'react-icons/tb';
import { useRef } from 'react';
import ScrollAnimations from '@/components/animations/ScrollAnimations';

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const stats = [
    { id: 1, name: 'Projects Completed', value: '10+', icon: FiLayers },
    { id: 2, name: 'Happy Clients', value: '5+', icon: FiUsers },
    { id: 3, name: 'Technologies', value: '10+', icon: FiCode },
  ];

  const team = [
    {
      name: 'Our Team',
      role: 'Passionate Innovators',
      image: '/team1.jpg',
      bio: 'A dedicated group of professionals with diverse expertise in technology and business solutions.',
    },
    {
      name: 'Our Mission',
      role: 'Driving Innovation',
      image: '/team2.jpg',
      bio: 'To deliver cutting-edge solutions that help businesses thrive in the digital age.',
    },
    {
      name: 'Our Vision',
      role: 'Shaping the Future',
      image: '/team3.jpg',
      bio: 'To be at the forefront of technological innovation and digital transformation.',
    },
  ]; 

  return (
    <div className="bg-white">
      {/* GSAP Animations */}
      <ScrollAnimations />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              We&apos;re a team of passionate developers, designers, and strategists dedicated to building
              exceptional digital experiences.
            </p>
          </div>
          <div className="mt-12 relative lg:mt-0">
            <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
              <Image
                className="w-full h-auto parallax-image"
                src="/about-hero.jpg"
                alt="Our team working together"
                width={600}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="stat-item bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                      <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <Image
                  className="absolute inset-0 h-full w-full object-cover parallax-image"
                  src="/office.webp"
                  alt="Our office"
                  width={500}
                  height={700}
                />
                <div className="absolute inset-0 bg-accent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
                <div className="relative px-8">
                  <div>
                    <div className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-white text-accent">
                      Established June 2025
                    </div>
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <p className="relative">
                        We believe in the power of technology to transform businesses and create
                        meaningful connections with customers.
                      </p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 space-y-6">
                <p>
                  Founded in 2025, Megas Tech Inc. started with a simple mission: to create
                  exceptional digital experiences that make a difference. What began as a small
                  team of passionate technologists has grown into a full-service digital
                  agency serving clients worldwide.
                </p>
                <p>
                  Our journey has been marked by innovation, creativity, and an unwavering
                  commitment to excellence. We&apos;ve had the privilege of working with startups,
                  established businesses, and everything in between, helping them navigate the
                  ever-changing digital landscape.
                </p>
                <p>
                  Today, we continue to push boundaries and challenge the status quo, always
                  striving to deliver solutions that not only meet but exceed our clients&apos;
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div ref={teamRef} className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Guiding principles that shape our culture and drive our success.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="team-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover parallax-image"
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-accent">{member.role}</p>
                  <p className="mt-4 text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Approach
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              How we turn your ideas into reality
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Discovery & Strategy',
                  description: 'We start by deeply understanding your business goals and challenges to craft a tailored strategy.',
                  icon: <LuFileSearch />
                },
                {
                  title: 'Design & Development',
                  description: 'Our team brings your vision to life with clean, efficient code and intuitive design.',
                  icon: <LuCodesandbox />
                },
                {
                  title: 'Deployment & Growth',
                  description: 'We don\'t just build and leave - we ensure your solution grows with your business.',
                  icon: <TbFileAnalytics />
                }
              ].map((step, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6 text-4xl">
                      {step.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose a Startup */}
      <div className="relative bg-gray-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-100" />
        </div>
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose a Startup?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Fresh perspectives, agile approach, and dedicated focus on your success
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Agile & Flexible',
                  description: 'As a startup, we adapt quickly to your needs and market changes, ensuring you get the most effective solutions.',
                  icon: <AiFillThunderbolt />,
                },
                {
                  title: 'Cutting-Edge',
                  description: 'We leverage the latest technologies and methodologies to deliver innovative solutions that give you a competitive edge.',
                  icon: <FiCheckCircle />,
                },
                {
                  title: 'Personalized Service',
                  description: 'You\'re not just another client. We provide dedicated attention and tailor our services to your specific goals.',
                  icon: <GiFlyingTarget />,
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your project?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-accent-100">
            We&apos;d love to hear about your project and how we can help bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-accent bg-white hover:bg-gray-50 sm:w-auto"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
