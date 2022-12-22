import { Component } from "react";
import MultiSection from "./generic-multisection";

class Interests extends Component {
  constructor (props) {
    super (props)

    this.renderFormState = this.renderFormState.bind(this)
    this.renderSavedState = this.renderSavedState.bind(this)
  }

  stateObject = {
    isSaved: false,
    interest: '',
  }

  renderFormState (newThis, changeFunction) {
    return (
      <div>
        <form>
          <div className="input-container full">
            <label htmlFor="interest">Interest*</label>
            <input type="text" id="interest" value={newThis.state.interest} onChange={changeFunction}/>
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