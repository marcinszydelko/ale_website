import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//import PropTypes from 'prop-types'

const SlideShow = () => {
  const [index, setIndex] = React.useState(0);  

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) { 
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 4000); 
    return () => clearInterval(timer); 
  }, [index]); 

  const allImagesQuery = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "slideshow"}, 
            extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
        totalCount
        edges {
            node {
            base
            childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
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
            fixed={images[index].node.childImageSharp.fixed}
            alt={images[index].node.base.split(".")[0]}
            // fadeIn="true"
        />
    </div>
  )
}

export default SlideShow