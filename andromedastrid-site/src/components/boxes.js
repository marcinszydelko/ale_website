import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
//import PropTypes from 'prop-types'

const Boxes = (props) => {





    const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shop: file(relativePath: { eq: "shop.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      colaboration: file(relativePath: { eq: "colaboration.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(
    <div id="row">
        <Link to="/portfolio">
          <div className="col">
            <Img fluid={data.portfolio.childImageSharp.fluid}/>
            <div className="text-top">PORTFOLIO</div>
          </div>
        </Link>
        <Link to="/shop">
          <div className="col">  
            <Img fluid={data.shop.childImageSharp.fluid}/>
            <div className="text-top">SHOP</div>
          </div>
        </Link>
        <Link to="/collaborations">
          <div className="col">
            <Img fluid={data.colaboration.childImageSharp.fluid}/>
            <div className="text-top">COLLABORATION</div>
          </div>
        </Link>
      </div>
  )
}

export default Boxes
