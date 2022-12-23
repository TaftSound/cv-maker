import { Component } from "react";
import MultiSection from "./generic-multisection";

class Interests extends Component {
  constructor (props) {
    super (props)

    this.renderFormState = this.renderFormState.bind(this)
    this.renderSavedState = this.renderSavedState.bind(this)
    this.validate = this.validate.bind(this)
  }

  stateObject = {
    isSaved: false,
    interest: '',
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
            <label htmlFor="interest">Interest*</label>
            <input type="text" id="interest" required={true} value={newThis.state.interest} onChange={changeFunction}
            onBlur={(event) => { this.validate(event, 'Interest field is required') }} />
          </div>
        </form>
      </div>
    )
  }

  renderSavedState (newThis) {
    return (
      <div>
        <p>{newThis.state.interest}</p>
      </div>
    )
  }

  render () {
    return (
      <MultiSection
      sectionTitle='Interests'
      stateObject={this.stateObject}
      renderFormState={this.renderFormState}
      renderSavedState={this.renderSavedState} />
    )
  }
}

export default Interests