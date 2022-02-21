import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSlash } from '@fortawesome/free-solid-svg-icons';
import ShoppingBagIcon from './ShoppingBagIcon';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('cart');
  };

  const handleClick = () => {
    setIsOpen((preOpen) => !preOpen);
  };

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex justify-between items-center px-4 py-3 sm:p-0 sm:justify-around">
        <div>
          <h2 className="text-left text-white font-semibold sm:text-2xl lg:text-3xl font-mono">Eurishop</h2>
        </div>
        <div className="flex items-center">
          <ShoppingBagIcon className="md:hidden" onBagClick={handleRedirect} />
          <div className="sm:hidden">
            <button
              type="button"
              className="block text-gray-400 focus:text-white outline-none hover:text-white mx-2"
              onClick={handleClick}
            >
              {isOpen && <FontAwesomeIcon icon={faSlash} />}
              {!isOpen && <FontAwesomeIcon icon={faBars} />}
            </button>
          </div>
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
      <ShoppingBagIcon className="hidden md:block" onBagClick={handleRedirect} />
    </header>
  );
}

export default Navbar;
