import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Maghraut Technologies</div>

      <ul className="flex gap-6 items-center">
        <li><Link to="/" className="hover:text-gray-200">Home</Link></li>

        {/* Services */}
        <li className="relative group">
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="hover:text-gray-200">Services</span>
            <FontAwesomeIcon icon={faCaretDown} className="text-xs" />
          </div>
          <ul className="absolute left-0 top-full mt-2 bg-blue-600 text-white rounded shadow-lg py-2 w-48 
               opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all 
               duration-200 z-50 border-t-2 border-white">
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/service1">Web Development</Link></li>
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/service2">App Development</Link></li>
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/service3">UI/UX Design</Link></li>
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/service4">Cloud Services</Link></li>
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/service5">SEO Optimization</Link></li>
          </ul>
        </li>

        {/* Products */}
        <li className="relative group">
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="hover:text-gray-200">Products</span>
            <FontAwesomeIcon icon={faCaretDown} className="text-xs" />
          </div>
          <ul className="absolute left-0 top-full mt-2 bg-blue-600 text-white rounded shadow-lg py-2 w-48 
               opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all 
               duration-200 z-50 border-t-2 border-white">
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/product1">Product A</Link></li>
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/product2">Product B</Link></li>
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/product3">Product C</Link></li>
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/product4">Product D</Link></li>
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/product5">Product E</Link></li>
          </ul>
        </li>

        {/* Testimonials */}
        <li><a href="#testimonials" className="hover:text-gray-200">Testimonials</a></li>

        {/* About */}
        <li className="relative group">
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="hover:text-gray-200">About</span>
            <FontAwesomeIcon icon={faCaretDown} className="text-xs" />
          </div>
          <ul className="absolute right-0 top-full mt-2 bg-blue-600 text-white rounded shadow-lg py-2 w-48 
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all 
                         duration-200 z-50 border-t-2 border-white">
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/history">Our History</Link></li>
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/team">Meet the Team</Link></li>
            <li className="px-4 py-2 hover:bg-blue-500"><Link to="/career">Career</Link></li>
          </ul>
        </li>

        {/* Contact */}
        <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
      </ul>
    </nav>
  );
}
