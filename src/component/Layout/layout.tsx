import React, { useEffect, useState } from 'react';
import Footer from './footer';
import Header from './header';
import { useNavigation } from 'react-router-dom';
import PageLoader from '../common/pageLoader';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
  
    if (document.readyState === "complete") {
      handleLoad(); // If the page is already loaded, remove loader immediately
    } else {
      window.addEventListener("load", handleLoad);
    }
  
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return(
  <>
  {
    loading ? <PageLoader/> :<>
     <Header />
    <main className='app-bg'>{children}</main>
    <Footer />
    </>
  }
   
  </>
)};

export default Layout;
