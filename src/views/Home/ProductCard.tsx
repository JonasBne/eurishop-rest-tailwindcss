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
    <div className="my-8 mx-2 rounded overflow-hidden shadow-2xl max-w-xs flex flex-col justify-between grow sm:max-w-sm">
      <div>
        <img className="w-full object-cover" src={product.image} alt={product.title} />
        <div className="px-6 py-4">
          <h5 className="font-bold text-xl mb-2 text-blue-700">{product.title}</h5>
          <p className="text-gray-700 text-base">{product.desc}</p>
          <p className="text-gray-700 text-sm mt-8 font-semibold">Price: €{product.price}</p>
        </div>
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
          <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" disabled>
            Out of stock
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
