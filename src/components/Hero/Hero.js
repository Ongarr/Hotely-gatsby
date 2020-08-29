import React from "react";
import SearchForm from "../Forms/SearchForm";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    fragment fluidImage on File {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      heroImage: file(relativePath: { eq: "hero.jpg" }) {
        ...fluidImage
      }
      heroLines: file(relativePath: { eq: "hero-lines.png" }) {
        ...fluidImage
      }
      imageThree: file(relativePath: { eq: "three.jpg" }) {
        ...fluidImage
      }
    }
  `);

  console.log(data);

  return (
    <section id="hero" className="relative overflow-hidden">
      <Img
        fluid={data.heroImage.childImageSharp.fluid}
        imgStyle={{ objectFit: "fill" }}
        alt="Hotely Hero Image"
        className="hero-image z-0 absolute"
        style={{
          overflow: "hidden",
          minHeight: "1130px",
          position: "absolute",
          width: "100%",
        }}
      />

      <Img
        fluid={data.heroLines.childImageSharp.fluid}
        alt="Funky lines in hero image"
        className="hero-lines left-1/2 z-1 absolute"
        style={{
          position: "absolute",
          height: "953px",
        }}
      />
      <div class="container flex flex-wrap relative">
        <div className="w-full md:w-1/2 mt-64 mb-64  z-10">
          <SearchForm />
        </div>
        <div className="relative w-full md:w-1/2 h-full"></div>
        <div className="hero__quotes-icons absolute w-full h-full">
          <div className="hero__quotes-icons small-heart">
            <img src="/img/icons/ICON LOVE 1.png" alt="small heart"></img>
          </div>
          <div className="hero__quotes-icons medium-heart transform -translate-x-1/2">
            <img src="/img/icons/ICON LOVE 2.png" alt="medium heart"></img>
          </div>
          <div className="hero__quotes-icons quote-1">
            <img src="/img/icons/QUOTE 1.png" alt="quote1"></img>
          </div>
          <div className="hero__quotes-icons quote-2">
            <img src="/img/icons/QUOTE 2.png" alt="quote2"></img>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
