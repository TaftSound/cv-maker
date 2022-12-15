import { Component } from "react";
import GenericSection from "./generic-section";


class PastJob extends Component {
  constructor (props) {
    super (props)

    this.renderForm = this.renderForm.bind(this)
    this.renderSaved = this.renderSaved.bind(this)
    this.changeSaveState = this.changeSaveState.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
      isSaved: false,
      title: '',
      employer: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
    }
  }

  onChange (event) {
    const fieldName = event.target.id
    const value = event.target.value
    this.setState({ [fieldName]: value })
  }

  renderForm () {
    const { title, employer, city, startDate, endDate, description } = this.state
    return (
      <div className="job-component">
        <h2>Work Experience</h2>
        <form>
        {/* Job Title */}
        <label htmlFor="title">Job Title: </label>
        <input type="text" id="title" value={title} onChange={this.onChange}/>
        {/* Employer */}
        <label htmlFor="employer">Employer: </label>
        <input type="text" id="employer" value={employer} onChange={this.onChange}/>
        {/* City/town */}
        <label htmlFor="city">City: </label>
        <input type="text" id="city" value={city} onChange={this.onChange}/>
        {/* Start date */}
        <label htmlFor="startDate">Start Date: </label>
        <input type="text" id="startDate" value={startDate} onChange={this.onChange}/>
        {/* End date */}
        <label htmlFor="endDate">End Date: </label>
        <input type="text" id="endDate" value={endDate} onChange={this.onChange}/>
        {/* Description */}
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" value={description} onChange={this.onChange}/>
        {/* Save/edit button */}
        {/* Delete button */}
        {/* Reorder button */}
      {/* Add new job button */}
        </form>
      </div>
    )
  }


  render () {
    if (this.state.isSaved) {
      return (
        <GenericSection content={this.renderSaved()} 
                        isSaved={this.state.isSaved} 
                        changeSaveState={this.changeSaveState} />
      )
    } else {
      return (
        <GenericSection content={this.renderForm()} 
                        isSaved={this.state.isSaved} 
                        changeSaveState={this.changeSaveState} />
      )
    }
  }
}

class WorkExperience extends Component {
  constructor (props) {
    super (props)

    this.state = {}
  }

  render () {
    return (
      <div className="section-container">
        <PastJob />
      </div>
    )
  }
}

export default WorkExperience