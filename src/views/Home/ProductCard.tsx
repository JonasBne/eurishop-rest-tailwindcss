/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SpaceProps } from 'styled-system';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import FaIcon from '../../assets/FaIcon';
import Product from '../../domain/product';

interface ProductCardProps extends SpaceProps {
  product: Product;
  onBuy: (productId: string | number) => void;
}

function ProductCard({ product, onBuy }: ProductCardProps) {
  const handleBuy = (event: React.MouseEvent) => {
    event.preventDefault();
    onBuy(product.id!);
  };

  return (
    <div className="p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full object-cover" src={product.image} alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">{product.desc}</p>
          <p className="text-gray-700 font-semibold mt-4 text-sm">Unit price: €{product.price}</p>
        </div>
        <div className="flex justify-center my-4">
          {product.stocked ? (
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleBuy}
            >
              +
              <FaIcon icon={faShoppingCart} mx=".25rem" />
            </button>
          ) : (
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled
            >
              Out of stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
