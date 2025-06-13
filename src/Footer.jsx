import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-8">
      © {new Date().getFullYear()} MovieTime. All rights reserved.
    </footer>
  );
};

export default Footer;
