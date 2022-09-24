import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import Home from './components/home';
import Products from './components/products';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';
import { Routes, Route } from 'react-router-dom';

type BodyRef = {
  handleScroll: () => void,
}

type HomeRef = {
  handleScroll: () => Promise<void>,
}

const Body = forwardRef<BodyRef, any>((props, ref) => {

  const homeRef = useRef<HomeRef>(null);

  useImperativeHandle(ref, () => ({
    handleScroll 
  }));

  function handleScroll() {
    homeRef.current?.handleScroll();
  }

  return (
    <div className='relative top-0 left-0 w-full h-full'>
      <Routes>
        <Route path="/" element={<Home ref={homeRef} />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  )
});

export default Body;