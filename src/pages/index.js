import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
  </Layout>
)

export default IndexPage
