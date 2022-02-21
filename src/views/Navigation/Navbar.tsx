import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSlash, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/no-cycle
import { cartIsOpenAtom, cartItemsAtom } from '../../App';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItemsTotal] = useAtom(cartItemsAtom);
  const [, setCartIsOpen] = useAtom(cartIsOpenAtom);

  console.log(cartItemsTotal);

  const handleClick = () => {
    setIsOpen((preOpen) => !preOpen);
  };

  const handleCartClick = () => {
    setCartIsOpen((preOpen) => !preOpen);
  };

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex justify-between items-center px-4 py-3 sm:p-0 sm:justify-around">
        <div>
          <h2 className="text-left text-white font-semibold sm:text-2xl lg:text-3xl font-mono">Eurishop</h2>
        </div>
        <div className="flex items-center">
          <div className="sm:hidden">
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="block text-gray-200 focus:text-white outline-none hover:text-white mx-4"
              onClick={handleCartClick}
            />
            <span className="absolute right-12 top-2 rounded-full bg-blue-600 w-4 h-4 text-white font-mono text-xs text-center">
              {cartItemsTotal}
            </span>
          </div>
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
      <div className=" hidden sm:block">
        <FontAwesomeIcon
          icon={faShoppingBag}
          className="block text-gray-200 focus:text-white outline-none hover:text-white mx-4"
          onClick={handleCartClick}
        />
        <span className="absolute right-12 top-2 rounded-full bg-blue-600 w-4 h-4 text-white font-mono text-xs text-center">
          {cartItemsTotal}
        </span>
      </div>
    </header>
  );
}

export default Navbar;
