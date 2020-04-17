import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import SlideShow from "../components/slideshow"
import Collaborations from "../components/collaborations"


const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      shop: file(relativePath: { eq: "shop.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      colaboration: file(relativePath: { eq: "colaboration.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
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
      <div id="row">
        <Link to="/portfolio">
          <div className="col">
            <Img fixed={data.portfolio.childImageSharp.fixed}/>
            <div className="text-top">PORTFOLIO</div>
          </div>
        </Link>
        <Link to="/shop">
          <div className="col">  
            <Img fixed={data.shop.childImageSharp.fixed}/>
            <div className="text-top">SHOP</div>
          </div>
        </Link>
        <Link to="/collaborations">
          <div className="col">
            <Img fixed={data.colaboration.childImageSharp.fixed}/>
            <div className="text-top">COLLABORATION</div>
          </div>
        </Link>
      </div>
      <Collaborations/>
      <span className="line"></span>
    </Layout>
  )
}


export default IndexPage
