import React from 'react'
import { Link } from 'gatsby'
import linkedin from '../img/social/linkedin.svg'

class Footer  extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <Link
                    className="has-text-white-ter"
                    to="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                        Admin
                  </Link>
                </section>
              </div>
              <div className="column is-4">
                <div className="content">
                  <p>© Martin Campbell 2019</p>
                </div>
              </div>
              <div className="column is-4 social">
                <a title="LinkedIn" href="https://www.linkedin.com/company/martin-campbell-&-co?trk=prof-exp-company-name">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
