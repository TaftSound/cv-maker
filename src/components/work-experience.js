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
          <label htmlFor="title">Job Title: </label>
          <input type="text" id="title" value={newThis.state.title} onChange={changeFunction}/>
          <label htmlFor="employer">Employer: </label>
          <input type="text" id="employer" value={newThis.state.employer} onChange={changeFunction}/>
          <label htmlFor="city">City: </label>
          <input type="text" id="city" value={newThis.state.city} onChange={changeFunction}/>
          <label htmlFor="startDate">Start Date: </label>
          <input type="text" id="startDate" value={newThis.state.startDate} onChange={changeFunction}/>
          <label htmlFor="endDate">End Date: </label>
          <input type="text" id="endDate" value={newThis.state.endDate} onChange={changeFunction}/>
          <label htmlFor="description">Description: </label>
          <input type="text" id="description" value={newThis.state.description} onChange={changeFunction}/>     
        </form>
      </div>
    )
  }

  renderSavedState (newThis) {
    return (
      <div>
        <h3>{newThis.state.title}</h3>
        <p>{newThis.state.employer}</p>
        <p>{newThis.state.city}</p>
        <p>{newThis.state.startDate} - {newThis.state.endDate}</p>
        <p>{newThis.state.description}</p>   
      </div>
    )
  }

  render () {
    return (
      <MultiSection
      sectionTitle='Work Experience: '
      stateObject={this.stateObject}
      renderFormState={this.renderFormState}
      renderSavedState={this.renderSavedState} />
    )
  }
}

export default WorkExperience