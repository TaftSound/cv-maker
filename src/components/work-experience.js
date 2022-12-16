import { Component } from "react";
import GenericSection from "./generic-section";
import uniqid from "uniqid"

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
        <form>
        <label htmlFor="title">Job Title: </label>
        <input type="text" id="title" value={title} onChange={this.onChange}/>
        <label htmlFor="employer">Employer: </label>
        <input type="text" id="employer" value={employer} onChange={this.onChange}/>
        <label htmlFor="city">City: </label>
        <input type="text" id="city" value={city} onChange={this.onChange}/>
        <label htmlFor="startDate">Start Date: </label>
        <input type="text" id="startDate" value={startDate} onChange={this.onChange}/>
        <label htmlFor="endDate">End Date: </label>
        <input type="text" id="endDate" value={endDate} onChange={this.onChange}/>
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" value={description} onChange={this.onChange}/>
        {/* Delete button */}
        {/* Reorder button */}
      {/* Add new job button */}
        </form>
      </div>
    )
  }

  renderSaved () {
    const { title, employer, city, startDate, endDate, description } = this.state
    return (
      <div className="job-component">
        <h3>{title}</h3>
        <p>{employer}</p>
        <p>{city}</p>
        <p>{startDate} - {endDate}</p>
        <p>{description}</p>
      </div>
    )
  }

  changeSaveState () {
    if (this.state.isSaved) {
      this.setState({
        isSaved: false
      })  
    } else {
      this.setState({
        isSaved: true
      })
    }
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
    
    this.addJob = this.addJob.bind(this)
    this.deleteJob = this.deleteJob.bind(this)

    this.state = {
      jobs: [(
        <li key={uniqid()} >
          <PastJob />
        </li>
      )]
    }
  }

  addJob () {
    const { jobs } = this.state
    jobs.push(
      <li key={uniqid()} >
        <PastJob />
      </li>
    )
    this.setState({
      jobs: jobs
    })
  }

  deleteJob () {

  }

  render () {
    return (
      <div className="section">
        <h2>Work Experience</h2>
        <ul>{this.state.jobs}</ul>
        <button className="new-job-button" onClick={this.addJob}>+</button>
      </div>
    )
  }
}

export default WorkExperience