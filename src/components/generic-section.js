/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "../styles/generic-section.css"


// Make a generic section component
      // All others can extend this component
      // It should include:
        // Container div with styling applied - done
        // Save/edit button -- function via props
        // Delete button enabled via boolean props
        // Reorder button enabled via boolean props

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

class GenericSection extends Component {
  constructor (props) {
    super (props)
  }

  render () {
    const { content, isSaved, changeSaveState } = this.props
    return (
      <div className="section">
        {content}
        <SaveButton isSaved={isSaved} changeSaveState={changeSaveState} />
      </div>
    )
  }
}

export default GenericSection