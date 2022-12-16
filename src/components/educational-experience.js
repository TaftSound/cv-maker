import { Component } from "react";
import MultiSection from "./generic-multisection";

class EducationComponent extends Component {
  constructor (props) {
    super (props)

    this.renderFormState = this.renderFormState.bind(this)
    this.renderSavedState = this.renderSavedState.bind(this)
  }

  stateObject = {
    isSaved: false,
    degree: '',
    city: '',
    school: '',
    start: '',
    end: '',
  }

  renderFormState (newThis, changeFunction) {
    return (
      <div>
        <form>
          <label htmlFor="degree">Degree: </label>
          <input type="text" id="degree" value={newThis.state.degree} onChange={changeFunction}/>
          <label htmlFor="city">City: </label>
          <input type="text" id="city" value={newThis.state.city} onChange={changeFunction}/>
          <label htmlFor="school">School: </label>
          <input type="text" id="school" value={newThis.state.school} onChange={changeFunction}/>
          <label htmlFor="start">Start Date: </label>
          <input type="text" id="start" value={newThis.state.start} onChange={changeFunction}/>
          <label htmlFor="end">End Date: </label>
          <input type="text" id="end" value={newThis.state.end} onChange={changeFunction}/>
        </form>
      </div>
    )
  }

  renderSavedState (newThis) {
    return (
      <div>
        <h3>{newThis.state.degree}</h3>
        <p>{newThis.state.city}</p>
        <p>{newThis.state.school}</p>
        <p>{newThis.state.start}</p>
        <p>{newThis.state.end}</p>
      </div>
    )
  }

  render () {
    return (
      <MultiSection
      sectionTitle='Education: '
      stateObject={this.stateObject}
      renderFormState={this.renderFormState}
      renderSavedState={this.renderSavedState} />
    )
  }
}

export default EducationComponent