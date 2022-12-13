import * as React from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ProductLst from "../components/ProductLst";
export default function Home() {
  return (
    <>
      <Topbar />
      <ProductLst />
      <Footer />
    </>
  );
}
