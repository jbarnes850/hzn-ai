import Image from 'next/image';
import Link from 'next/link';

interface Feature {
  text: string;
}

const LandingPage: React.FC = () => {
  const features: Feature[] = [
    { text: "Gain access to unmatched support and compute credits designed to propel your AI project" },
    { text: "Connect with top-tier founders and integrate into NEAR's AI ecosystem" },
    { text: "Leverage our resources, mentorship, and strategic partnerships to build the future of decentralized AI." }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Main Content */}
          <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
              User-Owned <br/>AI is NEAR
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Join our AI Incubation Program to pioneer the next generation of decentralized AI applications.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://near.ai/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full bg-transparent border border-[#9696FE] text-[#9696FE] px-6 py-3 rounded-full text-lg hover:bg-[#9696FE] hover:text-black transition-colors">
                  Read NEAR AI Master Plan
                </button>
              </a>
              <a href="https://airtable.com/appc0ZVhbKj8hMLvH/pagVX3hSxzIj4Y680/form" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full bg-[#9696FE] text-black px-6 py-3 rounded-full text-lg hover:bg-[#8080FF] transition-colors">
                  Apply for the NEAR AI Incubation Program
                </button>
              </a>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="bg-[#9797ff] rounded-[25px] p-4">
              <Image 
                src="/images/illustrations/homepage-brain.png" 
                alt="AI Illustration" 
                width={585}
                height={421}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;