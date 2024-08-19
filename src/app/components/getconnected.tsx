import Image from 'next/image';
import Link from 'next/link';

interface GetConnectedProps {
  // Add any props here
}

const GetConnected: React.FC = () => {
  return (
    <div className="border border-[#9696FE] rounded-3xl p-8 text-white">
      <h1 className="text-3xl font-bold mb-8">
        Join the NEAR AI community and connect with like-minded innovators.
        Stay updated on the latest developments, participate in exclusive events,
        and engage with our ecosystem.
      </h1>

      <div className="flex mt-10">
        <div className="w-2/3 pr-8 flex flex-col">
          <div className="flex mb-8">
            <div className="w-1/2 pr-4">
              <h2 className="text-[25px] font-medium text-[#9696FE] mb-6 leading-[32px] tracking-[0.05em] font-['FK_Grotesk']">
                Ways to Connect:
              </h2>
              
              <div className="mb-8">
                <h3 className="text-[18px] font-medium mb-3 leading-[23.04px] tracking-[0.05em] font-['FK_Grotesk']">
                  Office Hours:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-[18px] leading-[23.04px] tracking-[0.05em] font-['FK_Grotesk']">
                  <li>Join Office Hours with Illia Polosukhin</li>
                  <li><a href="https://www.youtube.com/@NEARProtocol/streams" target="_blank" rel="noopener noreferrer" className="text-[#9696FE] hover:underline">Watch Past Office Hours</a></li>
                  <li><a href="https://app.near.ai/" target="_blank" rel="noopener noreferrer" className="text-[#9696FE] hover:underline">Join the NEAR AI Developer Preview</a></li>
                </ul>
              </div>
            </div>

            <div className="w-1/2 pl-4">
              <h2 className="text-[25px] font-medium text-[#9696FE] mb-6 leading-[32px] tracking-[0.05em] font-['FK_Grotesk']">
                Community Engagement:
              </h2>
              <p className="mb-6 text-[18px] leading-[23.04px] tracking-[0.05em] font-[&apos;FK_Grotesk&apos;]">
                Engage with NEAR&apos;s community of developers, researchers, and
                AI enthusiasts.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <a href="https://airtable.com/appFoIqAoY0ikoVIb/pagU0oUzjCQPIYfqz/form" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-6 py-3 rounded-full w-full hover:bg-[#9696FE] hover:text-black transition-colors text-[18px] leading-[23.04px] tracking-[0.05em] font-['FK_Grotesk']">
                Sign up to join our exclusive Telegram community here
              </button>
            </a>
          </div>
        </div>

        <div className="w-1/3">
          <div className="bg-[#9696FE] rounded-2xl p-4 relative">
            <Image 
              src="/images/illustrations/brain-hand-interface.svg" 
              alt="AI Community Illustration" 
              width={300}
              height={300}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="absolute top-15 left-15 -translate-x-35 -translate-y-35 w-[145px] h-[84.64px]">
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