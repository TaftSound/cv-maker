import { Component } from "react";
import GenericSection from "./generic-section";

class ResumeObjective extends Component {
  constructor (props) {
    super (props)

    this.renderForm = this.renderForm.bind(this)
    this.renderSaved = this.renderSaved.bind(this)
    this.changeSaveState = this.changeSaveState.bind(this)

    this.state = {
      isSaved: false,
      objective: ''
    }
  }

  updateObjective = (event) => {
    this.setState({ objective: event.target.value })
  }

  renderForm () {
    const { objective } = this.state
    return (
      <div className="section-content">
        <h2>Resume Objective</h2>
        <form>
          <label htmlFor="objective">Resume Objective: </label>
          <input type="text-area" id="objective" value={objective} onChange={this.updateObjective}/>
        </form>
      </div>
    )
  }

  renderSaved () {
    const { objective } = this.state
    return (
      <div className="section-content">
        <h2>Resume Objective</h2>
        <p>{objective}</p>
      </div>
    )
  }


  render () {
  }
}

export default ResumeObjective