
import AppRouter from './components/AppRouter/AppRouter';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Mailing from './components/Mailing/Mailing';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';




function App() {

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='app'>
      <Header />
      <AppRouter />
      <Mailing />
      <Footer />
    </div>
  );
}

export default App;
