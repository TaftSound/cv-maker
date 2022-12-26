import { Component } from "react";
import MultiSection from "./generic-multisection";
import DateRangeSelect from "./date-range-select";
import { ReactComponent as SchoolLogo } from '../svg/school.svg';

class Education extends Component {
  constructor (props) {
    super (props)

    this.renderFormState = this.renderFormState.bind(this)
    this.renderSavedState = this.renderSavedState.bind(this)
    this.validate = this.validate.bind(this)
  }

  stateObject = {
    isSaved: false,
    degree: '',
    city: '',
    school: '',
    startDateMonth: 'January',
    startDateYear: '2022',
    endDateMonth: 'July',
    endDateYear: '2022',
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
            <label htmlFor="degree">Degree*</label>
            <input type="text" id="degree" required={true} value={newThis.state.degree} onChange={changeFunction}
            onBlur={(event) => { this.validate(event, 'Degree field is required') }} />
          </div>
          <div className="input-container">
            <label htmlFor="city">City/Town</label>
            <input type="text" id="city" value={newThis.state.city} onChange={changeFunction}/>
          </div>
          <div className="input-container full">
            <label htmlFor="school">School*</label>
            <input type="text" id="school" required={true} value={newThis.state.school} onChange={changeFunction}
            onBlur={(event) => { this.validate(event, 'School field is required') }} />
          </div>
          <DateRangeSelect
          startDateMonth={newThis.state.startDateMonth}
          startDateYear={newThis.state.startDateYear}
          endDateMonth={newThis.state.endDateMonth}
          endDateYear={newThis.state.endDateYear}
          onChange={changeFunction} />
        </form>
      </div>
    )
  }

  renderSavedState (newThis) {
    return (
      <div>
        <h3>{newThis.state.degree}</h3>
        <p>{newThis.state.school}</p>
      </div>
    )
  }

  render () {
    return (
      <MultiSection
      sectionTitle='Education'
      Icon={SchoolLogo}
      stateObject={this.stateObject}
      renderFormState={this.renderFormState}
      renderSavedState={this.renderSavedState} />
    )
  }
}

export default Education