import React from 'react';

import Catalog from './../Catalog/Catalog';
import CocoFineJewelry from './../CocoFineJewelry/CocoFineJewelry';
import ProductCatalog from './../ProductCatalog/ProductCatalog';
import Salons from './../Salons/Salons';
import UsefulArticles from './../UsefulArticles/UsefulArticles';
import SocialLinks from './../SocialLinks/SocialLinks';


export default function Home() {
  return (
    <>
      <div className="catalogFlex">
        <Catalog />
        <CocoFineJewelry />
      </div>
      <ProductCatalog />
      <Salons />
      <UsefulArticles />
      <SocialLinks />
    </>
  )
}
