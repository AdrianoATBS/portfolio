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
      <div className="mx-auto max-w-4xl text-center">
        
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
      
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center gap-2">
          <FaReact size={60} aria-label="React - Biblioteca de interface" className="text-destaque" />
          <span className="text-sm text-texto-secundario">React</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center gap-2">
          <SiDotnet size={60} aria-label=".NET - Plataforma de desenvolvimento" className="text-destaque" />
          <span className="text-sm text-texto-secundario">.NET</span>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="flex flex-col items-center justify-center gap-2">
          <TbBrandCSharp size={60} aria-label="C# - Linguagem de programação" className="text-destaque" />
          <span className="text-sm text-texto-secundario">C#</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center gap-2">
          <TbSql size={60} aria-label="SQL - Linguagem de consulta" className="text-destaque" />
          <span className="text-sm text-texto-secundario">SQL</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center gap-2">
          <IoLogoJavascript size={60} aria-label="JavaScript - Linguagem de programação" className="text-destaque" />
          <span className="text-sm text-texto-secundario">JavaScript</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className="flex flex-col items-center justify-center gap-2">
          <SiTypescript size={60} aria-label="TypeScript - Superset do JavaScript" className="text-destaque" />
          <span className="text-sm text-texto-secundario">TypeScript</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className="flex flex-col items-center justify-center gap-2">
          <SiVite size={60} aria-label="Vite - Ferramenta de build" className="text-destaque" />
          <span className="text-sm text-texto-secundario">Vite</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className="flex flex-col items-center justify-center gap-2">
          <SiNextdotjs size={60} aria-label="Next.js - Framework React" className="text-destaque" />
          <span className="text-sm text-texto-secundario">Next.js</span>
           </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className="flex flex-col items-center justify-center gap-2">
          <FaGithub size={60} aria-label="GitHub - Plataforma de hospedagem de código" className="text-destaque" />
          <span className="text-sm text-texto-secundario">GitHub</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className="flex flex-col items-center justify-center gap-2">
          <FaDocker size={60} aria-label="Docker - Plataforma de containerização" className="text-destaque" />
          <span className="text-sm text-texto-secundario">Docker</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className="flex flex-col items-center justify-center gap-2">
          <RiTailwindCssFill size={60} aria-label="Tailwind CSS - Framework CSS" className="text-destaque" />
          <span className="text-sm text-texto-secundario">Tailwind CSS</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className="flex flex-col items-center justify-center gap-2">
          <MdArchitecture size={60} aria-label="Arquitetura - Design de sistemas" className="text-destaque" />
          <span className="text-sm text-texto-secundario">Arquitetura</span>
          </div>
        </SwiperSlide>   
      </Swiper>
      </div>
    </section>
  );
}
