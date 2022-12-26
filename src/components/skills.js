import { Component } from "react";
import MultiSection from "./generic-multisection";
import { ReactComponent as MouseLogo } from '../svg/mouse.svg';

class Skills extends Component {
  constructor (props) {
    super (props)

    this.renderFormState = this.renderFormState.bind(this)
    this.renderSavedState = this.renderSavedState.bind(this)
    this.validate = this.validate.bind(this)
  }

  stateObject = {
    isSaved: false,
    skill: '',
    yearsExperience: '',
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
            <label htmlFor="skill">Skill*</label>
            <input type="text" id="skill" required={true} value={newThis.state.skill} onChange={changeFunction} 
              onBlur={(event) => { this.validate(event, 'Skill field is required') }} />
          </div>
          <div className="input-container">
            <label htmlFor="yearsExperience">Years Of Experience</label>
            <input type="text" id="yearsExperience" value={newThis.state.yearsExperience} onChange={changeFunction}/>
          </div>
        </form>
      </div>
    )
  }

  renderSavedState (newThis) {
    return (
      <div>
        <h3>{newThis.state.skill}</h3>
        <p>{newThis.state.yearsExperience}</p>
      </div>
    )
  }

  render () {
    return (
      <MultiSection
      sectionTitle='Skills'
      Icon={MouseLogo}
      stateObject={this.stateObject}
      renderFormState={this.renderFormState}
      renderSavedState={this.renderSavedState} />
    )
  }
}

export default Skills