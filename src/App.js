import './App.css';
import { Component, Fragment } from 'react';
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

    this.renderPreviousPage = this.renderPreviousPage.bind(this)
    this.renderNextPage = this.renderNextPage.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderProgressBar = this.renderProgressBar.bind(this)
    this.renderPage = this.renderPage.bind(this)
    this.renderPageByIndex = this.renderPageByIndex.bind(this)

    this.state = {
      currentPage: 0,
    }
  }

  renderPreviousPage () {
    const { currentPage } = this.state
    this.setState({ currentPage: currentPage - 1 })
  }
  renderNextPage () {
    const { currentPage } = this.state
    this.setState({ currentPage: currentPage + 1 })
  }
  renderPageByIndex (pageIndex) {
    this.setState({ currentPage: pageIndex })
  }

  renderProgressBar () {
    const { currentPage } = this.state
    const stepTwo = currentPage > 0 ? ' complete' : ''
    const stepThree = currentPage > 1 ? ' complete' : ''
    let progressLineFill = <div className='progress-line-fill' style={{left: '-80%',}}></div>
    if (stepTwo) { progressLineFill = <div className='progress-line-fill' style={{left: '-50%',}}></div> }
    if (stepThree) { progressLineFill = <div className='progress-line-fill' style={{left: '0%',}}></div> }

    return (
      <div className='progress-bar'>
        <div className='progress-circle complete' onClick={() => { this.renderPageByIndex(0) } }></div>
        <div className={'progress-circle' + stepTwo} onClick={() => { this.renderPageByIndex(1) } }></div>
        <div className={'progress-circle' + stepThree} onClick={() => { this.renderPageByIndex(2) } }></div>
        <div className='progress-line'>
          {progressLineFill}
        </div>
      </div>
    )
  }

  renderHeader (pageName) {
    return (
      <Fragment>
        <div className='header-div'>
          <p className='logo'><strong>cv</strong>master</p>
          <h1>{pageName}</h1>
          {this.renderProgressBar()}
          <div className='masking-div'></div>
        </div>
      </Fragment>
    )
  }
  
  renderPage () {
    const { currentPage } = this.state
    const nextButton = <button type='submit' id='next-button' onClick={this.renderNextPage}>Next Step</button>
    const downloadButton = <button type='submit' id='next-button'>Download Resume</button>
    const previousButton = <button type='submit' id='previous-button' onClick={this.renderPreviousPage}>Previous Step</button>

    if (currentPage === 0) {
      return (
        <Fragment>
          {this.renderHeader('Personal Info')}
          <div className='content-div'>
            <PersonalInfo />
            {nextButton}
          </div>
        </Fragment>
      )
    }
    if (currentPage === 1) {
      return (
        <Fragment>
          {this.renderHeader('Experience')}
          <div className='content-div'>
            <ResumeObjective />
            <WorkExperience />
            <Education />
            <Skills />
            <Interests />
            <References />
            {nextButton}
            {previousButton}
          </div>
        </Fragment>
      )
    }
    if (currentPage === 2) {
      return (
        <Fragment>
          {this.renderHeader('Unfinished Page')}
          <div className='content-div'>
            <h2>Unfinished Page</h2>
            {downloadButton}
            {previousButton}
          </div>
        </Fragment>
      )
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
        {this.renderPage()}
      </div>
    )
  }
}


export default App;
