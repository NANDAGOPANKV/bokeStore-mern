import React from "react";
// route
import { Route, Routes } from 'react-router-dom'
// components
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Create } from "./pages/Create";
// pages
import { Home } from './pages/Home'
import { Update } from './pages/Update'

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/create' element={<Create />} />
      </Routes>
      <Footer />
    </>
  );
};
