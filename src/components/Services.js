import React from 'react'
import PropTypes from 'prop-types'
import MarkdownContent from './MarkdownContent'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Services = ({ content }) => (
  <div className="columns is-multiline">
    {content.map((service, i) => (
      <div key={i} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '512',
              }}
            >
              <figure className="image">
                <PreviewCompatibleImage imageInfo={service} />
              </figure>
            </div>
          </div>
          <h3>{service.title}</h3>
          <MarkdownContent content={service.body} />
        </section>
      </div>
    ))}
  </div>
)

Services.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      body: PropTypes.string,
    })
  ),
}

export default Services
