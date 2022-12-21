import { Component } from "react";
import GenericSection from "./generic-section";

class ResumeObjective extends Component {
  constructor (props) {
    super (props)

    this.renderForm = this.renderForm.bind(this)
    this.renderSaved = this.renderSaved.bind(this)
    this.changeSaveState = this.changeSaveState.bind(this)
    this.updateLocaleStorage = this.updateLocaleStorage.bind(this)
    this.updateObjective = this.updateObjective.bind(this)

    const localData = localStorage.getItem('resumeObjective')
    if (localData) {
      const parsedData = JSON.parse(localData)
      const { isSaved, objective } = parsedData
      this.state = {
        isSaved: isSaved,
        objective: objective,
      }
    } else {
      this.state = {
        isSaved: false,
        objective: '',
      }
    }
  }

  updateLocaleStorage () {
    localStorage.setItem('resumeObjective', JSON.stringify(this.state))
  }

  async updateObjective (event) {
    await this.setState({ objective: event.target.value })
    this.updateLocaleStorage()
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

  async changeSaveState () {
    if (this.state.isSaved) {
      await this.setState({
        isSaved: false
      })  
    } else {
      await this.setState({
        isSaved: true
      })
    }
    this.updateLocaleStorage()
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