import React from 'react'
import Link from 'gatsby-link'
import Gallery from '../templates/gallery'

import slugify from 'slugify'
const slugifyOptions = {
  replacement: '-',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
}

const LinkList = (data) => {
  return (
    <ul>
      {data.items.map((item, i) => (
        <li key={i}>
          <Link key={i} to={`/${data.basepath}/${slugify(item.node.title, slugifyOptions)}`}>
            {item.node.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

class IndexPage extends React.Component {
  render () {
    return (
      <div>
        <h1>Home Page</h1>
            
        <h2>Here are my subpages:</h2>
        <LinkList basepath="pages" items={this.props.data.pages.edges} />
        
        <h2>Here are my posts:</h2>
        <LinkList basepath="articles" items={this.props.data.articles.edges} />

        <Link to="/page-2/">Gallery</Link>
        
      </div>
    )    
  }
}

export default IndexPage

export const indexQuery = graphql`
  query indexQuery {
    pages: allContentfulPage {
      edges {
        node {
          id
          title
        }
      }
    }
    articles: allContentfulArticle {
      edges {
        node {
          id
          title
        }
      }
    }
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