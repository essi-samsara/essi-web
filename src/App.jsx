import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team"; // Corrected import
import { Contact } from "./components/contact";
import { Gallery } from "./components/gallery";
import {AllGallery} from "./components/allGallery"

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />

      {/* Header component */}
      <Header data={landingPageData.Header} />
        {/* About component */}
      <About data={landingPageData.About} />
      {/* Product component */}
      <Services data={landingPageData.Products} />
      {/* service component */}
      <Features data={landingPageData.Services} />
      {/* partners components */}
      <Team data={landingPageData.Partners} />
      {/* clients components */}
      <Testimonials data={landingPageData.Clients} />
      {/* Gallery components */}
      <AllGallery data={landingPageData.Gallery} />
      {/* contact components */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
