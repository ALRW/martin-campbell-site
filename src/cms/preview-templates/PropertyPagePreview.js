import React from 'react'
import PropTypes from 'prop-types'
import { PropertyPageTemplate } from '../../templates/property-page'

const PropertyPagePreview = ({ entry }) => (
  <PropertyPageTemplate
    title={entry.getIn(['data', 'title'])}
    address={entry.getIn(['data', 'address'])}
    image={entry.getIn(['data', 'image'])}
    description={entry.getIn(['data', 'description'])}
  />
)

PropertyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PropertyPagePreview
