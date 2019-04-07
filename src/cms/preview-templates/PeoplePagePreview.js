import React from 'react'
import PropTypes from 'prop-types'
import { PeoplePageTemplate } from '../../templates/people-page'

const PeoplePagePreview = ({ entry }) => {
  const entryPeople = entry.getIn(['data', 'people'])
  const people = entryPeople ? entryPeople.toJS() : []

  return (
    <PeoplePageTemplate
      title={entry.getIn(['data', 'title'])}
      services={people}
    />
  )
}

PeoplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default PeoplePagePreview
