/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
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
    <div className="max-w-md mx-auto bg-blue-50 shadow-lg rounded-lg md:max-w-5xl">
      <div className="md:flex ">
        <div className="w-full p-4 px-5 py-5">
          <div className="md:grid md:grid-cols-3 gap-2 ">
            <div className="col-span-2 p-5">
              <h1 className="text-xl font-bold text-blue-900 ">
                Shopping Cart
                <FontAwesomeIcon icon={faShoppingCart} className="ml-5" />
              </h1>
              <div className="flex flex-col mt-6 pt-6">
                {cartItems.map((cartItem) => (
                  <BasketItem key={cartItem.product.id} item={cartItem} onUpdate={onUpdate} />
                ))}
              </div>
              <div className="flex justify-between items-center mt-6 pt-6 border-t">
                <div className="flex items-center">
                  <i className="fa fa-arrow-left text-sm pr-2" />{' '}
                  <span className="text-md font-medium text-blue-500">Continue Shopping</span>{' '}
                </div>
                <div className="flex justify-center items-end">
                  <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>{' '}
                  <span className="text-lg font-bold text-gray-800 "> $24.90</span>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
