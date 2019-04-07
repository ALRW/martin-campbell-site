import CMS from 'netlify-cms'

import PropertyPagePreview from './preview-templates/PropertyPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import PeoplePagePreview from './preview-templates/PeoplePagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('people', PeoplePagePreview)
CMS.registerPreviewTemplate('property', PropertyPagePreview)
