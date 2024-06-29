import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="footer"
      style={{
        position: isFixed ? 'fixed' : 'relative',
        bottom: isFixed ? 0 : 'auto',
        width: '100%',
        zIndex: 100,
        transition: 'position 0.3s ease-in-out',
      }}
    >
      <div className="container text-center">
        <p>
          &copy; All Rights Reserved - ESSI Security and Defence{" "}
          <a href="http://www.essi.co.in" rel="nofollow">
            essi.co.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
