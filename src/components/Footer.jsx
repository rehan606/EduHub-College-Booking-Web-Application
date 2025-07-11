import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0D1117] text-gray-300 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Column 1: Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-white rounded-sm"></div>
            <Link href="/" className="font-semibold text-xl uppercase md:text-2xl text-white cursor-pointer"> Edu<span  className='text-[#FFC107]'>Hub</span> </Link>
          </h2>
          <p className="text-sm">
            Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id
            placerat tacimates definitionem sea, prima quidam vim no.
          </p>
          <p className="text-sm mt-2">
            Duo nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus
            expetendis vis.
          </p>

          {/* Social Icons */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-white mb-2">FOLLOW US</p>
            <div className="flex items-center gap-4 text-white text-lg">
              <FaFacebookF className="hover:text-purple-400 cursor-pointer" />
              <FaTwitter className="hover:text-purple-400 cursor-pointer" />
              <FaInstagram className="hover:text-purple-400 cursor-pointer" />
              <FaTiktok className="hover:text-purple-400 cursor-pointer" />
              <FaWhatsapp className="hover:text-purple-400 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Useful links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Admission</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Login</a></li>
            <li><a href="#" className="hover:text-white">Register</a></li>
            <li><a href="#" className="hover:text-white">News & Events</a></li>
            <li><a href="#" className="hover:text-white">Contacts</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact with Us</h3>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhoneAlt className="text-purple-400" /> +880 1822 1822 07
          </p>
          <p className="text-sm mb-4 flex items-center gap-2">
            <FaEnvelope className="text-purple-400" /> info@eduhub.com
          </p>

          <h4 className="text-white text-sm font-semibold mb-2">Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 bg-[#1A1F2E] border border-gray-600 rounded-l-md focus:outline-none text-sm w-full"
            />
            <button className="px-4 bg-[#92278F] text-white text-sm rounded-r-md hover:bg-purple-700">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>Terms and conditions &nbsp; | &nbsp; Privacy</p>
        <p>© EduHub</p>
      </div>
    </footer>
  );
};

export default Footer;
