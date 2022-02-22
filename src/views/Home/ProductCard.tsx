import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Product from '../../domain/product';
import Button from '../../components/Button';

interface ProductCardProps {
  product: Product;
  onBuy: (productId: string | number) => void;
}

function ProductCard({ product, onBuy }: ProductCardProps) {
  const handleBuy = (event: React.MouseEvent) => {
    event.preventDefault();
    onBuy(product.id!);
  };

  return (
    <div
      // eslint-disable-next-line jsx-a11y/aria-role
      role="card"
      className="mt-6 mb-4 mx-2 rounded overflow-hidden shadow-2xl max-w-xs flex flex-col justify-between grow sm:max-w-sm"
    >
      <div>
        <img className="w-full object-cover" src={product.image} alt={product.title} />
        <div className="px-6 py-4">
          <h5 className="font-bold text-xl mb-2 text-blue-700 font-mono">{product.title}</h5>
          <p className="text-gray-700 text-base">{product.desc}</p>
          <p className="text-gray-700 text-sm font-semibold mt-4">Price: €{product.price}</p>
        </div>
      </div>
      <div className="flex justify-center my-4">
        {product.stocked ? (
          <Button variant="primary" className="py-2 px-4" onClick={handleBuy}>
            <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        ) : (
          <Button variant="danger" className="py-2 px-4">
            Sold out
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
