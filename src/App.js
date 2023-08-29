
import Catalog from './components/Catalog/Catalog';
import CocoFineJewelry from './components/CocoFineJewelry/CocoFineJewelry';

import Header from './components/Header/Header';
import ProductCatalog from './components/ProductCatalog/ProductCatalog';
import Salons from './components/Salons/Salons';
import SocialLinks from './components/SocialLinks/SocialLinks';
import UsefulArticles from './components/UsefulArticles/UsefulArticles';
import Mailing from './components/Mailing/Mailing';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className='app'>
      <div className="bgRing">
        <Header />
        <Catalog />
        <CocoFineJewelry />
      </div>
      <ProductCatalog />
      <Salons />
      <UsefulArticles />
      <SocialLinks />
      <Mailing />
      <Footer />
    </div>
  );
}

export default App;
