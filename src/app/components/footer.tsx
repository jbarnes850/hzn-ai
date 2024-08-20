const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-center py-4 text-sm text-gray-500">
      <div>
        © {new Date().getFullYear()} NEAR Foundation. All rights reserved.
      </div>
      <div className="mt-2">
        <a href="https://dev.near.org/privacy" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;