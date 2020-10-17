import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Controller, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([Navigation, Controller, EffectFade]);

const Testimonials = () => {
  let data = useStaticQuery(graphql`
    query {
      testimonial1: file(relativePath: { eq: "testimonial1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      testimonial2: file(relativePath: { eq: "testimonial2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id="testimonials" className="bg-softgreen py-32 ">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-16">
        <div className="overflow-y-hidden vertical-slider relative">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            direction={"vertical"}
            slidesPerView={1}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide img-slider">
                <Img
                  fluid={data.testimonial1.childImageSharp.fluid}
                  alt="Testimonial1"
                  className="rounded-lg"
                  objectFit="cover"
                  style={{ height: "470px" }}
                  Imgstyle={{ height: "470px" }}
                />
              </div>
              <div className="swiper-slide">
                <Img
                  fluid={data.testimonial2.childImageSharp.fluid}
                  alt="Testimonial2"
                  className="rounded-lg"
                  objectFit="cover"
                  style={{ height: "470px" }}
                  Imgstyle={{ height: "470px" }}
                />
              </div>
            </div>
          </Swiper>
        </div>
        <div className="w-full">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            slidesPerView={1}
          >
            <SwiperSlide effect="fade">
              <div className="bg-opacitygreen text-white p-8">
                Aliquet tincidunt urna congue lectus sodales volutpat, in
                venenatis. In pellentesque est iaculis tortor proin eleifend
                ipsum nunc, sed. At malesuada fusce egestas placerat diam justo.
                At arcu, arcu tempor ultrices scelerisque tempus consequat.
                Feugiat id volutpat congue natoque sodales eleifend mattis
                posuere. Auctor viverra pulvinar massa vitae condimentum in
                tristique. Sed sit eu, eget pellentesque{" "}
              </div>
              <div className="mt-8 text-h5 text-white font-bold">
                Micheal Peck
              </div>
            </SwiperSlide>
            <SwiperSlide effect="fade">
              <div className="bg-opacitygreen text-white p-8 min-h-full">
                Aliquet tincidunt urna congue lectus sodales volutpat, in
                venenatis. In pellentesque est iaculis tortor proin eleifend
                ipsum nunc, sed. At malesuada fusce egestas placerat diam justo.
                At arcu, arcu tempor ultrices scelerisque tempus consequat.{" "}
              </div>
              <div className="mt-8 text-h5 text-white font-bold">
                Robert Rene
              </div>
            </SwiperSlide>
            <div class="nav-wrapper flex justify-end mt-12">
              <div className="swiper-button-prev bg-opacitygreen w-auto rounded-full p-3 mr-2">
                <img src="/img/graphics/arrow-left.png"></img>
              </div>
              <div className="swiper-button-next bg-white w-auto rounded-full p-3">
                <img src="/img/graphics/arrow-right.png"></img>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
