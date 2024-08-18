import Image from 'next/image';
import Link from 'next/link';

interface GetConnectedProps {
  // Add any props here
}

const GetConnected: React.FC = () => {
  return (
    <div className="border border-[#9696FE] rounded-3xl p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Join the NEAR AI community and connect with like-minded innovators.
        Stay updated on the latest developments, participate in exclusive events,
        and engage with our ecosystem.
      </h1>

      <div className="flex mt-8">
        <div className="w-2/3 pr-8">
          <h2 className="text-2xl font-semibold text-[#9696FE] mb-4">Ways to Connect:</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Office Hours:</h3>
            <ul className="list-disc list-inside">
              <li>Join Office Hours with Illia Polosukhin</li>
              <li>Watch Past Office Hours</li>
            </ul>
          </div>

          <Link href="https://app.near.ai/" className="text-[#9696FE] underline" target="_blank" rel="noopener noreferrer">
            NEAR AI Developer Preview
          </Link>

          <div className="mt-6 space-y-4">
            <a href="https://airtable.com/appFoIqAoY0ikoVIb/pagU0oUzjCQPIYfqz/form" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-6 py-2 rounded-full w-full">
                Sign up to join our exclusive Telegram community here
              </button>
            </a>
            <a href="https://airtable.com/appc0ZVhbKj8hMLvH/pagsVjkk5LZ66MbJm/form" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border border-[#9696FE] text-[#9696FE] px-6 py-2 rounded-full w-full">
                Get Involved with NEAR AI
              </button>
            </a>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#9696FE] mb-4">Community Engagement:</h2>
            <p>
              Engage with NEAR&apos;s community of developers, researchers, and
              AI enthusiasts.
            </p>
          </div>
        </div>

        <div className="w-1/3">
          <div className="bg-[#9696FE] rounded-2xl p-4">
            <Image 
              src="/images/illustrations/ai-community.svg" 
              alt="AI Community Illustration" 
              width={300}
              height={300}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetConnected;