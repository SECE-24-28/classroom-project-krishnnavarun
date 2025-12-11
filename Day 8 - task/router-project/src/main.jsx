import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';
import NavbarLayout from './layout/NavbarLayout.jsx';
import Home from './components/Home.jsx';
import Orders from './components/Orders.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import LoginForm from './components/LoginForm.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Profile from './components/Profile.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AddProductForm from './components/AddProductForm.jsx';
import AdminForm from './components/AdminForm.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/login" element={<LoginForm />} />
      <Route path="/admin" element={<AdminForm />} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

      <Route element={<NavbarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="/products" element={<Products />} />
      </Route>
        <Route path = "/addProductsForm" element = {<PrivateRoute><AddProductForm/></PrivateRoute>}/>
        <Route path="/cart" element={<Cart />} />

    </Routes>
  </BrowserRouter>
);