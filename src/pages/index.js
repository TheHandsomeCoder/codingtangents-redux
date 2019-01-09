import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import ArticleFooter from '../components/ArticeFooter'
import { kebabCase } from 'lodash'

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
          const { categories } = node.frontmatter;
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
                    <Categories categories={categories}/>
                    <span className="author">{author}</span>
                  </div>
                  {/* TODO: Set Excerpt */}
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  {/* TODO: Fix Continue Reading */}
                  <Link to={node.fields.slug} className="more">Continue Reading</Link>
                </div>
                <ArticleFooter tags={node.frontmatter.tags}></ArticleFooter>
              </article>
            </div>
          )
        })}
      </Layout>
    )
  }
}

const Categories = (props) => {
  if (!props.categories) { return null; }
  const renderedCategories = props.categories.map(cat => (
    <Link to={`/category/${kebabCase(cat)}/`}>{cat}</Link>
  ));
  return (
    <span className="categories">
      {[... renderedCategories]}
    </span>
  )
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
            tags
            categories
          }
        }
      }
    }
  }
`
