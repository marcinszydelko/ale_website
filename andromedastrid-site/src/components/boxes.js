import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Boxes = () => {

    const allImagesQuery = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "boxes"}, 
            extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
        totalCount
        edges {
            node {
            base
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
            }
            }
        }
        }
    }
  `
  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery)
  
  return(
   <div id="row">   
        <Link to="/portfolio">
            <div className="col">
                <Img
                    key={0}
                    fluid={images[0].node.childImageSharp.fluid}
                    alt={images[0].node.base.split(".")[0]}
                    // fadeIn="true"
                />
                <div className="text-top">PORTFOLIO</div>
            </div>
        </Link>
        <Link to="/shop">
            <div className="col">  
                <Img
                    key={1}
                    fluid={images[1].node.childImageSharp.fluid}
                    alt={images[1].node.base.split(".")[0]}
                    // fadeIn="true"
                />
                <div className="text-top">SHOP</div>
            </div>
        </Link>
        <Link to="/collaborations">
            <div className="col">
                <Img
                    key={2}
                    fluid={images[2].node.childImageSharp.fluid}
                    alt={images[2].node.base.split(".")[0]}
                    // fadeIn="true"
                />
                <div className="text-top">COLLABORATION</div>
            </div>
        </Link>
   </div>
  )
}

export default Boxes