/* eslint-disable no-useless-constructor */
import { Component } from "react";
import GenericSection from "./generic-section";

class PersonalInfo extends Component {
  constructor (props) {
    super (props)

    this.renderForm = this.renderForm.bind(this)
    this.renderSaved = this.renderSaved.bind(this)
    this.changeSaveState = this.changeSaveState.bind(this)

    this.state = {
      isSaved: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      zip: '',
      city: '',
    }
  }

  updateFirstName = (event) => {
    this.setState({ firstName: event.target.value })
  }
  updateLastName = (event) => {
    this.setState({ lastName: event.target.value })
  }
  updateEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  updatePhone = (event) => {
    this.setState({ phone: event.target.value })
  }
  updateAddress = (event) => {
    this.setState({ address: event.target.value })
  }
  updateZip = (event) => {
    this.setState({ zip: event.target.value })
  }
  updateCity = (event) => {
    this.setState({ city: event.target.value })
  }

  renderForm () {
    const { firstName, lastName, email, phone, address, zip, city } = this.state
    return (
      <div className="section-content">
        <form>
        {/* first name + last name input */}
        <label htmlFor="first-name">First Name: </label>
        <input type="text" id="first-name" value={firstName} onChange={this.updateFirstName}/>

        <label htmlFor="last-name">Last Name: </label>
        <input type="text" id="last-name" value={lastName} onChange={this.updateLastName}/>
        {/* email input */}
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={this.updateEmail}/>
        {/* phone input */}
        <label htmlFor="phone">Phone: </label>
        <input type="text" id="phone" value={phone} onChange={this.updatePhone}/>
        {/* address input */}
        <label htmlFor="address">Address: </label>
        <input type="text" id="address" value={address} onChange={this.updateAddress}/>
        {/* zip code */}
        <label htmlFor="zip">ZIP Code: </label>
        <input type="text" id="zip" value={zip} onChange={this.updateZip}/>
        {/* city */}
        <label htmlFor="city">City: </label>
        <input type="text" id="city" value={city} onChange={this.updateCity}/>
        {/* save/edit button */}
        </form>
      </div>
    )
  }

  renderSaved () {
    const { firstName, lastName, email, phone, address, zip, city } = this.state
    return (
      <div className="section-content">
        <h3>{firstName + " " + lastName}</h3>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <h4>{address}</h4>
        <h4>{zip}</h4>
        <h4>{city}</h4>
        {/* save/edit button */}
      </div>
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
                        sectionTitle={'Personal Info'}
                        isSaved={this.state.isSaved} 
                        changeSaveState={this.changeSaveState} />
      )
    } else {
      return (
        <GenericSection content={this.renderForm()}
                        sectionTitle={'Personal Info'}
                        isSaved={this.state.isSaved} 
                        changeSaveState={this.changeSaveState} />
      )
    }
  }
}

export default PersonalInfo