import Image from 'next/image';
import Link from 'next/link';

interface Feature {
  text: string;
}

interface AIProject {
  name: string;
  logo: string;
}

const LandingPage: React.FC = () => {
  const features: Feature[] = [
    { text: "Gain access to unmatched support and compute credits designed to propel your AI project" },
    { text: "Connect with top-tier founders and integrate into NEAR's AI ecosystem" },
    { text: "Leverage our resources, mentorship, and strategic partnerships to build the future of decentralized AI." }
  ];

  const featuredProjects: AIProject[] = [
    { name: 'Ringfence', logo: '/images/logo/ringfence.svg' },
    { name: 'Hyperbolic', logo: '/images/logo/hyperbolic.png' },
    { name: 'nevermined', logo: '/images/logo/nevermind.png' },
    { name: 'MIZU', logo: '/images/logo/mizu-logo-1.png' },
    { name: 'exaBITS', logo: '/images/logo/exabits.png' },
    { name: 'Pond', logo: '/images/logo/pond.svg' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center mb-16">
          {/* Left Column - Main Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8">
              User-Owned <br/>AI is NEAR
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              Join our AI Incubation Program to pioneer decentralized AI applications.
            </p>

            {/* Feature List */}
            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Image
                    src="/images/icons/star bullet.svg"
                    alt="Star bullet"
                    width={35}
                    height={35}
                    className="mr-4 mt-1 flex-shrink-0"
                  />
                  <p className="text-sm md:text-base">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="bg-[#9797ff] rounded-[25px] p-4 mb-8">
              <Image 
                src="/images/illustrations/homepage-brain.svg" 
                alt="AI Illustration" 
                width={585}
                height={421}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://near.ai/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2">
                <button className="w-full bg-transparent border border-[#9696FE] text-[#9696FE] px-6 py-3 rounded-full text-lg hover:bg-[#9696FE] hover:text-black transition-colors whitespace-nowrap">
                  Read NEAR AI Master Plan
                </button>
              </a>
              <a href="https://airtable.com/appc0ZVhbKj8hMLvH/pagVX3hSxzIj4Y680/form" target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2">
                <button className="w-full bg-[#9696FE] text-black px-6 py-3 rounded-full text-lg hover:bg-[#8080FF] transition-colors whitespace-nowrap">
                  Apply for the Program
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Featured AI Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-[#9696FE] mb-4">Featured AI Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <div 
                key={project.name} 
                className="bg-[#1E1E1E] p-4 rounded-lg flex items-center justify-center h-32 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2A2A2A] cursor-pointer"
              >
                <Image 
                  src={project.logo} 
                  alt={project.name} 
                  width={120} 
                  height={60} 
                  objectFit="contain"
                  className="max-h-24"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;