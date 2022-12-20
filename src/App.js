import './App.css';
import { Component } from 'react';
import PersonalInfo from './components/personal-info';
import ResumeObjective from './components/resume-objective';
import WorkExperience from './components/work-experience';
import Education from './components/educational-experience';
import Skills from './components/skills';
import Interests from './components/interests';
import References from './components/references';

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

      // style form inputs

      // add option to display all section info together as html
      
      <div className='App'>
        <PersonalInfo />
        <ResumeObjective />
        <WorkExperience />
        <Education />
        <Skills />
        <Interests />
        <References />
      </div>
    )
  }
}


export default App;
