import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./articles.css";

import { FreeMode, Autoplay } from "swiper";
import useCheckMobileScreen from "../../utils/useMobileCheckScreen";
import Card from "../Card/card";
import RatherLabs from '../../images/ratherlabs.svg';
import Maiar from '../../images/maiar.svg';
import Elrond from '../../images/elronds.svg';

const collections = [
  {
    name: "Elrond",
    href: "#",
    imageSrc: `${Elrond}`,
    imageAlt: "Elrond Network is a highly scalable, fast and secure blockchain platform for distributed apps, enterprise use cases and the new internet economy.",
    description:
      "Elrond Network is a highly scalable, fast and secure blockchain platform for distributed apps, enterprise use cases and the new internet economy.",
  },
  {
    name: "Maiar",
    href: "#",
    imageSrc: `${Maiar}`,
    imageAlt:
      "Maiar is powered by the amazing technology of the Elrond blockchain, and is going to radically change the way we interact with money.",
    description:
      "Maiar is powered by the amazing technology of the Elrond blockchain, and is going to radically change the way we interact with money.",
  },
  {
    name: "Rather Labs",
    href: "#",
    imageSrc: `${RatherLabs}`,
    imageAlt:
      "Rather Labs are blockchain technical partners who provide the blockchain expertise along with the partner intensity founders need.",
    description:
      "Rather Labs are blockchain technical partners who provide the blockchain expertise along with the partner intensity founders need.",
  }
];

const ArticlesPage = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <section
      aria-labelledby="collection-articles"
      className="lg:container max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8 py-12"
    >
      <h2
        id="collection-heading"
        className="text-2xl tracking-tight text-gray-900 font-bold"
      >
        Understanding Hatom
      </h2>

      {isMobile ? (
        <div className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {collections.splice(0, 3).map((collection) => (
            <Card
              src={collection.imageSrc}
              name={collection.name}
              description={collection.description}
            />
          ))}
        </div>
      ) : (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed= {5000}
          autoplay={true}
          modules={[FreeMode, Autoplay]}
          className="mySwiper mt-10 space-y-12 "
          freeMode={true}
        >
          {collections.map((collection) => (
            <SwiperSlide
              key={collection.name}
              href={collection.href}
              className="group block"
            >
              <Card
                src={collection.imageSrc}
                name={collection.name}
                description={collection.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default ArticlesPage;
