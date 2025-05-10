import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white dark:bg-background-dark text-gray-900 dark:text-white min-h-screen">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;