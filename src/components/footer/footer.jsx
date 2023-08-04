import React, { useEffect, useState } from 'react';
import './footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setIsVisible(window.innerHeight + window.scrollY >= document.body.offsetHeight - scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible ? (
    <footer className="footer">
      &copy; 2023 - All rights reserved. Created by PixelsPerfect Team
    </footer>
  ) : null;
};

export default Footer;
