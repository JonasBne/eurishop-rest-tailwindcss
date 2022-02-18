import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BasketItem from './BasketItem';
import { CartItem, calculateTotalCartCost } from '../../domain/shoppingCart';

interface ShoppingCartProps {
  cartItems: CartItem[];
  onUpdate: (quantity: number, productId: string | number) => void;
  onClear: () => void;
}

function ShoppingCart({ cartItems, onUpdate, onClear }: ShoppingCartProps) {
  const handleClear = () => {
    onClear();
  };

  return (
    <div className="w-full mt-2 mr-1 rounded shadow-2xl">
      <h2 aria-level={2}>
        Shopping Cart
        <FontAwesomeIcon icon={faShoppingCart} className="ml-1" />
      </h2>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.product.id} className="pl-1">
              <BasketItem item={item} onUpdate={onUpdate} data-test-id={item.product.id} />
              <hr />
            </div>
          ))
        ) : (
          <div className="my-2 mx-3">Oops, your cart looks empty...</div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div>
          <h3 className="mt-2 mb-3 text-center">{`TOTAL: € ${calculateTotalCartCost(cartItems)}`}</h3>
          <div className="flex justify-center m-2">
            <button type="button" onClick={handleClear}>
              CLEAR
            </button>
            <button type="button" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              ORDER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
