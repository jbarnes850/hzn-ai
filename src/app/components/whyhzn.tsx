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
      icon: '/images/icons/terms-icon.svg',
      points: [
        'Token-based grants and compute credits provided by the NEAR Foundation.'
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
    <div className="border border-[#9696FE] rounded-3xl p-8">
      <h1 className="text-5xl font-bold mb-6">Why Choose HZN for Your AI Journey?</h1>
      <p className="mb-8 max-w-2xl">
        At NEAR Horizon, we&apos;re dedicated to empowering the next generation of AI pioneers. By joining our incubation program, you&apos;ll be at the forefront of developing decentralized AI applications that prioritize user ownership and privacy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <a href="https://www.youtube.com/@NEARProtocol/streams" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#9696FE] text-black px-6 py-2 rounded-full mb-4">Join Office Hours with Illia Polosukhin</button>
          </a>
          <a href="https://airtable.com/appc0ZVhbKj8hMLvH/pagVX3hSxzIj4Y680/form" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#9696FE] text-black px-6 py-2 rounded-full">Apply for the NEAR AI Incubation Program</button>
          </a>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="flex">
              <Image src={section.icon} alt={section.title} width={50} height={50} className="mr-4" />
              <div>
                <h3 className="font-bold mb-2">{section.title}</h3>
                <ul className="list-disc list-inside">
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