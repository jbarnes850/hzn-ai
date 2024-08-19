import Image from 'next/image';

interface Section {
  title: string;
  icon: string;
  points: string[];
}

const WhyHZN: React.FC = () => {
  const sections: Section[] = [
    {
      title: 'Unmatched Support:',
      icon: '/images/icons/support-icon.svg',
      points: [
        'Access to industry-leading mentors like Illia Polosukhin and Alex Skidanov.',
        'Dedicated technical assistance to seamlessly integrate with NEAR\'s AI ecosystem.',
        'Weekly sessions covering essential topics from go-to-market strategy to token design.'
      ]
    },
    {
      title: 'Founder-Friendly Terms:',
      icon: '/images/icons/handshake-icon.svg',
      points: [
        'Token-based grants and compute credits provided by the NEAR Foundation.',
        'Capital deployed from Venture Partners'
      ]
    },
    {
      title: 'Strategic Ecosystem Integration:',
      icon: '/images/icons/ecosystem-icon.svg',
      points: [
        'Collaborate with top-tier projects and founders in the blockchain and AI space.',
        'Integration opportunities with NEAR\'s robust infrastructure and ecosystem.',
        'Office space available in NYC or SF to foster collaboration and innovation.'
      ]
    }
  ];

  return (
    <div className="border border-[#9696FE] rounded-3xl p-4 sm:p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">Why Choose HZN?</h1>
          <div className="flex flex-col gap-4"></div>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8">
            Accelerate your AI project with NEAR Horizon.
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Build decentralized AI applications prioritizing user ownership
            and privacy.
          </p>
  
          <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
            <a href="https://www.youtube.com/@NEARProtocol/streams" target="_blank" rel="noopener noreferrer" className="block">
              <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base hover:bg-[#9696FE] hover:text-black transition-colors w-full">Join Office Hours with Illia Polosukhin</button>
            </a>
            <a href="https://airtable.com/appc0ZVhbKj8hMLvH/pagVX3hSxzIj4Y680/form" target="_blank" rel="noopener noreferrer" className="block">
              <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base hover:bg-[#9696FE] hover:text-black transition-colors w-full">Apply for the NEAR AI Incubation Program</button>
            </a>
          </div>
        </div>
  
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 mt-6 md:mt-0">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[80px] bg-[#9797ff] rounded-[16px] flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                <Image src={section.icon} alt={section.title} width={28} height={28} className="sm:w-[35px] sm:h-[35px]" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 md:mb-3">{section.title}</h3>
                <ul className="list-disc list-outside space-y-1 sm:space-y-2 ml-4">
                  {section.points.map((point, i) => (
                    <li key={i} className="text-xs sm:text-sm md:text-base">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyHZN;