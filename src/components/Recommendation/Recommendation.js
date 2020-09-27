import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Recommendation = () => {
  let data = useStaticQuery(graphql`
    query {
      recImage: file(relativePath: { eq: "recommendation-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section
      id="recommendation"
      className="bg-softergreen mt-24 relative pt-32"
    >
      <div className="container flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 mr-8">
          <div className="font-bold text-h3 mb-2">Sanghai Hotel</div>
          <div className="text-softgreen text-sm mb-8">Sanghai, China</div>
          <div className="text-grey tracking-wider leading-8">
            Ullamcorper cras imperdiet eu feugiat viverra pulvinar. Gravida
            integer tincidunt pretium dis fames porttitor velit. Volutpat
            tincidunt
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="w-1/2 flex justify-start items-center">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Book Now
              </button>
            </div>
            <div className="w-1/2 flex justify-start items-center">
              <div>
                <span className="font-bold text-h5">$40</span>
                <span className="text-sm items-bottom">/Night</span>
              </div>
            </div>
          </div>
        </div>

        <Img
          fluid={data.recImage.childImageSharp.fluid}
          className="rounded-xl border w-full right-0"
          alt="About us graphic"
          imgStyle={{
            objectFit: "cover",
            objectPosition: "bottom center",
            width: "100%",
          }}
          style={{
            marginRight: "-50%",
            maxHeight: "725px",
          }}
        />
      </div>
      <div className="container flex flex-wrap">
        <div className="md:w-1/2 w-full transform translate-y-1/2">
          <img
            src="/img/graphics/DECORATION-BIG.png"
            alt="fancy dots"
            className=""
          ></img>
        </div>
        <div className="md:w-1/2 w-full transform translate-y-20">
          <div className="bg-softgreen p-8 rounded quote">
            <div className="text-white tracking-wide leading-8 mb-6">
              Convallis posuere nec convallis nec porta eleifend. Nam ornare sit
              pellentesque sapien senectus viverra vitae.
            </div>
            <div className="font-extrabold text-white text-h6">Robert Rane</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
