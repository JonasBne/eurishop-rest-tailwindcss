/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SpaceProps } from 'styled-system';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
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
          <p className="text-gray-700 text-base font-semibold">Unit price: €{product.price}</p>
        </div>
        {product.stocked ? (
          <Button type="button" variant="primary" my="1rem" mx="6rem" px="1rem" onClick={handleBuy}>
            ADD
            <FaIcon icon={faShoppingCart} mx=".25rem" />
          </Button>
        ) : (
          <Button type="button" variant="danger" my="1rem" mx="6rem" disabled>
            Out of stock
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
