import React from 'react'
import PropTypes from 'prop-types'
import { ServicesPageTemplate } from '../../templates/services-page'

const ServicesPagePreview = ({ entry }) => {
  const entryServices = entry.getIn(['data', 'services'])
  const services = entryServices ? entryServices.toJS() : []

  return (
    <ServicesPageTemplate
      title={entry.getIn(['data', 'title'])}
      image={entry.getIn(['data', 'image'])}
      heading={entry.getIn(['data', 'heading'])}
      services={services}
    />
  )
}

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default ServicesPagePreview
