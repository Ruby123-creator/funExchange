import React from 'react';
import Footer from './footer';
import Header from './header';
import { useNavigation } from 'react-router-dom';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return(
  <>
    <Header />
    <main className='app-bg'>{children}</main>
    <Footer />
  </>
)};

export default Layout;
