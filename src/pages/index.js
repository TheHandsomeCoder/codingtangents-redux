import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { title, author } = data.site.siteMetadata

    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={title}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="article-wrapper u-cf" key={node.fields.slug}>
              <Link className="bubble" to={node.fields.slug}>
                <i className="fa fa-fw fa-code"></i>
              </Link>
              <article className="default article">
                <div className="content">
                  <h3><Link to={node.fields.slug}>{title}</Link></h3>
                  {/* TODO: Componentize and fix metadata */}
                  <div className="meta">
                    <span className="date">{node.frontmatter.date}</span>
                    <span className="readingTime">{node.fields.readingTime.text}</span>
                    <span className="categories">
                      <a>Code</a>
                      <a>Other</a>
                    </span>
                    <span className="author">{author}</span>
                  </div>
                  {/* TODO: Set Excerpt */}
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  {/* TODO: Fix Continue Reading */}
                  <Link to={node.fields.slug} className="more">Continue Reading</Link>
                </div>
              </article>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
