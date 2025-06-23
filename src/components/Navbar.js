import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Maghraut Technologies</div>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:text-gray-200">Home</a></li>
        <li><a href="#about" className="hover:text-gray-200">About</a></li>
        <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
      </ul>
    </nav>
  );
}
