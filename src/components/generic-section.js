/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "../styles/generic-section.css"


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

    this.state = {
      isSaved: false
    }
  }

  render () {
    const { isSaved, changeSaveState } = this.props
    if (isSaved) {
      return <button onClick={changeSaveState}>Edit</button>
    } else {
      return <button onClick={changeSaveState}>Save</button>
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
        <button onClick={this.props.deleteFunction}>X</button>
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
          <button onClick={() => { positionFunction(true) }}>Up</button>
          <button onClick={() => { positionFunction(false) }}>Down</button>
        </div>
      )
    }
  }
}

class GenericSection extends Component {
  constructor (props) {
    super (props)
  }

  render () {
    const { content, isSaved, changeSaveState } = this.props
    return (
      <div className="section">
        <div className="button-div">
          <PositionButtons positionFunction={this.props.positionFunction}/>
          <DeleteButton deleteFunction={this.props.deleteFunction}/>
        </div>
        {content}
        <SaveButton isSaved={isSaved} changeSaveState={changeSaveState} />
      </div>
    )
  }
}

export default GenericSection