
// import Catalog from './components/Catalog/Catalog';
// import CocoFineJewelry from './components/CocoFineJewelry/CocoFineJewelry';

// import Header from './components/Header/Header';
// import ProductCatalog from './components/ProductCatalog/ProductCatalog';
// import Salons from './components/Salons/Salons';
// import SocialLinks from './components/SocialLinks/SocialLinks';
// import UsefulArticles from './components/UsefulArticles/UsefulArticles';
// import Mailing from './components/Mailing/Mailing';
// import Footer from './components/footer/Footer';
import AppRouter from './components/AppRouter/AppRouter';
import Home from './components/Home/Home';



function App() {
  return (
    <div className='app'>
      
      {/* <div className="bgRing">
        <Header />
        <AppRouter />
        <Catalog />
        <CocoFineJewelry />
      </div>
      <ProductCatalog />
      <Salons />
      <UsefulArticles />
      <SocialLinks />
      <Mailing />
      <Footer /> */}
      <AppRouter />
    </div>
  );
}

export default App;
