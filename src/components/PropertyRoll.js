import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class PropertyRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: properties } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {properties &&
              properties.map(({ node: property }) => (
                <div className="is-parent column is-6" key={property.id}>
                  <Link
                    className="title has-text-primary is-size-4"
                    to={property.fields.slug}
                  >
                    <article className="tile is-child box property-preview">
                      <PreviewCompatibleImage imageInfo={property.frontmatter.image} />
                      <section className="section">
                        <p>
                          {property.frontmatter.title}
                          <span className="subtitle is-size-5 is-block">
                            Added on: {property.frontmatter.date}
                          </span>
                        </p>
                      </section>
                    </article>
                  </Link>
                </div>
              ))}
      </div>
    )
  }
}

PropertyRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PropertyRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "property-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                image {
                  childImageSharp {
                    fluid(maxWidth: 596, quality: 92) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PropertyRoll data={data} count={count} />}
  />
)
