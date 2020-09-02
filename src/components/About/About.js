import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const About = () => {
  let data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "about1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 487) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutImage2: file(relativePath: { eq: "about2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 230) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <section
      id="about"
      className="container grid grid-cols-1 md:grid-cols-2 gap-28 sm-gap-4"
    >
      <div className="py-16 relative about-images">
        <img
          src="/img/graphics/DECORATION.png"
          alt="fancy dots"
          className="absolute top-0 right-0"
        ></img>
        <img
          src="/img/graphics/DECORATION2.png"
          alt="fancy dots"
          className="decoration-2 z-10 absolute bottom-0 right-0"
        ></img>
        <Img
          fluid={data.aboutImage.childImageSharp.fluid}
          alt="About us graphic"
          imgStyle={{ objectFit: "fill" }}
          style={{
            maxWidth: "487px",
          }}
        />
        <Img
          fluid={data.aboutImage2.childImageSharp.fluid}
          alt="About us secound graphic"
          imgStyle={{ objectFit: "fill" }}
          style={{
            maxWidth: "230px",
            position: "absolute",
            bottom: "0",
            zIndex: "11",
            right: "0",
            width: "100%",
          }}
        />
      </div>
      <div className=" pl-24 py-10">
        <div className="font-bold text-h3 mb-8">About Hotely</div>
        <div className="text-grey tracking-wider leading-8">
          Semper sed neque quis tortor. Diam augue et lectus eget amet. Urna,
          non fermentum in in. Nulla sed vestibulum volutpat vitae, suspendisse
          porttitor. Augue consequat, eu dictum felis. Ipsum gravida fermentum
          vel lectus cursus. Purus arcu, fermentum in
        </div>
        <div className="stats flex my-10">
          <div className="mr-8">
            <span className="mr-2 text-h5 font-bold text-softgreen">1.2k</span>
            Hotel
          </div>
          <div className="mr-8">
            <span className="mr-2 text-h5 font-bold text-softgreen">4.8k</span>
            Rooms
          </div>
          <div className="mr-8">
            <span className="mr-2 text-h5 font-bold text-softgreen">186</span>
            Country
          </div>
        </div>
        <div className="text-grey tracking-wider leading-8">
          suspendisse porttitor. Augue consequat, eu dictum felis. Ipsum gravida
          <span className="font-bold underline"> fermentum vel</span> lectus
          cursus. Purus arcu, fermentum in gravida fermentum vel lectus cursus.
          Purus arcu, fermentum in
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-10 mt-10 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Explore more
        </button>
      </div>
    </section>
  );
};

export default About;
