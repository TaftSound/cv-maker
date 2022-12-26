import { Component } from "react";
import GenericSection from "./generic-section";
import uniqid from "uniqid";
import { ReactComponent as AddLogo } from '../svg/plus-circle-outline.svg';

class Item extends Component {
  constructor (props) {
    super (props)

    this.renderForm = this.renderForm.bind(this)
    this.renderSaved = this.renderSaved.bind(this)
    this.changeSaveState = this.changeSaveState.bind(this)
    this.onChange = this.onChange.bind(this)
    this.updateLocaleStorage = this.updateLocaleStorage.bind(this)

    this.state = this.props.stateObject
  }

  updateLocaleStorage () {
    this.props.updateLocaleStorage(this.state, this.props.storageKey)
  }

  async onChange (event) {
    const fieldName = event.target.id
    const value = event.target.value
    event.target.setCustomValidity('')
    await this.setState({ [fieldName]: value })
    this.updateLocaleStorage()
  }

  renderForm () {
    return this.props.renderFormState(this, this.onChange)
  }

  renderSaved () {
    return this.props.renderSavedState(this)
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
    this.updateLocaleStorage = this.updateLocaleStorage.bind(this)

    let interpretStoredItems = (parsedData) => {
      const { items } = parsedData
      const itemsArray = []

      for (const item in items) {
        const { key } = items[item]
        const stateObject = items[item].props.stateObject
        itemsArray.push(
          <Item 
            stateObject={stateObject}
            renderFormState={this.props.renderFormState}
            renderSavedState={this.props.renderSavedState}
            deleteFunction={() => { this.deleteItem(key) }}
            positionFunction={(isMoveUp) => { this.shiftItem(isMoveUp, key) }}
            updateLocaleStorage={this.updateLocaleStorage}
            storageKey={key}
            key={key} />
        )
      }
      return itemsArray
    }
    this.interpretStoredItems = interpretStoredItems.bind(this)

    if (localStorage.getItem(this.props.sectionTitle)) {
      const localStorageData = localStorage.getItem(this.props.sectionTitle)
      const parsedData = JSON.parse(localStorageData)
      const itemsArray = interpretStoredItems(parsedData)
      const { isExpanded } = parsedData

      this.state = {
        isExpanded: isExpanded,
        items: itemsArray,
      }
    } else {
      const startKey = uniqid()

      this.state = {
      items: [<Item 
              stateObject={this.props.stateObject}
              renderFormState={this.props.renderFormState}
              renderSavedState={this.props.renderSavedState}
              deleteFunction={() => { this.deleteItem(startKey) }}
              positionFunction={(isMoveUp) => { this.shiftItem(isMoveUp, startKey) }}
              updateLocaleStorage={this.updateLocaleStorage}
              key={startKey}
              storageKey={startKey} />],
              isExpanded: true,
      }
    }
  }

  async updateLocaleStorage (stateObject, storageKey) {
    const { sectionTitle } = this.props
    if (stateObject) {
      let storedData = localStorage.getItem(sectionTitle)
      
      if (!storedData) {
        localStorage.setItem(sectionTitle, JSON.stringify(this.state))
        storedData = localStorage.getItem(sectionTitle)
      }
      const parsedData = JSON.parse(storedData)

      for (const item of parsedData.items) {
        if (item.key === storageKey) {
          item.props.stateObject = stateObject
        }
      }

      const itemsArray = this.interpretStoredItems(parsedData)
      await this.setState({ items: itemsArray })
      localStorage.setItem(sectionTitle, JSON.stringify(parsedData))

    } else {
      localStorage.setItem(sectionTitle, JSON.stringify(this.state))
    }
  }

  async addItem () {
    const { items } = this.state
    const key = uniqid()
    items.push(
      <Item 
      stateObject={this.props.stateObject}
      renderFormState={this.props.renderFormState}
      renderSavedState={this.props.renderSavedState}
      deleteFunction={() => { this.deleteItem(key) }}
      positionFunction={(isMoveUp) => { this.shiftItem(isMoveUp, key) }}
      updateLocaleStorage={this.updateLocaleStorage}
      storageKey={key}
      key={key} />
    )

    await this.setState({
      items: items
    })
    this.updateLocaleStorage()
  }

  async deleteItem (key) {
    const { items } = this.state
    const updatedItems = items.filter((item) => {
      if (item.key === key) { return false }
      return true
    })
    await this.setState({ items: updatedItems })
    this.updateLocaleStorage()
  }

  async shiftItem (isMoveUp, key) {
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
    await this.setState({ items: items })
    this.updateLocaleStorage()
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
    const { items } = this.state
    const { sectionTitle, Icon } = this.props
    if (this.state.isExpanded) {
      return (
        <div className="multi-section">
          <div className="section-header-div" onClick={this.collapseExpand}>
            <Icon className="section-logo"/>
            <h2>{sectionTitle}</h2>
          </div>
          <div className="spacer"></div>
          <ul>{items}</ul>
          <button className="new-item-button" onClick={this.addItem}><AddLogo className="section-logo"/> <p>add another</p></button>
        </div>
      )
    } else {
      return (
        <div className="section collapsed">
          <div className="section-header-div" onClick={this.collapseExpand}>
            <Icon className="section-logo"/>
            <h2>{sectionTitle}</h2>
          </div>
        </div>
      )
    }
  }
}

export default MultiSection