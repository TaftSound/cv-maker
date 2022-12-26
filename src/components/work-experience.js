import { Component } from "react";
import MultiSection from "./generic-multisection";
import DateRangeSelect from "./date-range-select";
import { ReactComponent as BriefcaseLogo } from '../svg/briefcase-variant.svg';

class WorkExperience extends Component {
  constructor (props) {
    super (props)

    this.renderFormState = this.renderFormState.bind(this)
    this.renderSavedState = this.renderSavedState.bind(this)
    this.validate = this.validate.bind(this)
  }

  stateObject = {
    isSaved: false,
    title: '',
    employer: '',
    city: '',
    startDateMonth: 'January',
    startDateYear: '2022',
    endDateMonth: 'July',
    endDateYear: '2022',
    description: '',
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
          <div className="input-container">
            <label htmlFor="title">Job Title*</label>
            <input type="text" id="title" required={true} value={newThis.state.title} onChange={changeFunction}
            onBlur={(event) => { this.validate(event, 'Job title is required') }} />
          </div>
          <div className="input-container">
            <label htmlFor="city">City/Town </label>
            <input type="text" id="city" value={newThis.state.city} onChange={changeFunction}/>
          </div>
          <div className="input-container full">
            <label htmlFor="employer">Employer*</label>
            <input type="text" id="employer" required={true} value={newThis.state.employer} onChange={changeFunction}
            onBlur={(event) => { this.validate(event, 'Employer field is required') }} />
          </div>
          <DateRangeSelect
          startDateMonth={newThis.state.startDateMonth}
          startDateYear={newThis.state.startDateYear}
          endDateMonth={newThis.state.endDateMonth}
          endDateYear={newThis.state.endDateYear}
          onChange={changeFunction} />
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
        <p>{newThis.state.startDateMonth + " " + newThis.state.startDateYear} - {newThis.state.endDateMonth + " " + newThis.state.endDateYear}</p>
      </div>
    )
  }

  render () {
    return (
      <MultiSection
      sectionTitle='Work Experience'
      Icon={BriefcaseLogo}
      stateObject={this.stateObject}
      renderFormState={this.renderFormState}
      renderSavedState={this.renderSavedState} />
    )
  }
}

export default WorkExperience