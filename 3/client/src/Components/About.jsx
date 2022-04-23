import React from "react";
import aboutimage from "../assets/images/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-text" data-aos="fade-up" data-aos-duration="300">
        <h1>TENTANG KAMI</h1>
        <p>
          RM Lamunan Ombak berlokasi di Jalan Jendral Sudirman, Kelurahan Ujung
          Batu, Kecamatan Ujung Batu, Kabupeten Rokan Hilir Riau, Rumah makan
          kami menjual masakan dengan spesifikasi masakan Padang, dengan cota
          rasa yang khas, selain harga yang terjangkau toko kami selalu
          meningkatkan kualitas pelayanan kepada konsumen, mari mencicipi dan
          berbelanja ke toko kami, untuk informasi pemesanan silahkan hubungi ke
          kontak yang tertera, salam.
          <button>Read More</button>
        </p>
      </div>
      <div
        className="about-image"
        data-aos="fade-right"
        data-aos-duration="300"
      >
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
};

export default About;
