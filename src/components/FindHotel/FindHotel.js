import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export const FindHotel = () => {
  let images = useStaticQuery(graphql`
    fragment hotelImages on File {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      deluna: file(relativePath: { eq: "deluna.jpg" }) {
        ...fluidImage
      }
      inatretes: file(relativePath: { eq: "inatretes.jpg" }) {
        ...fluidImage
      }
      delight: file(relativePath: { eq: "delight.jpg" }) {
        ...fluidImage
      }
      mercusuar: file(relativePath: { eq: "mercusuar.jpg" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <section id="find-hotel" className="container py-48">
      <div className="font-bold text-h3 mb-12 tracking-wide text-center">
        Find your best hotel
      </div>
      <div className="text-grey tracking-wider leading-8 max-w-2xl text-center m-auto">
        Ullamcorper cras imperdiet eu feugiat viverra pulvinar. Gravida integer
        tincidunt pretium dis fames porttitor velit. Volutpat tincidunt
        <button
          className="m-auto mt-8 block bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          View All
        </button>
      </div>
      <div className="mt-32 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="border-solid border-2 border-gray-100 rounded-lg hover:bg-softgreen hover:text-white">
          <div className="">
            <Img
              fluid={images.deluna.childImageSharp.fluid}
              imgStyle={{
                objectFit: "cover",
                objectPosition: "center center",
                width: "100%",
              }}
              style={{
                maxHeight: "240px",
              }}
            />
          </div>
          <div className="p-8">
            <div className="font-extrabold text-h6">Hotel De’Luna</div>
            <div className="text-grey">Singapore</div>
          </div>
        </div>
        <div className="border-solid border-2 border-gray-100 rounded-lg hover:bg-softgreen hover:text-white">
          <div className="">
            <Img
              fluid={images.inatretes.childImageSharp.fluid}
              imgStyle={{
                objectFit: "cover",
                objectPosition: "center center",
                width: "100%",
              }}
              style={{
                maxHeight: "240px",
              }}
            />
          </div>
          <div className="p-8">
            <div className="font-extrabold text-h6">Ina Tretes Hotel</div>
            <div className="text-grey">Singapore</div>
          </div>
        </div>
        <div className="border-solid border-2 border-gray-100 rounded-lg hover:bg-softgreen hover:text-white">
          <div className="">
            <Img
              fluid={images.delight.childImageSharp.fluid}
              imgStyle={{
                objectFit: "cover",
                objectPosition: "center center",
                width: "100%",
              }}
              style={{
                maxHeight: "240px",
              }}
            />
          </div>
          <div className="p-8">
            <div className="font-extrabold text-h6">De’light Hotel</div>
            <div className="text-grey">Singapore</div>
          </div>
        </div>
        <div className="border-solid border-2 border-gray-100 rounded-lg hover:bg-softgreen hover:text-white">
          <div className="">
            <Img
              fluid={images.mercusuar.childImageSharp.fluid}
              imgStyle={{
                objectFit: "cover",
                objectPosition: "center center",
                width: "100%",
              }}
              style={{
                minHeight: "240px",
                maxHeight: "240px",
              }}
            />
          </div>
          <div className="p-8">
            <div className="font-extrabold text-h6">Mercusuar Tower</div>
            <div className="text-grey">Singapore</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindHotel;
