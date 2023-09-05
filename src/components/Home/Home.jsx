import React from 'react';
import Header from './../Header/Header';
import AppRouter from './../AppRouter/AppRouter';
import Catalog from './../Catalog/Catalog';
import CocoFineJewelry from './../CocoFineJewelry/CocoFineJewelry';
import ProductCatalog from './../ProductCatalog/ProductCatalog';
import Salons from './../Salons/Salons';
import UsefulArticles from './../UsefulArticles/UsefulArticles';
import Mailing from './../Mailing/Mailing';
import Footer from './../footer/Footer';
import SocialLinks from './../SocialLinks/SocialLinks';





export default function Home() {
  return (
    <>
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
    </>
  )
}
