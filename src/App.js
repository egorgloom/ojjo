
import Catalog from './components/Catalog/Catalog';
import CocoFineJewelry from './components/CocoFineJewelry/CocoFineJewelry';

import Header from './components/Header/Header';
import ProductCatalog from './components/ProductCatalog/ProductCatalog';
import Salons from './components/Salons/Salons';


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
    </div>
  );
}

export default App;
