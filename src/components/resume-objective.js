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
      objective: '',
    }
  }

  updateObjective = (event) => {
    this.setState({ objective: event.target.value })
  }

  renderForm () {
    const { objective } = this.state
    return (
        <form>
          <textarea id="objective" aria-label="resume objective" value={objective} onChange={this.updateObjective}/>
        </form>
    )
  }

  renderSaved () {
    const { objective } = this.state
    return (
        <p>{objective}</p>
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
                        sectionTitle={'Resume Objective'}
                        isSaved={this.state.isSaved} 
                        changeSaveState={this.changeSaveState} />
      )
    } else {
      return (
        <GenericSection content={this.renderForm()}
                        sectionTitle={'Resume Objective'}
                        isSaved={this.state.isSaved} 
                        changeSaveState={this.changeSaveState} />
      )
    }
  }
}

export default ResumeObjective