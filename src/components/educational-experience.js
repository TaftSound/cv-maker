import { Component } from "react";
import MultiSection from "./generic-multisection";

class Education extends Component {
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
          <div className="input-container">
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" value={newThis.state.degree} onChange={changeFunction}/>
          </div>
          <div className="input-container">
            <label htmlFor="city">City/Town</label>
            <input type="text" id="city" value={newThis.state.city} onChange={changeFunction}/>
          </div>
          <div className="input-container full">
            <label htmlFor="school">School</label>
            <input type="text" id="school" value={newThis.state.school} onChange={changeFunction}/>
          </div>
          <div className="input-container">
            <label htmlFor="start">Start Date</label>
            <input type="text" id="start" value={newThis.state.start} onChange={changeFunction}/>
          </div>
          <div className="input-container">
            <label htmlFor="end">End Date</label>
            <input type="text" id="end" value={newThis.state.end} onChange={changeFunction}/>
          </div>
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
        <p>{newThis.state.start} - {newThis.state.end}</p>
      </div>
    )
  }

  render () {
    return (
      <MultiSection
      sectionTitle='Education'
      stateObject={this.stateObject}
      renderFormState={this.renderFormState}
      renderSavedState={this.renderSavedState} />
    )
  }
}

export default Education