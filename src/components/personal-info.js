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
          <div className="input-container full" >
            <label htmlFor="first-name">First Name*</label>
            <input type="text" id="first-name" value={firstName} onChange={this.updateFirstName} />
          </div>

          <div className="input-container full">
            <label htmlFor="last-name">Last Name*</label>
            <input type="text" id="last-name" value={lastName} onChange={this.updateLastName}/>
          </div>
          {/* email input */}
          <div className="input-container">
            <label htmlFor="email">Email Address*</label>
            <input type="email" id="email" value={email} onChange={this.updateEmail}/>
          </div>
          {/* phone input */}
          <div className="input-container">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" value={phone} onChange={this.updatePhone}/>
          </div>
          {/* address input */}
          <div className="input-container full">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" value={address} onChange={this.updateAddress}/>
          </div>
          {/* zip code */}
          <div className="input-container">
            <label htmlFor="zip">ZIP Code</label>
            <input type="text" id="zip" value={zip} onChange={this.updateZip}/>
          </div>
          {/* city */}
          <div className="input-container">
            <label htmlFor="city">City/Town</label>
            <input type="text" id="city" value={city} onChange={this.updateCity}/>
          </div>
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