import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-4">
          {/* Facebook */}
          <a
            href="#"
            className="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-300 mt-4 text-center">
          Follow us on social media for updates and more!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
