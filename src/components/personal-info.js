/* eslint-disable no-useless-constructor */
import { Component } from "react";
import GenericSection from "./generic-section";

class PersonalInfo extends Component {
  constructor (props) {
    super (props)

    this.renderForm = this.renderForm.bind(this)
    this.renderSaved = this.renderSaved.bind(this)
    this.changeSaveState = this.changeSaveState.bind(this)
    this.onChange = this.onChange.bind(this)
    this.validate = this.validate.bind(this)
    this.updateLocaleStorage = this.updateLocaleStorage.bind(this)

    const localData = localStorage.getItem('personalInfo')
    if (localData) {
      const parsedData = JSON.parse(localData)
      const { isSaved, firstName, lastName, email, phone, address, zip, city } = parsedData
      this.state = {
        isSaved: isSaved,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        zip: zip,
        city: city,
      }  
    } else {
      this.state = {
        isSaved: this.props.saveState,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
      }
    }
  }

  async onChange (event) {
    const fieldName = event.target.id
    const value = event.target.value
    event.target.setCustomValidity('')
    await this.setState({ [fieldName]: value })
    this.updateLocaleStorage()
  }
  validate (event, msg) {
    if (!event.target.validity.valid) {
      event.target.setCustomValidity(msg)
      event.target.reportValidity()
    }
  }

  updateLocaleStorage () {
    localStorage.setItem('personalInfo', JSON.stringify(this.state))
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

  renderForm () {
    const { firstName, lastName, email, phone, address, zip, city } = this.state
    return (
      <div className="section-content">
        <form>
          <div className="input-container full" >
            <label htmlFor="firstName">First Name*</label>
            <input type="text" id="firstName" required={true} value={firstName} onChange={this.onChange}
            onBlur={(event) => { this.validate(event, 'First name is required') }} />
          </div>
          <div className="input-container full">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" id="lastName" required={true} value={lastName} onChange={this.onChange}
            onBlur={(event) => { this.validate(event, 'Last name is required') }} />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email Address*</label>
            <input type="email" id="email" required={true} value={email} onChange={this.onChange}
            onBlur={(event) => { this.validate(event, 'Valid email is required') }} />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" value={phone} onChange={this.onChange}/>
          </div>
          <div className="input-container full">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" value={address} onChange={this.onChange}/>
          </div>
          <div className="input-container">
            <label htmlFor="zip">ZIP Code</label>
            <input type="text" id="zip" value={zip} onChange={this.onChange}/>
          </div>
          <div className="input-container">
            <label htmlFor="city">City/Town</label>
            <input type="text" id="city" value={city} onChange={this.onChange}/>
          </div>
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

  render () {
    return (
      <GenericSection content={this.renderForm()}
                      sectionTitle={'Personal Info'} />
    )
  }
}

export default PersonalInfo