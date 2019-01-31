import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ArticleFooter from '../components/ArticeFooter'
import { kebabCase } from 'lodash'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { categories, title, author } = post.frontmatter;
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={title} description={post.excerpt} />

        <div className="article-wrapper u-cf" key={post.fields.slug}>
          <Link className="bubble" to={post.fields.slug}>
            <i className="fa fa-fw fa-code"></i>
          </Link>
          <article className="default article">
            <div className="content">
              <h3><Link to={post.fields.slug}>{title}</Link></h3>
              {/* TODO: Componentize and fix metadata */}
              <div className="meta">
                <span className="date">{post.frontmatter.date}</span>
                <span className="readingTime">{post.fields.readingTime.text}</span>
                <Categories categories={categories}></Categories>
                <Author author={author}></Author>
              </div>
              {/* TODO: Set Excerpt */}
              <p dangerouslySetInnerHTML={{ __html: post.html }} />

            </div>
            <ArticleFooter tags={post.frontmatter.tags}></ArticleFooter>
          </article>
        </div>
        {/* <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul> */}
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
      {[...renderedCategories]}
    </span>
  )
}
const Author = (props) => {
  if (!props.author) { return null; }
  return (
    <span className="author">
      <Link to={`/author/${kebabCase(props.author)}/`}>{props.author}</Link>
    </span>)
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        categories
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`
