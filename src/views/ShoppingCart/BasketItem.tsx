/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Box from '../../components/Box';
import { CartItem, calculateTotalCostPerCartItem } from '../../domain/shoppingCart';
import FlexBox from '../../components/FlexBox';

interface BasketItemProps {
  item: CartItem;
  onUpdate: (quantity: number, productId: string | number) => void;
}

function BasketItem({ item, onUpdate }: BasketItemProps) {
  const handleUpdate = (action: string) => {
    let { quantity } = item;
    const productId = item.product.id!;

    if (action === 'decrement') {
      quantity -= 1;
    }
    if (action === 'increment') {
      quantity += 1;
    }
    onUpdate(quantity, productId);
  };

  return (
    <div role="cart-item" className="flex justify-between my-2">
      <div className="flex items-center">
        <img src={item.product.image} alt={item.product.title} width="60" className="rounded-full" />
        <div className="flex flex-col ml-3">
          <span className="md:text-md font-semibold font-mono text-gray-900">{item.product.title}</span>
          <span className="text-xs font-light text-gray-600">#{item.product.sku}</span>
          <span className="text-xs font-light text-gray-800">Unit price: €{item.product.price}</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="pr-8 flex items-center mx-10 ">
          <FontAwesomeIcon icon={faMinus} className="w-2 h-2 block" onClick={() => handleUpdate('decrement')} />
          <div className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2">{item.quantity}</div>
          <FontAwesomeIcon icon={faPlus} className="w-2 h-2 block" onClick={() => handleUpdate('increment')} />
        </div>
        <div className="pr-8 ">
          <span className="text-xs font-medium">{`Total: € ${calculateTotalCostPerCartItem(item)}`}</span>
        </div>
      </div>
    </div>
  );

  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <div role="cart-item">
      <Header as="h4" role="heading">
        {item.product.title}
      </Header>
      <Box my="0.5rem" fontStyle="italic">{`Unit price: € ${item.product.price}`}</Box>
      <FlexBox alignItems="baseline" my="2rem">
        <Button type="button" variant="secondary" mr="1rem" onClick={() => handleUpdate('decrement')}>
          -
        </Button>
        <div>{item.quantity}</div>
        <Button type="button" variant="secondary" ml="1rem" onClick={() => handleUpdate('increment')}>
          +
        </Button>
      </FlexBox>
      <Box mt="0.5rem" mb="1rem" fontWeight="bold">
        {`Total: € ${calculateTotalCostPerCartItem(item)}`}
      </Box>
    </div>
  );
}

export default BasketItem;
