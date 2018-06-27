import React from 'react'
import Link from 'gatsby-link'
import Gallery from '../templates/gallery'

class SecondPage extends React.Component {
  render () {
    return (
      <div>

        <Gallery content={this.props.data.gallery} />

        <Link to="/">Back</Link>
        
      </div>
    )    
  }
}

export default SecondPage

export const galleryQuery = graphql`
  query galleryQuery {
    gallery: contentfulGallery (title: {eq: "My Gallery"}) {
      id
      title
      images {
        id
        title
        sizes {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`