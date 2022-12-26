/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "../styles/generic-section.css"
import "../styles/input-styling.css"


// Make a generic section component
      // All others can extend this component
      // It should include:
        // Container div with styling applied - done
        // Save/edit button -- function via props
        // Delete button enabled via props
        // Reorder button enabled via props

class SaveButton extends Component {
  constructor (props) {
    super (props)

    this.state = {}
  }

  render () {
    const { isSaved, changeSaveState } = this.props
    if (!changeSaveState) { return }
    if (isSaved) {
      return <button className="edit-button" onClick={changeSaveState}>Edit</button>
    } else {
      return <button className="save-button" onClick={changeSaveState}>Save</button>
    }
  }
}

class DeleteButton extends Component {
  constructor (props) {
    super (props)

    this.state = {}
  }

  render () {
    if (!this.props.deleteFunction) {
      return
    } else {
      return (
        <button className="delete-button" onClick={this.props.deleteFunction}>X</button>
      )
    }
  }
}

class PositionButtons extends Component {
  constructor (props) {
    super (props)

    this.state = {}
  }

  render () {
    const { positionFunction } = this.props
    if (!positionFunction) {
      return
    } else {
      return (
        <div className="position-buttons">
          <button onClick={() => { positionFunction(true) }}>{'<'}</button>
          <button onClick={() => { positionFunction(false) }}>{'>'}</button>
        </div>
      )
    }
  }
}

class GenericSection extends Component {
  constructor (props) {
    super (props)

    this.collapseExpand = this.collapseExpand.bind(this)
    this.updateLocaleStorage = this.updateLocaleStorage.bind(this)

    const { sectionTitle } = this.props
    const storageKey = sectionTitle + 'Expanded'
    const localData = localStorage.getItem(storageKey)
    if (localData) {
      const parsedData = JSON.parse(localData)
      const { isExpanded } = parsedData
      this.state = { isExpanded: isExpanded }
    } else {
      this.state = { isExpanded: true }
    }
  }

  updateLocaleStorage () {
    const { sectionTitle } = this.props
    const storageKey = sectionTitle + 'Expanded'
    localStorage.setItem(storageKey, JSON.stringify(this.state))
  }

  async collapseExpand () {
    if (this.state.isExpanded) {
      await this.setState({ isExpanded: false, })
    } else {
      await this.setState({ isExpanded: true, })
    }
    this.updateLocaleStorage()
  }

  render () {
    const { content, sectionTitle, isSaved, changeSaveState, removeSpacer } = this.props
    let header = <div className="section-edit-div"></div>
    if (sectionTitle) { header = <h2 onClick={this.collapseExpand}>{sectionTitle}</h2> }

    let sectionClassName = "section"
    if (isSaved) { sectionClassName = "section saved" }

    let spacer = <div className="spacer"></div>
    if (removeSpacer) { 
      spacer = ''
      sectionClassName = "section collapsed"
    }

    if (this.state.isExpanded) {
      return (
        <div className={sectionClassName}>
          <PositionButtons positionFunction={this.props.positionFunction}/>
          <DeleteButton deleteFunction={this.props.deleteFunction}/>
          {header}
          {spacer}
          {content}
          <SaveButton isSaved={isSaved} changeSaveState={changeSaveState} />
        </div>
      )
    } else {
      return (
        <div className="section collapsed">
          {header}
        </div>
      )
    }
  }
}

export default GenericSection