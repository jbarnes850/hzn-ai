import Image from 'next/image';
import Link from 'next/link';
import Header from './header';

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
    <>
      <Header />
      <div className="border border-[#9696FE] rounded-3xl p-8 flex">
        {/* Left Column - Main Content */}
        <div className="w-1/2 pr-8">
          <h1 className="text-7xl font-medium mb-6">User-Owned <br/>AI is NEAR</h1>
          <p className="text-2xl mb-8">
            Join our AI Incubation Program to pioneer the next generation of decentralized AI applications.
          </p>

          {/* Feature List */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-[35px] h-[35px] bg-[#9797ff] mr-4 mt-1"></div>
                <p className="text-sm">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-x-4">
            <a href="https://near.ai/" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#9696FE] text-black px-6 py-2 rounded-full">Read NEAR AI Master Plan</button>
            </a>
            <a href="https://airtable.com/appc0ZVhbKj8hMLvH/pagVX3hSxzIj4Y680/form" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-6 py-2 rounded-full">
                Apply for the NEAR AI Incubation Program
              </button>
            </a>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="w-1/2">
          <div className="bg-[#9797ff] rounded-[25px] p-4">
            <Image 
              src="/images/illustrations/ai-illustration.svg" 
              alt="AI Illustration" 
              width={585} 
              height={421} 
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;