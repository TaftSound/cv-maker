import { Component } from "react";
import MultiSection from "./generic-multisection";
import GenericSection from "./generic-section";
import { ReactComponent as ReferencesLogo } from '../svg/message-text.svg';

class References extends Component {
  constructor (props) {
    super (props)

    this.renderFormState = this.renderFormState.bind(this)
    this.renderSavedState = this.renderSavedState.bind(this)
    this.toggleIncluded = this.toggleIncluded.bind(this)
    this.validate = this.validate.bind(this)
    this.updateLocalStorage = this.updateLocalStorage.bind(this)

    const localStateData = JSON.parse(localStorage.getItem('includeReferences'))
    if (!localStateData) {
      this.state = {
        includeReferences: localStateData
      }
    } else {
      this.state = { includeReferences: true }
    }
  }

  stateObject = {
    isSaved: false,
    name: '',
    company: '',
    phone: '',
    email: '',
  }

  updateLocalStorage () {
    const { includeReferences } = this.state
    localStorage.setItem('includeReferences', includeReferences)
  }

  async toggleIncluded () {
    const { includeReferences } = this.state
    if (includeReferences) {
      await this.setState({ includeReferences: false })
    } else {
      await this.setState({ includeReferences: true })
    }
    this.updateLocalStorage()
  }

  validate (event, msg) {
    if (!event.target.validity.valid) {
      event.target.setCustomValidity(msg)
      event.target.reportValidity()
    }
  }

  renderFormState (newThis, changeFunction) {
    return (
      <div>
        <form>
          <div className="input-container full">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" required={true} value={newThis.state.name} onChange={changeFunction}
            onBlur={(event) => { this.validate(event, 'Name is required') }} />
          </div>
          <div className="input-container full">
            <label htmlFor="company">Company*</label>
            <input type="text" id="company" required={true} value={newThis.state.company} onChange={changeFunction}
            onBlur={(event) => { this.validate(event, 'Company field is required') }} />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" value={newThis.state.phone} onChange={changeFunction}/>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={newThis.state.email} onChange={changeFunction}/>
          </div>
        </form>
      </div>
    )
  }

  renderSavedState (newThis) {
    return (
      <div>
        <h3>{newThis.state.name}</h3>
        <p>{newThis.state.company}</p>
      </div>
    )
  }

  render () {
    if (this.state.includeReferences) {
      return (
        <div className="references">
          <button className="toggle" onClick={this.toggleIncluded}>Upon Request</button>
          <MultiSection
          sectionTitle='References'
          Icon={ReferencesLogo}
          stateObject={this.stateObject}
          renderFormState={this.renderFormState}
          renderSavedState={this.renderSavedState} />
        </div>
      )
    }
    return (
      <div className="references">
      <button className="toggle" onClick={this.toggleIncluded}>Include</button>
        <GenericSection content={<h2>References available upon request</h2>} removeSpacer={true} />
      </div>
    )
  }
}

export default References