import Image from 'next/image';
import Link from 'next/link';

interface GetConnectedProps {
  // Add any props here
}

const GetConnected: React.FC = () => {
  return (
    <div className="border border-[#9696FE] rounded-3xl p-4 md:p-8 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">
        Join the NEAR AI community and connect with like-minded innovators.
      </h1>

      <div className="flex flex-col md:flex-row mt-6 md:mt-10">
        <div className="w-full md:w-2/3 md:pr-8 flex flex-col mb-8 md:mb-0">
          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-4">
              <h2 className="text-xl md:text-[25px] font-medium text-[#9696FE] mb-4 md:mb-6 leading-[32px] tracking-[0.05em] font-['FK_Grotesk'] text-center md:text-left">
                Ways to Connect:
              </h2>
              
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-[18px] font-medium mb-2 md:mb-3 leading-[23.04px] tracking-[0.05em] font-['FK_Grotesk'] text-center md:text-left">
                  Office Hours:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-base md:text-[18px] leading-[23.04px] tracking-[0.05em] font-['FK_Grotesk'] pl-4">
                  <li>Join Office Hours with Illia Polosukhin</li>
                  <li><a href="https://www.youtube.com/@NEARProtocol/streams" target="_blank" rel="noopener noreferrer" className="text-[#9696FE] hover:underline">Watch Past Office Hours</a></li>
                  <li><a href="https://app.near.ai/" target="_blank" rel="noopener noreferrer" className="text-[#9696FE] hover:underline">Join the NEAR AI Developer Preview</a></li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-4">
              <h2 className="text-xl md:text-[25px] font-medium text-[#9696FE] mb-4 md:mb-6 leading-[32px] tracking-[0.05em] font-['FK_Grotesk'] text-center md:text-left">
                Community Engagement:
              </h2>
              <p className="mb-6 text-base md:text-[18px] leading-[23.04px] tracking-[0.05em] font-[&apos;FK_Grotesk&apos;] text-center md:text-left">
                Engage with NEAR&apos;s community of developers, researchers, and
                AI enthusiasts.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <a href="https://airtable.com/appFoIqAoY0ikoVIb/pagU0oUzjCQPIYfqz/form" target="_blank" rel="noopener noreferrer" className="block w-full">
              <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-4 md:px-6 py-3 md:py-4 rounded-full w-full hover:bg-[#9696FE] hover:text-black transition-colors text-sm md:text-base leading-[23.04px] tracking-[0.05em] font-['FK_Grotesk']">
                Sign up to join our exclusive Telegram community here
              </button>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="bg-[#9696FE] rounded-2xl p-4 relative">
            <Image 
              src="/images/illustrations/brain-hand-interface.svg" 
              alt="AI Community Illustration" 
              width={300}
              height={300}
              layout="responsive"
            />
            <div className="absolute top-4 left-4 w-[100px] h-[58px] md:w-[145px] md:h-[84.64px]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/illustrations/gears.svg"
                  alt="Gears Illustration"
                  layout="fill"
                  objectFit="contain"
                  className="text-[#9696FE]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetConnected;