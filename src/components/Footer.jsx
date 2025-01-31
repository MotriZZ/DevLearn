// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Dev Learn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
