import React from 'react'
import * as PropTypes from "prop-types"
import Link from 'gatsby-link'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class Article extends React.Component {
  render() {
    const article = this.props.data.contentfulArticle
    return (
      <div>
        <h1>{article.title}</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: article.content.content,
          }}
        />

        <div><Link to="/">Go back to the homepage</Link></div>
      </div>
    )
  }
}

export default Article

export const articleQuery = graphql`
  query articleQuery( $id : String! ) {
    contentfulArticle( id: { eq: $id } ) {
      id
      title
      content {
        content
      }
    }
  }
`