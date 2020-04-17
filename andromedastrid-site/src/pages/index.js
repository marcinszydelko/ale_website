import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import SlideShow from "../components/slideshow"
import Collaborations from "../components/collaborations"
import Boxes from "../components/boxes"


const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)


  return (
    <Layout>
      <SEO title="Home" />
      <h3 className="top-page-description">Hand painted watercolor design by Alejandra Hernandez Sanchez</h3>
      <SlideShow />
      <Boxes />
      <Collaborations/>
      <span className="line"></span>
    </Layout>
  )
}


export default IndexPage
