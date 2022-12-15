import './App.css';
import { Component } from 'react';
import PersonalInfo from './components/personal-info';
import GenericSection from './components/generic-section';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }
  
  render () {
    return (
      // Each input should switch to a <p> element when 
      // section is saved

      // Each section should have a save button
      // When pressed, save button becomes an edit button

      // Each section displayed as a floating card
      
      // Consider either sidescrolling from one section to next
      // like in an image carousel, or having one long page 
      // with all sections displayed

      // When all sections have been saved,
      // there should be an option to output/display
      // the formatted document, and to save file

      // For future consider adding varied templates

      // Consider saving data to local storage

      // Make a generic section component
      // All others can extend this component
      // It should include:
        // Container div with styling applied
        // Save/edit button -- function via props
        // Delete button enabled via boolean props
        // Reorder button enabled via boolean props
      
      <div className='App'>
      <PersonalInfo />
      {/* GENERAL INFO SECTION */}
      
      {/* Section header */}
      {/* first name + last name input */}
      {/* email input */}
      {/* phone input */}
      {/* address input */}
      {/* zip code */}
      {/* city */}
      {/* save/edit button */}

      {/*  */}

      {/* RESUME OBJECTIVE */}
      
      {/* Section header */}
      {/* Objective */}
      {/* Save/edit button */}

      {/*  */}

      {/* WORK EXPERIENCE */}

      {/* Section header */}
      {/* For each job: */}
        {/* Job Title */}
        {/* Employer */}
        {/* City/town */}
        {/* Start date */}
        {/* End date */}
        {/* Description */}
        {/* Save/edit button */}
        {/* Delete button */}
        {/* Reorder button */}
      {/* Add new job button */}

      {/*  */}

      {/* EDUCATION/QUALIFICATIONS */}

      {/* Section header */}
      {/* For each school: */}
        {/* Degree */}
        {/* City */}
        {/* School */}
        {/* Start date */}
        {/* End date */}
        {/* Description */}
        {/* Save/edit button */}
        {/* Delete button */}
        {/* Reorder button */}
      {/* Add new school button */}

      {/*  */}
      
      {/* INTERESTS */}

      {/* Section header */}
      {/* For each: */}
        {/* The interest */}
        {/* Save/edit button */}
        {/* Delete button */}
        {/* Reorder button */}
      {/* Add new interest button */}

      {/*  */}
      
      {/* REFERENCES */}

      {/* Section header */}
      {/* button to optionally say: */}
      {/* "references available upon request" */}

      {/* For each: */}
        {/* company name */}
        {/* person name */}
        {/* phone number (optional) */}
        {/* email address (optional) */}
        {/* Save/edit button */}
        {/* Delete button */}
        {/* Reorder button */}
      {/* Add new reference button */}

      {/*  */}
      
      {/* SKILLS */}

      {/* Section header */}
      {/* For each: */}
        {/* The skill */}
        {/* Skill level selector */}
        {/* Save/edit button */}
        {/* Delete button */}
        {/* Reorder button */}
      {/* Add new skill button */}



      </div>
    )
  }
}


export default App;
