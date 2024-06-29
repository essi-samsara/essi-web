import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Home from './components/Home/home';
import About from './components/About/about';
import Products from './components/Products/products';
import AboutProduct from './components/Products/ProductDetails/AboutProduct';
import Services from './components/Services/services';
import AboutService from './components/Services/ServiceDetails/AboutService';
import Partners from './components/Partners/partners';
import Clients from './components/Clients/clients';
import AllGallery from './components/Gallery/allGallery';
import Contact from './components/Contact/contact';
import Navigation from './components/navigation';
import Footer from './components/footer';

import data from './data/data.json';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {

  return (
    <Router>
      <div>
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home data={data.home}/>} />
          <Route path="/about" element={<About data={data.home} />} />
          
          <Route path="/products" element={<Products data={data.Products} />} />
          <Route path="/product/:product_name" element={<AboutProduct data={data.Products} />} />

          <Route path="/services" element={<Services data={data.Services} />} />
          <Route path="/service/:id" element={<AboutService data={data.Services} />} />

          {/* <Route path="/partners" element={<Partners data={data.Partners} />} /> */}
          <Route path="/clients" element={<Clients data={data.Clients} />} />
          <Route path="/gallery" element={<AllGallery data={data.Gallery} />} />
        </Routes>
        <Contact data={data.Contact} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
