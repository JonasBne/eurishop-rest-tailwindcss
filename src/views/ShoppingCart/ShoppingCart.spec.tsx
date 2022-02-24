import React from 'react';
import userEvent from '@testing-library/user-event';
import ShoppingCart from './ShoppingCart';
import Product from '../../domain/product';
import { CartItem, calculateTotalCartCost } from '../../domain/shoppingCart';
import { render, screen, waitFor, within } from '../../tests/utils';
import { server } from '../../mockServer';
import { getBasket, patchBasket, removeItemFromBasket } from '../../tests/fixtures/basket';
import { getAllProducts, getSingleProduct } from '../../tests/fixtures/product';

// TODO: issue with tests?

describe('shopping cart', () => {
  // test('renders a total cost', () => {
  //   const cartItems = [
  //     {
  //       product: {
  //         id: 1,
  //         title: 'product1',
  //         price: 5.0,
  //       } as Product,
  //       quantity: 1,
  //     },
  //     {
  //       product: {
  //         id: 2,
  //         title: 'product2',
  //         price: 10.0,
  //       } as Product,
  //       quantity: 1,
  //     },
  //   ] as CartItem[];

  //   server.use(getBasket);

  //   render(<ShoppingCart />);

  //   const totalCost = parseInt(calculateTotalCartCost(cartItems), 10);
  //   expect(totalCost).toBe(15);
  // });

  // test('renders two cart items', async () => {
  //   server.use(getBasket);
  //   server.use(getSingleProduct);

  //   render(<ShoppingCart />);

  //   const items = await screen.findAllByRole('cart-item');

  //   expect(items.length).toBe(3);
  // });

  test('product is removed from basket', async () => {
    server.use(getBasket);
    server.use(getSingleProduct);
    server.use(removeItemFromBasket);
    server.use(patchBasket);

    render(<ShoppingCart />);

    const items = await screen.findAllByRole('cart-item');

    const buttonCartItem1 = await within(items[0]).findByTestId('plus-svg');

    userEvent.click(buttonCartItem1);

    // await waitFor(() => expect(items[0]).not.toBeInTheDocument());
  });

  // test('click fires onUpdate event with action increment quantity 2 and productId 1', async () => {
  //   render(<ShoppingCart />);

  //   const items = screen.getAllByRole('cart-item');
  //   const button = await waitFor(() => within(items[0]).findByRole('button', { name: '+' }));

  //   userEvent.click(button);

  //   expect(mockOnUpdate).toHaveBeenCalledTimes(1);
  //   expect(mockOnUpdate).toHaveBeenCalledWith(2, 1);
  // });
});
