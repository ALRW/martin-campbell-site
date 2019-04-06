import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
          <section className="section">
            <div className="columns has-text-centered">
              <div className="column">
                  <div style={{margin: '0 0 0 2rem'}} className="card">
                    <div className="card-image">
                      <figure className="image">
                        <iframe style={{width: '100%'}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJeee6GzgMdkgRLQwSqRxEpYk&key=AIzaSyDUj8P_HbTNHDOHQGMuC3KSJNPr0pF-pwk" frameborder="0" alt="google map of richmond office">
                        </iframe>
                    </figure>
                    </div>
                      <div className="card-content">
                        <div className="content">
                          <h3>Richmond Office</h3>
                          <address>
                              6 Duke Street<br />
                              Richmond<br />
                              Surrey<br />
                              TW9 1HP<br />
                          </address>
                          <p>Tel: 020 8940 2266</p>
                        </div>
                      </div>
                  </div>
            </div>
            <div className="column">
                <div style={{margin: '0 2rem 0 0'}} className="card">
                  <div className="card-image">
                    <figure className="image">
                      <iframe style={{width: '100%'}} src="https://www.google.com/maps/embed/v1/place?q=Parc%20House%2C%2025-37%20Cowleaze%20Road%2C%20Kingston%20upon%20Thames%2C%20Surrey%2C%20KT2%206DZ&key=AIzaSyDUj8P_HbTNHDOHQGMuC3KSJNPr0pF-pwk" frameborder="0"></iframe>
                    </figure>
                  </div>
                      <div className="card-content">
                        <div className="content">
                          <h3>Kingston Office</h3>
                          <address>
                              Parc House, 25-37 Cowleaze Road<br />
                              Kingston Upon Thames<br />
                              Surrey<br />
                              KT2 6 DZ<br />
                          </address>
                          <p>Tel: 020 8547 0850</p>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Your email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Tell us how we can help you
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link is-warning" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
