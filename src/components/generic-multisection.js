import { Component } from "react";
import GenericSection from "./generic-section";
import uniqid from "uniqid"

class Item extends Component {
  constructor (props) {
    super (props)

    this.renderForm = this.renderForm.bind(this)
    this.renderSaved = this.renderSaved.bind(this)
    this.changeSaveState = this.changeSaveState.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = this.props.stateObject
  }

  onChange (event) {
    const fieldName = event.target.id
    const value = event.target.value
    this.setState({ [fieldName]: value })
  }

  renderForm () {
    return this.props.renderFormState(this, this.onChange)
  }

  renderSaved () {
    return this.props.renderSavedState(this)
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
        <li>
          <GenericSection content={this.renderSaved()}
                          isSaved={this.state.isSaved}
                          changeSaveState={this.changeSaveState}
                          deleteFunction={this.props.deleteFunction}
                          positionFunction={this.props.positionFunction} />
        </li>
      )
    } else {
      return (
        <li>
          <GenericSection content={this.renderForm()}
                          isSaved={this.state.isSaved}
                          changeSaveState={this.changeSaveState}
                          deleteFunction={this.props.deleteFunction}
                          positionFunction={this.props.positionFunction} />
        </li>
      )
    }
  }
}

class MultiSection extends Component {
  constructor (props) {
    super (props)
    
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.shiftItem = this.shiftItem.bind(this)
    this.collapseExpand = this.collapseExpand.bind(this)

    this.state = {
      items: [<Item 
              stateObject={this.props.stateObject}
              renderFormState={this.props.renderFormState}
              renderSavedState={this.props.renderSavedState}
              deleteFunction={() => { this.deleteItem('startKey123') }}
              positionFunction={(isMoveUp) => { this.shiftItem(isMoveUp, 'startKey123') }}
              key={'startKey123'} />],
      isExpanded: false,
    }
  }

  addItem () {
    const { items } = this.state
    const key = uniqid()
    items.push(
      <Item 
      stateObject={this.props.stateObject}
      renderFormState={this.props.renderFormState}
      renderSavedState={this.props.renderSavedState}
      deleteFunction={() => { this.deleteItem(key) }}
      positionFunction={(isMoveUp) => { this.shiftItem(isMoveUp, key) }}
      key={key} />
    )
    this.setState({
      items: items
    })
  }

  deleteItem (key) {
    const { items } = this.state
    const updatedItems = items.filter((item) => {
      if (item.key === key) { return false }
      return true
    })
    this.setState({ items: updatedItems })
  }

  shiftItem (isMoveUp, key) {
    const { items } = this.state
    if (items.length < 2) { return }
    let index
    for (let item in items) {
      if (items[item].key === key) {
        index = +item
        break
      }
    }
    let newIndex = index + 1
    if (isMoveUp) { newIndex = index - 1 }
    if (newIndex < 0 || newIndex === items.length) { return }
    const clickedItem = items[index]
    const shiftedItem = items[newIndex]
    items.splice(newIndex, 1, clickedItem)
    items.splice(index, 1, shiftedItem)
    this.setState({ items: items })
  }

  collapseExpand () {
    if (this.state.isExpanded) {
      this.setState({ isExpanded: false, })
    } else {
      this.setState({ isExpanded: true, })
    }
  }

  render () {
    const { items } = this.state
    if (this.state.isExpanded) {
      return (
        <div className="section">
          <h2 onClick={this.collapseExpand}>{this.props.sectionTitle}</h2>
          <ul>{items}</ul>
          <button className="new-job-button" onClick={this.addItem}>+</button>
        </div>
      )
    } else {
      return (
        <div className="section">
          <h2 onClick={this.collapseExpand}>{this.props.sectionTitle}</h2>
        </div>
      )
    }
  }
}

export default MultiSection