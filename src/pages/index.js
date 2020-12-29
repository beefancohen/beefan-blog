import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `ethan cohen`,
        `software engineer`,
        `ethan`,
        `cohen`,
        `twitter`,
        `experimentation`,
        `react`,
        `chef`,
        `food`,
      ]}
    />
    <LandingBio />
  </Layout>
)

export default IndexPage
