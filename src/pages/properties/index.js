import React from 'react'
import Layout from '../../components/Layout'
import PropertyRoll from '../../components/PropertyRoll'

export default class PropertyIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: 'url(\'/img/property-page.jpg\')',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #0A112C, -0.5rem 0 0 #0A112C',
              backgroundColor: '#0A112C',
              color: 'white',
              padding: '1rem',
            }}
          >
            Our Latest Properties
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <PropertyRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
