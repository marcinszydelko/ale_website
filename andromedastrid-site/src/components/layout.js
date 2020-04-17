/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/reset-styles.css"
import "../styles/main.scss"


const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fb: file(relativePath: { eq: "social-icons/fb_icon.jpg" }) {
        childImageSharp {
          fixed(width: 26) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      insta: file(relativePath: { eq: "social-icons/insta_icon.jpg" }) {
        childImageSharp {
          fixed(width: 26) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pinterest: file(relativePath: { eq: "social-icons/pinterest_icon.jpg" }) {
        childImageSharp {
          fixed(width: 26) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)


  return (
    <div id="page-container">
      <header>
        <Link to="/">
          <h1 id="">
            Andromedastrid
          </h1>
        </Link>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/free-resources">Free resources</Link>
        <Img fixed={data.logo.childImageSharp.fixed}/>
        <Link to="/contact">Contact</Link>
        <Link to="/licencing">Licencing</Link>
        <Link to="/about-me">About me</Link>      
      </nav>
      <main>{children}</main>
      <footer>
        <div id="footer-top">
          <div class="col">
            <p>Stay connected</p>
            <div id="social-icons">
              <a href="https://www.facebook.com/AndromedastridIllustration" target="_blank">
                <Img fixed={data.fb.childImageSharp.fixed}/>
              </a>
              <a href="https://www.instagram.com/andromedastridillustration/" target="_blank">
                <Img fixed={data.insta.childImageSharp.fixed}/>
              </a>
              <a href="https://www.pinterest.es/andromedastrid/" target="_blank">
                <Img fixed={data.pinterest.childImageSharp.fixed}/>
              </a>
            </div>
          </div>
          <div class="col">
            <p>Contact me</p>
            <a href="mailto:andromedastrid@hotmail.com">andromedastrid@hotmail.com</a>
          </div>
        </div>
        <div id="footer-bottom">
          <p>Please do not use images without permission</p> 
          <span>© 2019 - {new Date().getFullYear()} Andromedastrid Ilustration</span>
        </div>
      </footer>
    </div>
  )
}
export default Layout
