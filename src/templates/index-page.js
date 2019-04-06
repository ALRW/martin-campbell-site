import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({image,
  title,
  subheading,
  callToAction,
  content,
  contentComponent}) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
          backgroundPosition: 'top left',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow:
              'rgb(10, 17, 44) 0.5rem 0px 0px, rgb(10, 17, 44) -0.5rem 0px 0px',
              backgroundColor: 'rgb(10, 17, 44)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}>
            {title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow:
              'rgb(10, 17, 44) 0.5rem 0px 0px, rgb(10, 17, 44) -0.5rem 0px 0px',
              backgroundColor: 'rgb(10, 17, 44)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading}
          </h3>
        </div>
      </div>
      <section className="padding-1">
        <div className="columns">
          <div className="column is-6 is-offset-1">
            <PageContent className="content" content={content} />
          </div>
          <div
            style={{
              boxShadow:
                '#0A112C 0.5rem 0px 0px, #0A112C -0.5rem 0px 0px',
              backgroundColor: '#0A112C',
              color: 'white',
              lineHeight: '1',
              padding: '2em',
              margin: '2em',
              display: 'flex',
              flexDirection: 'column'
            }}
            className="column has-text-centered"
          >
            <h3
              style={{margin: '1em'}}
              className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            >
              {callToAction}
            </h3>
            <Link style={{margin: '1em'}} to="/contact" className="button is-warning">How can we help you?</Link>
            <Link style={{margin: '1em'}} to="/property" className="button is-warning">Find a Property</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  callToAction: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        callToAction={frontmatter.callToAction}
        content={html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        callToAction
      }
    }
  }
`
