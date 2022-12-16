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
        {/* Reorder button */}
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
        <li>
          <GenericSection content={this.renderSaved()}
                          isSaved={this.state.isSaved}
                          changeSaveState={this.changeSaveState}
                          deleteFunction={this.props.deleteFunction}
                          positionFunction={this.props.positionFunction} />
        </li>
      )
    } else {
      return (
        <li>
          <GenericSection content={this.renderForm()}
                          isSaved={this.state.isSaved}
                          changeSaveState={this.changeSaveState}
                          deleteFunction={this.props.deleteFunction}
                          positionFunction={this.props.positionFunction} />
        </li>
      )
    }
  }
}

class WorkExperience extends Component {
  constructor (props) {
    super (props)
    
    this.addJob = this.addJob.bind(this)
    this.deleteJob = this.deleteJob.bind(this)
    this.shiftJob = this.shiftJob.bind(this)

    this.state = {
      jobs: [<PastJob 
              deleteFunction={() => { this.deleteJob('startKey123') }}
              positionFunction={(isMoveUp) => { this.shiftJob(isMoveUp, 'startKey123') }}
              key={'startKey123'} />]
    }
  }

  addJob () {
    const { jobs } = this.state
    const key = uniqid()
    jobs.push(
      <PastJob 
      deleteFunction={() => { this.deleteJob(key) }}
      positionFunction={(isMoveUp) => { this.shiftJob(isMoveUp, key) }}
      key={key} />
    )
    this.setState({
      jobs: jobs
    })
  }

  deleteJob (key) {
    const { jobs } = this.state
    const updatedJobs = jobs.filter((job) => {
      if (job.key === key) { return false }
      return true
    })
    this.setState({ jobs: updatedJobs })
  }

  shiftJob (isMoveUp, key) {
    const { jobs } = this.state
    if (jobs.length < 2) { return }
    let index
    for (let job in jobs) {
      if (jobs[job].key === key) {
        index = +job
        break
      }
    }
    let newIndex = index + 1
    if (isMoveUp) { newIndex = index - 1 }
    if (newIndex < 0 || newIndex === jobs.length) { return }
    const clickedItem = jobs[index]
    const shiftedItem = jobs[newIndex]
    jobs.splice(newIndex, 1, clickedItem)
    jobs.splice(index, 1, shiftedItem)
    this.setState({ jobs: jobs })
  }

  render () {
    const { jobs } = this.state
    return (
      <div className="section">
        <h2>Work Experience</h2>
        <ul>{jobs}</ul>
        <button className="new-job-button" onClick={this.addJob}>+</button>
      </div>
    )
  }
}

export default WorkExperience