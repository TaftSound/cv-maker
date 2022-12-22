import { Component } from "react";
import MultiSection from "./generic-multisection";

class Skills extends Component {
  constructor (props) {
    super (props)

    this.renderFormState = this.renderFormState.bind(this)
    this.renderSavedState = this.renderSavedState.bind(this)
  }

  stateObject = {
    isSaved: false,
    skill: '',
    yearsExperience: '',
  }

  renderFormState (newThis, changeFunction) {
    return (
      <div>
        <form>
          <div className="input-container">
            <label htmlFor="skill">Skill: </label>
            <input type="text" id="skill" value={newThis.state.skill} onChange={changeFunction}/>
          </div>
          <div className="input-container">
            <label htmlFor="yearsExperience">Years Of Experience: </label>
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
      stateObject={this.stateObject}
      renderFormState={this.renderFormState}
      renderSavedState={this.renderSavedState} />
    )
  }
}

export default Skills