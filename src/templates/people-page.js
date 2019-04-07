import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import People from '../components/People'

export const PeoplePageTemplate = ({
  title,
  people
}) => (
  <div className="content">
    <section className="section">
      <div className="columns">
        <div className="column is-7 is-offset-1">
          <h2
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #0A112C, -0.5rem 0 0 #0A112C',
              backgroundColor: '#0A112C',
              color: 'white',
              padding: '1rem',
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="columns">
        <People people={people} />
      </div>
    </div>
  </div>
)

PeoplePageTemplate.propTypes = {
  title: PropTypes.string,
  people: PropTypes.array
}

const PeoplePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PeoplePageTemplate
        title={frontmatter.title}
        people={frontmatter.people}
      />
    </Layout>
  )
}

PeoplePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PeoplePage

export const peoplePageQuery = graphql`
  query PeoplePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        people {
          image {
            childImageSharp {
              fluid(maxWidth: 562, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          role
          email
          blurb
        }
      }
    }
  }
`
