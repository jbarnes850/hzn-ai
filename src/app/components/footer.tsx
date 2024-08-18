const Footer: React.FC = () => {
    return (
      <footer className="bg-black text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} NEAR Foundation. All rights reserved.
      </footer>
    );
  };
  
  export default Footer;