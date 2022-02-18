/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartItem, calculateTotalCostPerCartItem } from '../../domain/shoppingCart';

interface BasketItemProps {
  item: CartItem;
  onUpdate: (quantity: number, productId: string | number) => void;
}

function BasketItem({ item, onUpdate }: BasketItemProps) {
  const handleUpdate = (action: string) => {
    let { quantity } = item;
    const productId = item.product.id!;

    if (action === 'decrement') {
      quantity -= 1;
    }
    if (action === 'increment') {
      quantity += 1;
    }
    onUpdate(quantity, productId);
  };

  return (
    <div role="cart-item" className="flex justify-between my-2">
      <div className="flex items-center">
        <img src={item.product.image} alt={item.product.title} width="60" className="rounded-full" />
        <div className="flex flex-col ml-3">
          <span className="md:text-md font-semibold font-mono text-gray-900">{item.product.title}</span>
          <span className="text-xs font-light text-gray-600">#{item.product.sku}</span>
          <span className="text-xs font-light text-gray-800">Unit price: €{item.product.price}</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="pr-8 flex items-center mx-10 ">
          <FontAwesomeIcon
            icon={faMinus}
            className="w-3 h-3 block hover:cursor-pointer"
            onClick={() => handleUpdate('decrement')}
          />
          <div className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-xs py-1 px-3 mx-3">
            {item.quantity}
          </div>
          <FontAwesomeIcon
            icon={faPlus}
            className="w-3 h-3 block hover:cursor-pointer"
            onClick={() => handleUpdate('increment')}
          />
        </div>
        <div className="pr-8 ">
          <span className="text-sm font-medium">{`Total: € ${calculateTotalCostPerCartItem(item)}`}</span>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
