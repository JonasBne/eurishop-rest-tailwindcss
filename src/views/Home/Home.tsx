/* eslint-disable jsx-a11y/aria-role */
import React, { useState, useEffect } from 'react';
import { useGetProducts } from '../../api/productsApi';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import LoadingSpinner from '../../components/LoadingSpinner';
import ProductCard from './ProductCard';
import { useMutationBasketPost } from '../../api/basketApi';
import toasts from '../../components/toasts';
import Button from '../../components/Button';

function Home() {
  const { succesToast, failToast } = toasts();
  const [page, setPage] = useState<number>(0);
  const { isLoading, error, products } = useGetProducts(page);
  const { mutate: postItemToBasket, error: postBasketError, data: postedData } = useMutationBasketPost();

  useEffect(() => {
    if (postBasketError) {
      failToast(postBasketError);
    }
    if (postedData) {
      succesToast('Success!');
    }
  }, [postBasketError]);

  const handleBuy = (productId: string | number) => {
    postItemToBasket({
      data: {
        quantity: 1,
      },
      productId,
    });
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
    </>
  );
}

export default Home;
