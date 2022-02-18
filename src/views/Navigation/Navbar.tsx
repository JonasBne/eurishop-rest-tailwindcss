import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BurgerIcon, CrossIcon, ShoppingCartIcon } from '../../assets/Icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((preOpen) => !preOpen);
  };

  // TODO: fix basket, load data from app itself (the query to pass down)
  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex justify-between items-center px-4 py-3 sm:p-0">
        <div>
          <h2 className="text-left text-white font-semibold sm:text-2xl lg:text-3xl">Eurishop</h2>
        </div>
        <div className="flex">
          <div className="sm:hidden">
            <button
              type="button"
              className="block text-gray-400 focus:text-white outline-none hover:text-white"
              onClick={handleClick}
            >
              {isOpen && <CrossIcon />}
              {!isOpen && <BurgerIcon />}
            </button>
          </div>
          <button type="button" className="relative flex text-gray-400">
            <ShoppingCartIcon />
            <span className="absolute right-0 top-0 rounded-full bg-blue-600 w-3 h-3 top right p-0 m-0 text-white font-mono text-xs leading-tight text-center">
              5
            </span>
          </button>
        </div>
      </div>

      <div className={`px-2 pt-2 pb-4 ${isOpen ? 'block' : 'hidden'} sm:flex sm:p-0`}>
        <Link to="home" className="block px-2 py-1 text-white text-sm hover:bg-gray-800 rounded sm:ml-3 sm:text-lg">
          Home
        </Link>
        <Link
          to="products/admin"
          className="block px-2 py-1 text-white text-sm hover:bg-gray-800 rounded sm:ml-3 sm:text-lg"
        >
          Products
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
