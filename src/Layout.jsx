import React from 'react';

import Footer from './Footer'; 
import Hero2 from './Hero2';

const Layout = ({ children }) => {
  return (
    <div>
      <Hero2 />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
