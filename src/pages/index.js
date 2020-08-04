import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import Hero from '../components/Hero'

export const HomePageTemplate = ({}) => {
  return (
    <>
          <Hero />
    </>
  )
}

class HomePage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <HomePageTemplate />
      </Layout>
    )
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default HomePage
