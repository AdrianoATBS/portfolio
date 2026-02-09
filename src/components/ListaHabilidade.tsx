"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FaReact } from "react-icons/fa";
import { SiDotnet, SiTypescript, SiVite, SiNextdotjs } from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdArchitecture } from "react-icons/md";

export default function ListaHabilidade() {
  return (
    <section className=" mt-12">
      
      <h2 className="text-3xl font-[--font-titulos] text-texto mb-6">
        Minhas Habilidades 
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide><FaReact size={60} className="text-destaque" /></SwiperSlide>
        <SwiperSlide><SiDotnet size={60} className="text-destaque" /></SwiperSlide>
        <SwiperSlide><TbBrandCSharp size={60} className="text-destaque" /></SwiperSlide>
        <SwiperSlide><TbSql size={60} className="text-destaque" /></SwiperSlide>
        <SwiperSlide><IoLogoJavascript size={60} className="text-destaque" /></SwiperSlide>
        <SwiperSlide><SiTypescript size={60} className="text-destaque" /></SwiperSlide>
        <SwiperSlide><SiVite size={60} className="text-destaque" /></SwiperSlide>
        <SwiperSlide><SiNextdotjs size={60} className="text-destaque" /></SwiperSlide>
        <SwiperSlide><FaGithub size={60} className="text-destaque" /></SwiperSlide>
        <SwiperSlide><FaDocker size={60} className="text-destaque" /></SwiperSlide>
        <SwiperSlide><RiTailwindCssFill size={60} className="text-destaque" /></SwiperSlide>
        <SwiperSlide><MdArchitecture size={60} className="text-destaque" /></SwiperSlide>   
      </Swiper>
    
    </section>
  );
}
