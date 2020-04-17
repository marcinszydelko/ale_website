import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//import PropTypes from 'prop-types'

const SlideShow = () => {
  const [index, setIndex] = React.useState(0);  

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) { // total number of images minus 1
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 4000); //duration
    return () => clearInterval(timer); //cleanup
  }, [index]); //compare

  // filter by sub-directory name slideshow
  const allImagesQuery = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "slideshow"}, 
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
  

  return(
    <div className="slider">
        <Img
            fluid={images[index].node.childImageSharp.fluid}
            alt={images[index].node.base.split(".")[0]}
            fadeIn="true"
        />
    </div>
  )
}

export default SlideShow