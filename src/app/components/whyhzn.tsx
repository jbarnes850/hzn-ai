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
    <div className="border border-[#9696FE] rounded-3xl p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-between">
          <h1 className="text-5xl font-bold mb-8">Why Choose HZN for Your AI Journey?</h1>
          
          <p className="text-xl mb-8">
            At NEAR Horizon, we&apos;re dedicated to empowering the next generation of AI pioneers. By joining our incubation program, you&apos;ll be at the forefront of developing decentralized AI applications that prioritize user ownership and privacy.
          </p>

          <div className="space-y-8">
            <a href="https://www.youtube.com/@NEARProtocol/streams" target="_blank" rel="noopener noreferrer" className="block mb-4">
              <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-6 py-3 rounded-full text-sm hover:bg-[#9696FE] hover:text-black transition-colors w-full">Join Office Hours with Illia Polosukhin</button>
            </a>
            <a href="https://airtable.com/appc0ZVhbKj8hMLvH/pagVX3hSxzIj4Y680/form" target="_blank" rel="noopener noreferrer" className="block">
              <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-6 py-3 rounded-full text-sm hover:bg-[#9696FE] hover:text-black transition-colors w-full">Apply for the NEAR AI Incubation Program</button>
            </a>
          </div>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="flex items-start">
              <div className="w-[120px] h-[100px] bg-[#9797ff] rounded-[20px] flex items-center justify-center mr-6 flex-shrink-0">
                <Image src={section.icon} alt={section.title} width={50} height={50} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">{section.title}</h3>
                <ul className="list-disc list-outside space-y-2 ml-4">
                  {section.points.map((point, i) => (
                    <li key={i} className="text-sm">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyHZN;