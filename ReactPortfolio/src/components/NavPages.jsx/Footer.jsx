import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-4">
        {/* Name or Branding */}
        <p className="text-lg font-semibold text-orange-400">Mayank Sharma</p>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a href="https://github.com/Mayank-dev-app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mayank-sharma-991b17369/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="mailto:Mayank.Sharma.dev06@gmail.com" className="hover:text-gray-400">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Mayank Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
