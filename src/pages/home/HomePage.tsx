import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";

const slides = [
  {
    bg: "assets/img/slider/home2-slide1.jpg",
    title: "Flower Diamond",
    highlight: "Collection",
    desc: "Budget Jewelry Starting At $295.99",
  },
  {
    bg: "assets/img/slider/home2-slide2.jpg",
    title: "New Diamond",
    highlight: "& Wedding Rings",
    desc: "Avail 15% off on Making Charges for all Jewelry",
  },
  {
    bg: "assets/img/slider/home1-slide1.jpg",
    title: "Grace Designer",
    highlight: "Jewelry",
    desc: "Rings, Occasion Pieces, Pandora & More.",
  },
];

export default function HomeSlider() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".bg-img").forEach((el) => {
      const bg = el.dataset.bg;
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
        el.style.backgroundSize = "cover";
        el.style.backgroundPosition = "center";
      }
    });
  }, []);

  return (
    <section className="w-full h-[600px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[600px] bg-img flex items-center justify-center"
              data-bg={slide.bg}
            >
              <div className="text-center text-white bg-black/50 p-6 rounded-lg max-w-[600px]">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}{" "}
                  <span className="text-pink-400">{slide.highlight}</span>
                </h2>
                <h4 className="text-lg mb-6">{slide.desc}</h4>
                <a
                  href="/shop"
                  className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition"
                >
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
