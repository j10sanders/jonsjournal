import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'

const PostSelector = styled.div`
  border: 1px solid #E6E6E6;
  transition: box-shadow .5s;
  &:hover {
    box-shadow: 0px 2px 20px #B6B6B6, 0px 4px 6px #B6B6B6;
  }
  padding: 2em 4em;
  border-radius: 3px;
`


const StyledLink = styled(Link)`
  color: inherit !important;
  padding: 2em 4em;
`;

export default class IndexPage extends React.Component {


  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        
            <div className="content">
              <p className="has-text-weight-bold is-size-2">Latest Journalings</p>
              
            </div>
            
            {posts
              .map(({ node: post }) => (
                <StyledLink to={post.fields.slug}>
                  <PostSelector
                    className="content"
                    key={post.id}
                  >
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                      {post.excerpt}
                    </p>
                    
                  </PostSelector>
                </StyledLink>
              ))}

      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
