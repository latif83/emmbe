"use client";
import { Header } from "@/components/Header/Header";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { Footer } from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import styles from './page.module.css'

export default function Portfolio() {

    const [slidesPerView,setSlidesPerView] = useState(3)

    useEffect(()=>{
        let windowWidth = window.innerWidth
        if(windowWidth < 500){
            setSlidesPerView(1.2)
        }
        if(windowWidth < 700){
            setSlidesPerView(2.2)
        }
    },[])
  return (
    <div className="">
      <Header />
      <div className={`${styles.ban} bg-gray-800`}>
      <div className={`text-center py-5 text-white relative z-10`}>
        <h1 className="text-3xl font-bold">Our Works</h1>
        <p className="font-semibold mt-2 text-gray-300">
          Crafted with skill and care to help our clients grow their business!
        </p>
      </div>

      <div className="flex-shrink-0 relative z-10">
        {/* Navigation options for sections */}
        <nav className="flex space-x-4 p-4 text-white">
          <a href="#photos" className="hover:text-gray-400">
            Photos
          </a>
          <a href="#videos" className="hover:text-gray-400">
            Videos
          </a>
          <a href="#designs" className="hover:text-gray-400">
            3D Designs
          </a>
          <a href="#site-plan" className="hover:text-gray-400">
            Site Plan
          </a>
        </nav>
      </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Content sections */}
        <section id="photos" className="mb-8">
          {/* Photos content goes here */}
          <h2 className="text-2xl font-bold">Photos</h2>
          <p className="text-gray-500 mb-4">Explore exceptional photos taken during our projects.</p>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Grid]}
          >
            <SwiperSlide>
          <Image
            src="/img1.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img6.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-top rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img8.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img11.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-top rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img12.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img20.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
          </SwiperSlide>
          <SwiperSlide>
          <Image
            src="/img22.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img23.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img24.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img52.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
          </Swiper>
        </section>

        <section id="videos" className="mb-8">
          {/* Videos content goes here */}
          <h2 className="text-2xl font-bold">Videos</h2>
          <p className="text-gray-500 mb-4">Watch videos showcasing our construction projects and processes.</p>
          {/* Add your video content */}
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Grid]}
          >
            <SwiperSlide>
            <video className="w-full max-w-lg h-[300px] object-cover rounded-lg" controls>
            <source src="/wvid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
            <video className="w-full max-w-lg h-[300px] object-cover rounded-lg" controls>
            <source src="/wvid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
            <SwiperSlide>
            <video className="w-full max-w-lg h-[300px] object-cover rounded-lg" controls>
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
            <video className="w-full max-w-lg h-[300px] object-cover rounded-lg" controls>
            <source src="/vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
          </Swiper>
        </section>

        <section id="designs" className="mb-8">
          {/* 3D Designs content goes here */}
          <h2 className="text-2xl font-bold">3D Designs</h2>
          <p className="text-gray-500 mb-4 mb-4">Explore stunning 3D designs that bring architectural visions to life.</p>
          {/* Add your 3D design content */}
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Grid]}
          >
            <SwiperSlide>
          <Image
            src="/img29.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img47.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img50.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img48.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img49.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img46.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img30.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img28.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img26.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img27.jpg"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
          </Swiper>
        </section>

        <section id="site-plan">
          {/* Site Plan content goes here */}
          <h2 className="text-2xl font-bold">Site Plan</h2>
          <p className="text-gray-500 mb-4">Discover the comprehensive site plan outlining the layout and structure of our projects.</p>
          {/* Add your site plan content */}
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Grid]}
          >
            <SwiperSlide>
          <Image
            src="/plan1.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/plan2.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/plan3.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/plan4.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/plan5.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/plan6.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/plan7.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover object-center rounded"
          />
        </SwiperSlide>
          </Swiper>
        </section>
      </div>
      <Footer />
    </div>
  );
}
