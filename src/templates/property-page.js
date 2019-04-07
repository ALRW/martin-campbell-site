import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const PropertyPageTemplate = ({
  title,
  address,
  image,
  description,
  helmet,
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light"
              style={{
                boxShadow:
                'rgb(10, 17, 44) 0.5rem 0px 0px, rgb(10, 17, 44) -0.5rem 0px 0px',
                backgroundColor: 'rgb(10, 17, 44)',
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
              }}
            >
              {title}
            </h1>
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <figure className="image">
                    <PreviewCompatibleImage imageInfo={image} />
                  </figure>
                </div>
                <section className="section">
                  <address className="has-text-centered">
                    {address}
                  </address>
                </section>
                <div className="content">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PropertyPageTemplate.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
  helmet: PropTypes.object,
}

const PropertyPage = ({ data }) => {
  const { markdownRemark: property } = data
  return (
    <Layout>
      <PropertyPageTemplate
        title={property.frontmatter.title}
        address={property.frontmatter.address}
        image={property.frontmatter.image}
        description={property.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Property">
            <title>{`${property.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${property.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

PropertyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PropertyPage

export const pageQuery = graphql`
  query PropertyPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        address
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
