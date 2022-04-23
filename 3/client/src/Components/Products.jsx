import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../assets/images/01.png";
import pimage2 from "../assets/images/02.png";

const Products = () => {
  return (
    <div id="products">
      <h1>PILIH & NIKMATI</h1>
      <p>MAKANAN PADANG TERBAIK DI KOTA PADANG, KECAMATAN PADANG UTARA</p>
      <div className="a-container">
        <div data-aos="fade-up" data-aos-duration="100">
          <Productbox image={pimage1} title="Ayam Rica - Rica" />
        </div>
        <div data-aos="fade-up" data-aos-duration="200">
          <Productbox image={pimage2} title="Rendang" />
        </div>
        <div data-aos="fade-up" data-aos-duration="300">
          <Productbox image={pimage1} title="Ayam Rica - Rica" />
        </div>
      </div>
    </div>
  );
};

export default Products;
