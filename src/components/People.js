import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const People = ({ people }) => (
  <div className="columns is-multiline">
    {people.map((person, i) => (
      <div key={i} className="column is-4">
        <section className="section">
          <div className="card">
            <div className="card-image">
              <Img fluid={person.image.childImageSharp.fluid} alt={person.name} />
            </div>
            <div className="card-content">
              <h1 className="title">{person.name}</h1>
              <h2 className="subtitle">{person.role}</h2>
              <p>{person.blurb}</p>
            </div>
            <div className="card-footer">
              <p className="card-footer-item">{person.email}</p>
            </div>
          </div>
        </section>
      </div>
    ))}
  </div>
)

People.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      role: PropTypes.string,
      email: PropTypes.string,
      blurb: PropTypes.string,
    })
  ),
}

export default People
