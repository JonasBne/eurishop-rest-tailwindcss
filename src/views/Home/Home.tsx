/* eslint-disable jsx-a11y/aria-role */
import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { useGetProducts } from '../../api/productsApi';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import LoadingSpinner from '../../components/LoadingSpinner';
import ProductCard from './ProductCard';
// eslint-disable-next-line import/no-cycle
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import {
  useGetBasket,
  useMutationBasketPost,
  useMutationBasketPatch,
  useMutationBasketRemoveItem,
  useMutationBasketClear,
} from '../../api/basketApi';
import toasts from '../../components/toasts';
import Button from '../../components/Button';
// eslint-disable-next-line import/no-cycle
// import { cartIsOpenAtom } from '../../App';

function Home() {
  const { succesToast, failToast } = toasts();
  const [page, setPage] = useState<number>(0);
  // const [cartIsOpen] = useAtom(cartIsOpenAtom);
  const { isLoading, error, products } = useGetProducts(page);
  const { mutate: postItemToBasket, error: postBasketError, data: postedData } = useMutationBasketPost();
  const { mutate: patch, error: patchBasketError, data: patchedData } = useMutationBasketPatch();
  const { mutate: removeItem, error: removeItemError, data: removedData } = useMutationBasketRemoveItem();
  const { mutate: clearBasket, error: clearBasketError, data: clearedData } = useMutationBasketClear();
  const { cart, cartRefetch } = useGetBasket();
  const cartItems = cart?.items ?? [];

  useEffect(() => {
    if (postBasketError) {
      failToast(postBasketError);
    }
    if (patchBasketError) {
      failToast(patchBasketError);
    }
    if (removeItemError) {
      failToast(removeItemError);
    }
    if (clearBasketError) {
      failToast(clearBasketError);
    }
    if (postedData || patchedData || removedData || clearedData) {
      succesToast('Success!');
      cartRefetch();
    }
  }, [
    postBasketError,
    patchBasketError,
    removeItemError,
    clearBasketError,
    postedData,
    patchedData,
    removedData,
    clearedData,
  ]);

  const handleBuy = (productId: string | number) => {
    postItemToBasket({
      data: {
        quantity: 1,
      },
      productId,
    });
  };

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

  const handleLoadMoreData = () => {
    setPage((prePage) => prePage + 1);
  };

  return (
    <>
      {isLoading && !error && <LoadingSpinner />}
      {!isLoading && error && <ErrorModal name={error.name} message={error.message} />}
      {products && (
        <>
          {!cartIsOpen && (
            <>
              <div className="flex flex-wrap justify-center sm:justify-evenly">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} onBuy={handleBuy} />
                ))}
              </div>
              <div className="flex justify-center my-6">
                <Button variant="primary" className="py-2 px-4" onClick={handleLoadMoreData}>
                  Load more...
                </Button>
              </div>
            </>
          )}
          {cartIsOpen && <ShoppingCart cartItems={cartItems} onUpdate={handleUpdate} onClear={handleClear} />}
        </>
      )}
    </>
  );
}

export default Home;
