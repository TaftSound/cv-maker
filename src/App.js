import './App.css';
import { Component } from 'react';
import PersonalInfo from './components/personal-info';
import ResumeObjective from './components/resume-objective';
import WorkExperience from './components/work-experience';
import Education from './components/educational-experience';
import Skills from './components/skills';
import Interests from './components/interests';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }
  
  render () {
    return (

      // When all sections have been saved,
      // there should be an option to output/display
      // the formatted document, and to save file

      // For future consider adding varied templates

      // Consider saving data to local storage
      
      <div className='App'>
      <PersonalInfo />
      <ResumeObjective />
      <WorkExperience />
      <Education />
      <Skills />
      <Interests />

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

      </div>
    )
  }
}


export default App;
