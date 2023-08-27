
import Catalog from './components/Catalog/Catalog';
import CocoFineJewelry from './components/CocoFineJewelry/CocoFineJewelry';

import Header from './components/Header/Header';
import ProductCatalog from './components/ProductCatalog/ProductCatalog';


function App() {
  return (
    <div className='app'>
      <div className="bgRing">
      <Header />
      <Catalog />
      <CocoFineJewelry />
      </div>
      <ProductCatalog />
    </div>
  );
}

export default App;
