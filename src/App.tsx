import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import Navbar from './views/Navigation/Navbar';
import Home from './views/Home/Home';
import ProductEdit from './views/ProductDetail/ProductEdit';
import ProductList from './views/ProductList/ProductList';
import ProductAdd from './views/ProductDetail/ProductAdd';
// eslint-disable-next-line import/no-cycle
import ShoppingCart from './views/ShoppingCart/ShoppingCart';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Toaster position="top-right" />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="products/admin" element={<ProductList />} />
        <Route path="products/:productId/edit" element={<ProductEdit />} />
        <Route path="products/new" element={<ProductAdd />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
