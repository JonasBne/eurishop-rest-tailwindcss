import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { atom, useAtom } from 'jotai';
import api from './api/fetchHelper';
// eslint-disable-next-line import/no-cycle
import Navbar from './views/Navigation/Navbar';
// eslint-disable-next-line import/no-cycle
import Home from './views/Home/Home';
import ProductEdit from './views/ProductDetail/ProductEdit';
import ProductList from './views/ProductList/ProductList';
import ProductAdd from './views/ProductDetail/ProductAdd';
import { getBaseUrl } from './api/basketApi';

const queryClient = new QueryClient();

export const cartIsOpenAtom = atom(false);
export const cartItemsAtom = atom(0);

function App() {
  const [, setCartItemsAtom] = useAtom(cartItemsAtom);

  const fetchNumberOfCartItems = async () => {
    const data = await queryClient.fetchQuery(['basket'], () => api.get(getBaseUrl()));
    setCartItemsAtom(data.length);
  };

  fetchNumberOfCartItems();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Toaster position="top-right" />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products/admin" element={<ProductList />} />
        <Route path="products/:productId/edit" element={<ProductEdit />} />
        <Route path="products/new" element={<ProductAdd />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
