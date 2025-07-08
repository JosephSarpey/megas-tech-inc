/* eslint-disable @typescript-eslint/no-unused-vars */
import { FiUsers, FiTarget, FiAward, FiGlobe, FiCode, FiLayers, FiCheckCircle, FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiFlyingTarget } from 'react-icons/gi';
import { LuCodesandbox, LuFileSearch } from 'react-icons/lu';
import { TbFileAnalytics } from 'react-icons/tb';

const About = () => {
  const stats = [
    { id: 1, name: 'Projects Completed', value: '10+', icon: FiLayers },
    { id: 2, name: 'Happy Clients', value: '5+', icon: FiUsers },
    { id: 3, name: 'Technologies', value: '10+', icon: FiCode },
  ];

  const team = [
    {
      name: 'Our Team',
      role: 'Passionate Innovators',
      image: '/team/placeholder.jpg',
      bio: 'A dedicated group of professionals with diverse expertise in technology and business solutions.',
    },
    {
      name: 'Our Mission',
      role: 'Driving Innovation',
      image: '/team/placeholder.jpg',
      bio: 'To deliver cutting-edge solutions that help businesses thrive in the digital age.',
    },
    {
      name: 'Our Vision',
      role: 'Shaping the Future',
      image: '/team/placeholder.jpg',
      bio: 'To be at the forefront of technological innovation and digital transformation.',
    },
  ]; 

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            We&apos;re a team of passionate developers, designers, and strategists dedicated to building
            exceptional digital experiences.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/about/office.jpg"
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

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Founded in June 2025, Megas Tech Inc. is a dynamic startup on a mission to revolutionize 
                  the digital landscape. Though we&apos;re new to the scene, our team brings together years of 
                  combined experience in technology, design, and business strategy.
                </p>
                <p className="text-lg">
                  We&apos;re excited to work with forward-thinking businesses of all sizes, helping them navigate 
                  the digital world with innovative solutions tailored to their unique needs. Our fresh 
                  perspective and passion for technology drive us to deliver exceptional results for our clients.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-medium text-gray-900">Our Mission</h3>
                <div className="mt-4 flex items-start">
                  <div className="flex-shrink-0">
                    <FiTarget className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    To empower businesses through innovative technology solutions that drive growth
                    and create lasting impact.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-medium text-gray-900">Our Values</h3>
                <div className="mt-4 space-y-4">
                  {[
                    {
                      name: 'Innovation',
                      description:
                        'We embrace change and constantly seek new ways to solve problems.',
                      icon: FiCode,
                    },
                    {
                      name: 'Excellence',
                      description: 'We take pride in delivering high-quality work in everything we do.',
                      icon: FiAward,
                    },
                    {
                      name: 'Collaboration',
                      description: 'We believe in the power of teamwork and open communication.',
                      icon: FiUsers,
                    },
                    {
                      name: 'Integrity',
                      description: 'We do what we say and stand by our word.',
                      icon: FiGlobe,
                    },
                  ].map((value, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <value.icon
                          className="h-6 w-6 text-accent"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">{value.name}</h4>
                        <p className="text-base text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                >
                  <dt className="order-2 mt-2 text-lg font-medium text-gray-500">
                    {stat.name}
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-accent">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section - Commented out for future use */}
      {/* <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The talented people behind our success
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <div key={person.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      <span className="inline-block h-24 w-24 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 text-center">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-base text-gray-600 text-center">
                      {person.role}
                    </p>
                    <p className="mt-3 text-base text-gray-600 text-center">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

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
