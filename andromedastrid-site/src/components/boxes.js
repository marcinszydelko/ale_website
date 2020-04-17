import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//import PropTypes from 'prop-types'

const Boxes = () => {

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

  return(
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
  )
}

export default Boxes