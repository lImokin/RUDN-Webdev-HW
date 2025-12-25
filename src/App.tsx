import React from "react";
import TopSection from "./pages/Header/Header";
import ProductsSection from "./pages/Catalog/Catalog";
import GallerySection from "./pages/Gallery/Gallery";
import OrderFooter from "./pages/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <TopSection />
      <ProductsSection />
      <GallerySection />
      <OrderFooter />
    </>
  );
};

export default App;
