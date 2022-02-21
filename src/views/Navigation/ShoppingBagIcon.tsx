import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useGetBasket } from '../../api/basketApi';

interface ShoppingBagIconProps {
  onClickBasket: () => void;
}

function ShoppingBagIcon({ onClickBasket }: ShoppingBagIconProps) {
  const { cart } = useGetBasket();

  const handleBasketClick = () => {
    onClickBasket();
  };

  return (
    <div className="flex items-center">
      <div className="sm:hidden">
        <FontAwesomeIcon
          icon={faShoppingBag}
          className="block text-gray-200 focus:text-white outline-none hover:text-white mx-4"
          onClick={handleBasketClick}
        />
        <span className="absolute right-12 top-2 rounded-full bg-blue-600 w-4 h-4 text-white font-mono text-xs text-center">
          {cart?.items.length}
        </span>
      </div>
    </div>
  );
}

export default ShoppingBagIcon;
