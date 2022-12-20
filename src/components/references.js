import { Component } from "react";
import MultiSection from "./generic-multisection";
import GenericSection from "./generic-section";

class References extends Component {
  constructor (props) {
    super (props)

    this.renderFormState = this.renderFormState.bind(this)
    this.renderSavedState = this.renderSavedState.bind(this)
    this.toggleIncluded = this.toggleIncluded.bind(this)

    this.state = { includeReferences: true }
  }

  stateObject = {
    isSaved: false,
    name: '',
    company: '',
    phone: '',
    email: '',
  }

  toggleIncluded () {
    if (this.state.includeReferences) {
      this.setState({ includeReferences: false })
    } else {
      this.setState({ includeReferences: true })
    }
  }

  toggle

  renderFormState (newThis, changeFunction) {
    return (
      <div>
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={newThis.state.name} onChange={changeFunction}/>
          <label htmlFor="company">Company: </label>
          <input type="text" id="company" value={newThis.state.company} onChange={changeFunction}/>
          <label htmlFor="phone">Phone: </label>
          <input type="text" id="phone" value={newThis.state.phone} onChange={changeFunction}/>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" value={newThis.state.email} onChange={changeFunction}/>
        </form>
      </div>
    )
  }

  renderSavedState (newThis) {
    return (
      <div>
        <h3>{newThis.state.name}</h3>
        <p>{newThis.state.company}</p>
        <p>{newThis.state.phone}</p>
        <p>{newThis.state.email}</p>
      </div>
    )
  }

  render () {
    if (this.state.includeReferences) {
      return (
        <div className="references">
          <button className="toggle" onClick={this.toggleIncluded}>Remove</button>
          <MultiSection
          sectionTitle='References: '
          stateObject={this.stateObject}
          renderFormState={this.renderFormState}
          renderSavedState={this.renderSavedState} />
        </div>
      )
    }
    return (
      <div className="references">
      <button className="toggle" onClick={this.toggleIncluded}>Include</button>
        <GenericSection content={<h3>References available upon request</h3>} />
      </div>
    )
  }
}

export default References