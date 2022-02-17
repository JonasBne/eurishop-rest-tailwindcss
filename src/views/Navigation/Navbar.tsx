import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((preOpen) => !preOpen);
  };

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex justify-between items-center px-4 py-3 sm:p-0">
        <div>
          <h2 className="text-left text-white font-semibold">Eurishop</h2>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-400 focus:text-white outline-none hover:text-white"
            onClick={handleClick}
          >
            <svg viewBox="0 0 24 24" className="fill-current h-6 w-6">
              {isOpen && (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`px-2 pt-2 pb-4 ${isOpen ? 'block' : 'hidden'} sm:flex sm:p-0`}>
        <Link to="home" className="block px-2 py-1 text-white text-sm hover:bg-gray-800 rounded sm:ml-3">
          Home
        </Link>
        <Link to="products/admin" className="block px-2 py-1 text-white text-sm hover:bg-gray-800 rounded sm:ml-3">
          Products
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
