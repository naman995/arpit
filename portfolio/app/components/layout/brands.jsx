import React from "react";
import Image from "next/image";
import Elements from "../../assets/Element.png";
import Basanti from "../../assets/basanti.png";
import Cloud9 from "../../assets/cloud9.png";
import Cord from "../../assets/cord.png";
import DeltaITNetwork from "../../assets/deltaitnetwork.png";
import IyengarYogaLogo from "../../assets/iyengaryoga.png";
import Kalista from "../../assets/kalista.png";
import KritikaDamax from "../../assets/kritika_damax.png";
import Logo from "../../assets/logo.png";
import Manan from "../../assets/Manan.png";
import Moh from "../../assets/Moh.png";
import Nama5 from "../../assets/Nama.png";
import Octavius from "../../assets/Octavius.png";
import OnCloud9Logo from "../../assets/OnCloud.png";
import OptimizeNutrition from "../../assets/OptimizeNutition.png";
import Pepr from "../../assets/pepr.png";
import Rubato from "../../assets/rubato.png";
import Sisa from "../../assets/sisa.png";
import Speako24 from "../../assets/speako24.png";
import Three from "../../assets/three.png";
import TransportIQ from "../../assets/transportIQ.png";

const Brands = () => {
  const images = [
    { src: Elements, alt: "5 Element" },
    { src: Basanti, alt: "Basanti" },
    { src: Cloud9, alt: "Cloud9" },
    { src: Cord, alt: "Cord" },
    { src: DeltaITNetwork, alt: "Delta IT Network" },
    { src: IyengarYogaLogo, alt: "Iyengar Yoga Logo" },
    { src: Kalista, alt: "Kalista" },
    { src: KritikaDamax, alt: "Kritika Damax" },
    { src: Manan, alt: "Manan" },
    { src: Moh, alt: "Moh" },
    { src: Nama5, alt: "NAMA 5" },
    { src: Octavius, alt: "Octavius" },
    { src: OnCloud9Logo, alt: "On Cloud9 Logo" },
    { src: OptimizeNutrition, alt: "Optimize Nutrition" },
    { src: Pepr, alt: "Pepr" },
    { src: Rubato, alt: "Rubato" },
    { src: Sisa, alt: "Sisa" },
    { src: Speako24, alt: "Speako24" },
    { src: Three, alt: "Three" },
    { src: TransportIQ, alt: "Transport IQ" },
  ];

  return (
    <div className="flex mt-10 flex-col items-center justify-center">
      <p className="mx-auto text-[32px] font-semibold">Brands Work For</p>
      <div className="w-auto grid grid-cols-5 gap-4 mt-10 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-26 w-26 "
          >
            <Image
              className="p-12"
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </div>
        ))}
      </div>
        <p className="mx-auto text-[32px] font-semibold">and many more</p>
    </div>
  );
};

export default Brands;
