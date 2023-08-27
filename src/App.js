
import Catalog from './components/Catalog/Catalog';
import CocoFineJewelry from './components/CocoFineJewelry/CocoFineJewelry';

import Header from './components/Header/Header';


function App() {
  return (
    <div className='app'>
      <div className="bgRing">
      <Header />
      <Catalog />
      <CocoFineJewelry />
      </div>
    </div>
  );
}

export default App;
