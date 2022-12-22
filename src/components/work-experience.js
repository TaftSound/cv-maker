import { Component } from "react";
import MultiSection from "./generic-multisection";

class WorkExperience extends Component {
  constructor (props) {
    super (props)

    this.renderFormState = this.renderFormState.bind(this)
    this.renderSavedState = this.renderSavedState.bind(this)
  }

  stateObject = {
    isSaved: false,
    title: '',
    employer: '',
    city: '',
    startDate: '',
    endDate: '',
    description: '',
  }

  renderFormState (newThis, changeFunction) {
    return (
      <div>
        <form>
          <div className="input-container">
            <label htmlFor="title">Job Title*</label>
            <input type="text" id="title" value={newThis.state.title} onChange={changeFunction}/>
          </div>
          <div className="input-container">
            <label htmlFor="city">City/Town </label>
            <input type="text" id="city" value={newThis.state.city} onChange={changeFunction}/>
          </div>
          <div className="input-container full">
            <label htmlFor="employer">Employer*</label>
            <input type="text" id="employer" value={newThis.state.employer} onChange={changeFunction}/>
          </div>
          <div className="input-container">
            <label htmlFor="startDate">Start Date*</label>
            <input type="text" id="startDate" value={newThis.state.startDate} onChange={changeFunction}/>
          </div>
          <div className="input-container">
            <label htmlFor="endDate">End Date*</label>
            <input type="text" id="endDate" value={newThis.state.endDate} onChange={changeFunction}/>
          </div>
          <div className="input-container full">
            <label htmlFor="description">Description</label>
            <textarea id="description" value={newThis.state.description} onChange={changeFunction}/>
          </div>
        </form>
      </div>
    )
  }

  renderSavedState (newThis) {
    return (
      <div>
        <h3>{newThis.state.title}</h3>
        <p>{newThis.state.startDate} - {newThis.state.endDate}</p>
      </div>
    )
  }

  render () {
    return (
      <MultiSection
      sectionTitle='Work Experience'
      stateObject={this.stateObject}
      renderFormState={this.renderFormState}
      renderSavedState={this.renderSavedState} />
    )
  }
}

export default WorkExperience