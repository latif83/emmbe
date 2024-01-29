"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import styles from "./banner.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <div className={`${styles.banner} text-black`}>
      <Swiper
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        grabCursor={true}
        loop={true}
        modules={[Autoplay, EffectFade, Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="bg-black relative text-white flex items-center justify-center h-full">
            <Image
              src="/wimg2.jpg"
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div
              className={`${styles.swipeContent} flex items-center sm:px-12 px-5`}
            >
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl py-4"
              >
                <h1 className="text-white font-bold md:text-5xl text-4xl">
                  Your Vision, Our Priority
                </h1>
                <p className="mt-4">
                  At{" "}
                  <span className="font-bold">
                    EMMBE Design and Construction Enterprise
                  </span>
                  , we bring your vision to life with over 8 years of proven
                  expertise. Our commitment extends beyond construction – we
                  focus on building lasting relationships and delivering
                  excellence that stands the test of time.
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    className="text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 shadow-lg shadow-yellow-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    OUR PORTFOLIO
                  </button>

                  <button
                    type="button"
                    className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    GET IN TOUCH
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black relative text-white flex items-center justify-center h-full">
            {/* <Image
              src="/img24.jpg"
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            /> */}
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline controls={false}>
  <source src="/wvid2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
            <div
              className={`${styles.swipeContent} flex items-center justify-center sm:px-12 px-5`}
            >
              <motion.div initial={{ opacity: 0 , y:-100 }}
            whileInView={{ opacity: 1,y:0 }}
            transition={{ duration: 1 }} className="w-full sm:text-center py-4">
                <h1 className="text-white font-bold md:text-5xl text-3xl">
                  Crafting Dreams, Building Legacies
                </h1>
                <p className="mt-6">
                  Start a construction journey with{" "}
                  <span className="font-bold">EMMBE</span>, where we turn dreams
                  into reality and build lasting legacies. With over 8 years of
                  experience, we are dedicated to top-notch quality, innovation,
                  and making our clients happy. Join us for more than just
                  construction – it's a partnership based on trust and shared
                  success.
                </p>
                <div className="mt-5 flex justify-center gap-2">
                  <button
                    type="button"
                    className="text-gray-900 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 shadow-lg shadow-yellow-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    OUR PORTFOLIO
                  </button>

                  <button
                    type="button"
                    className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    GET IN TOUCH
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
