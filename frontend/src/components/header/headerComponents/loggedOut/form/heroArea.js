import React from "react";
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const heroBg = {
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

const HeroArea = (props) => (
  <StaticQuery
  query={graphql`
    query  {
      file(relativePath:{  eq:"heroBg.jpg" }) {
                childImageSharp {
                  fluid(maxHeight: 600) {
                    srcSet
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
  `}
    render={data => (
      <div className="lg:flex lg:relative flex-col h-full justify-center hidden lg:w-1/3 w-full fixed z-10">
         <Img style={heroBg} fluid={data.file.childImageSharp.fluid} />
      </div>
      )
    }
  />
)
export default HeroArea