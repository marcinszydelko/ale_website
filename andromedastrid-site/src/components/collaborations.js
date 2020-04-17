import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Collaborations = () => {

    const allImagesQuery = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "collaborations"}, 
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
    allFile: { edges: images }, //destructuring
  } = useStaticQuery(allImagesQuery)
  
  function displayCollaborations() {
      const collaborations = []
      for (let i = 0; i < images.length; i++) {
        collaborations.push(<Img
            key={i}
            fluid={images[i].node.childImageSharp.fluid}
            alt={images[i].node.base.split(".")[0]}
            // fadeIn="true"
        />)
      }
      return collaborations
  }
  
  return(
   <>   <h3>FEATURES AND COLLABORATIONS</h3>
        <div id="collaborations">
           {displayCollaborations()}
        </div>
   </>
  )
}

export default Collaborations