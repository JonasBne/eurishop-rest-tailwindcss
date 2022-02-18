import React from 'react';
import { faShoppingCart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BasketItem from './BasketItem';
import { CartItem, calculateTotalCartCost } from '../../domain/shoppingCart';
import PaymentDetails from './PaymentDetails';
import Button from '../../components/Button';

interface ShoppingCartProps {
  cartItems: CartItem[];
  onUpdate: (quantity: number, productId: string | number) => void;
  onClear: () => void;
}

function ShoppingCart({ cartItems, onUpdate, onClear }: ShoppingCartProps) {
  const handleClear = () => {
    onClear();
  };

  // TODO: handle redirect to products page when a user clicks on 'continue shopping' or 'start shopping'
  // TODO: cart should not always be shown - fix with context
  return (
    <>
      <div className="max-w-md mx-auto shadow-lg border-2 border-solid border-gray-300 bg-gray-50 rounded-lg md:max-w-5xl">
        <div className="md:flex ">
          <div className="w-full p-4 px-5 py-5">
            <div className="md:grid md:grid-cols-3 gap-2 ">
              <div className="col-span-2 p-5">
                <h1 className="text-xl font-bold text-blue-900 ">
                  Shopping Cart
                  <FontAwesomeIcon icon={faShoppingCart} className="ml-5" />
                </h1>
                {cartItems.length > 0 && (
                  <>
                    <div className="flex flex-col mt-6 pt-6">
                      {cartItems.map((cartItem) => (
                        <BasketItem key={cartItem.product.id} item={cartItem} onUpdate={onUpdate} />
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className="w-6 h-6 mr-2 text-blue-500 hover:text-blue-700"
                        />
                        <Button variant="secondary">Continue Shopping</Button>
                      </div>
                      <div className="flex justify-center items-end">
                        <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                        <span className="text-lg font-bold text-gray-800 ">{`€ ${calculateTotalCartCost(
                          cartItems,
                        )}`}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {cartItems.length > 0 && <PaymentDetails />}
            </div>
          </div>
        </div>
      </div>
      {!cartItems ||
        (cartItems.length === 0 && (
          <div className="mt-6">
            <span>Your cart looks empty...</span>
            <div className="flex items-center mt-6">
              <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6 mr-2 text-blue-600 hover:text-blue-800" />
              <Button>Start Shopping</Button>
            </div>
          </div>
        ))}
    </>
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
