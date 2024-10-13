import React from 'react';
import { Building2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Building2 size={32} className="mr-2" />
          <h1 className="text-2xl font-bold">SERVIMAX</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-400">HOME</a></li>
            <li><a href="#" className="hover:text-blue-400">PRICING</a></li>
            <li><a href="#" className="hover:text-blue-400">SERVICES</a></li>
            <li><a href="#" className="hover:text-blue-400">ABOUT</a></li>
            <li><a href="#" className="hover:text-blue-400">CONTACT</a></li>
          </ul>
        </nav>
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">SIGN UP</button>
      </div>
    </header>
  );
};

export default Header;