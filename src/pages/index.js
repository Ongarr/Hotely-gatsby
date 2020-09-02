import React from "react";
import PropTypes from "prop-types";

import Layout from "@/components/Layout";
import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import About from "../components/About/About";
import Recommendation from "../components/Recommendation/Recommendation";

class HomePage extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Layout>
        <Hero />
        <Featured />
        <About />
        <Recommendation />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;
