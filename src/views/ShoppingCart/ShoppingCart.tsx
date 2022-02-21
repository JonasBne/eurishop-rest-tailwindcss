import React, { useEffect } from 'react';
import { faShoppingCart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import BasketItem from './BasketItem';
import { calculateTotalCartCost } from '../../domain/shoppingCart';
import PaymentDetails from './PaymentDetails';
import Button from '../../components/Button';
import {
  useGetBasket,
  useMutationBasketClear,
  useMutationBasketPatch,
  useMutationBasketRemoveItem,
} from '../../api/basketApi';
import toasts from '../../components/toasts';

function ShoppingCart() {
  const { succesToast, failToast } = toasts();

  const navigate = useNavigate();

  const { cart, cartRefetch } = useGetBasket();
  const cartItems = cart?.items ?? [];
  const { mutate: patch, error: patchBasketError, data: patchedData } = useMutationBasketPatch();
  const { mutate: clearBasket, error: clearBasketError, data: clearedData } = useMutationBasketClear();
  const { mutate: removeItem, error: removeItemError, data: removedData } = useMutationBasketRemoveItem();

  useEffect(() => {
    if (patchBasketError) {
      failToast(patchBasketError);
    }
    if (removeItemError) {
      failToast(removeItemError);
    }
    if (clearBasketError) {
      failToast(clearBasketError);
    }
    if (patchedData || removedData || clearedData) {
      succesToast('Success!');
      cartRefetch();
    }
  }, [patchBasketError, removeItemError, clearBasketError, patchedData, removedData, clearedData]);

  const handleUpdate = (quantity: number, productId: string | number) => {
    if (quantity === 0) {
      removeItem({
        productId,
      });
    }
    if (quantity > 0) {
      patch({
        data: {
          quantity,
        },
        productId,
      });
    }
  };

  const handleClear = () => {
    clearBasket();
  };

  const handleRedirect = () => {
    navigate('/home');
  };

  return (
    <div className="max-w-md mx-auto shadow-lg border-2 border-solid border-gray-300 bg-gray-50 rounded-lg mt-6 md:max-w-5xl">
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
                      <BasketItem key={cartItem.product.id} item={cartItem} onUpdate={handleUpdate} />
                    ))}
                  </div>
                  <div className=" grid grid-cols-2 items-center md:flex md:justify-between md:items-center mt-6 pt-6 border-t">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6 mr-2 text-blue-500 hover:text-blue-700" />
                      <Button variant="secondary" onClick={handleRedirect}>
                        Continue Shopping
                      </Button>
                    </div>
                    <Button variant="warning" className="py-2 px-4 justify-left" onClick={handleClear}>
                      Clear Basket
                    </Button>
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
          {!cartItems ||
            (cartItems.length === 0 && (
              <div>
                <span className="p-5">Your cart is empty.</span>
                <div className="flex items-center mt-6">
                  <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6 text-blue-600 hover:text-blue-800" />
                  <Button variant="secondary" className="py-1 px-2" onClick={handleRedirect}>
                    Start Shopping
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
