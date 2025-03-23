import React, { useEffect, useState } from 'react';
import Footer from './footer';
import Header from './header';
import { useLocation, useNavigation } from 'react-router-dom';
import PageLoader from '../common/pageLoader';
import AutoLogout from '../common/autoLogout';
import { useUI } from '../../context/ui.context';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {isLogin} = useUI();
  const [loading, setLoading] = useState(true);

    const location = useLocation(); // Now it's inside Router
  
    useEffect(() => {
      console.log("Route changed:", location.pathname);
    }, [location.pathname]);
  
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
    isLogin ?  <AutoLogout timeout={180000} /> :""
  }
     

  {
    loading ? 
    <PageLoader/>
     :<>
     <Header />
    <main className='app-bg'>{children}</main>
    {
      ((location.pathname||"").split("/")||[])[1] !== "casino-lobby" ?     <Footer />
      :""
    }
    </>
  }
   
  </>
)};

export default Layout;
