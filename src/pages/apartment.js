import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, grapql } from "gatsby"

export default function Apartment() {
  const data = useStaticQuery(graphql`
    query Image {
      images: allFile(filter: { relativeDirectory: { eq: "apartman" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 375, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <div>
      {data.images.nodes.map(image => (
        <Img key={image.id} fixed={image.childImageSharp.fixed} />
      ))}
    </div>
  )
}
