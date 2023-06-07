import React, { useEffect, useId } from "react";
import Heading from "./Heading/Heading";
import img1 from "presentation/images/collections/1.png";
import img2 from "presentation/images/collections/5.png";
import img3 from "presentation/images/collections/4.png";
import img4 from "presentation/images/collections/3.png";
import CardCategory2, {
  CardCategory2Props,
} from "./CardCategories/CardCategory2";
import Glide from "@glidejs/glide";

export const CATS_DISCOVER: CardCategory2Props[] = [
  {
    name: "Explorar novedades",
    desc: "Compra lo último <br /> de las mejores marcas",
    featuredImage: img1,
    color: "bg-yellow-50",
  },
  {
    name: "Tarjetas de regalo digitales",
    desc: "Regala la opción <br /> de elección",
    featuredImage: img2,
    color: "bg-red-50",
  },
  {
    name: "Colección en oferta",
    desc: "Hasta <br /> 80% de descuento <br /> en retail",
    featuredImage: img3,
    color: "bg-blue-50",
  },
  {
    name: "Colección en oferta",
    desc: "Hasta <br /> 80% de descuento <br /> en retail",
    featuredImage: img4,
    color: "bg-green-50",
  },
];

const DiscoverMoreSlider = () => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    // @ts-ignore
    const OPTIONS: Glide.Options = {
      perView: 2.8,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          gap: 28,
          perView: 2.5,
        },
        1279: {
          gap: 20,
          perView: 2.15,
        },
        1023: {
          gap: 20,
          perView: 1.6,
        },
        768: {
          gap: 20,
          perView: 1.2,
        },
        500: {
          gap: 20,
          perView: 1,
        },
      },
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    return () => {
      slider.destroy();
    };
  }, [UNIQUE_CLASS]);

  return (
    <div className={`nc-DiscoverMoreSlider nc-p-l-container ${UNIQUE_CLASS} `}>
      <Heading
        className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 nc-p-r-container "
        desc=""
        rightDescText="Buenas cosas te esperan"
        hasNextPrev
      >    
      Descubrir más
      </Heading>
      <div className="" data-glide-el="track">
        <ul className="glide__slides">
          {CATS_DISCOVER.map((item, index) => (
            <li key={index} className={`glide__slide`}>
              <CardCategory2
                name={item.name}
                desc={item.desc}
                featuredImage={item.featuredImage}
                color={item.color}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiscoverMoreSlider;
