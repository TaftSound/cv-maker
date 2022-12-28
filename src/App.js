import './App.css';
import './styles/logo-styling.css';
import { Component, Fragment } from 'react';
import PersonalInfo from './components/personal-info';
import ResumeObjective from './components/resume-objective';
import WorkExperience from './components/work-experience';
import Education from './components/educational-experience';
import Skills from './components/skills';
import Interests from './components/interests';
import References from './components/references';
import { MyDocument, DownloadPdf } from './components/pdf-renderer';
import { ReactComponent as AccountLogo } from './svg/account.svg';
import { ReactComponent as DocumentLogo } from './svg/file-document.svg';
import { ReactComponent as PencilLogo } from './svg/pencil.svg';
import { ReactComponent as ChevronRight } from './svg/chevron-right.svg';
import { ReactComponent as ChevronLeft } from './svg/chevron-left.svg';
import { ReactComponent as DownloadLogo } from './svg/download-circle.svg';


class App extends Component {
  constructor (props) {
    super (props)

    this.renderPreviousPage = this.renderPreviousPage.bind(this)
    this.renderNextPage = this.renderNextPage.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderProgressBar = this.renderProgressBar.bind(this)
    this.renderPage = this.renderPage.bind(this)
    this.renderPageByIndex = this.renderPageByIndex.bind(this)
    this.updateLocaleStorage = this.updateLocaleStorage.bind(this)

    const localData = localStorage.getItem('currentPage')
    if (localData) {
      const parsedData = JSON.parse(localData)
      const { currentPage } = parsedData
      this.state = {
        currentPage: currentPage
      }
    } else {
      this.state = {
        currentPage: 0,
      }
    }
  }

  updateLocaleStorage () {
    localStorage.setItem('currentPage', JSON.stringify(this.state))
  }

  async renderPreviousPage () {
    const { currentPage } = this.state
    await this.setState({ currentPage: currentPage - 1 })
    this.updateLocaleStorage()
  }
  async renderNextPage () {
    const { currentPage } = this.state
    await this.setState({ currentPage: currentPage + 1 })
    this.updateLocaleStorage()
  }
  async renderPageByIndex (pageIndex) {
    await this.setState({ currentPage: pageIndex })
    this.updateLocaleStorage()
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
        <div className='progress-circle complete' onClick={() => { this.renderPageByIndex(0) } }>
          <AccountLogo className='progress-logo'/>
          <p>Personal</p>
        </div>
        <div className={'progress-circle' + stepTwo} onClick={() => { this.renderPageByIndex(1) } }>
          <DocumentLogo className='progress-logo'/>
          <p>Experiences</p>
        </div>
        <div className={'progress-circle' + stepThree} onClick={() => { this.renderPageByIndex(2) } }>
          <PencilLogo className='progress-logo'/>
          <p>Template</p>
        </div>
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
    const nextButton = (
      <button type='submit' id='next-button' onClick={this.renderNextPage}>
        <p>Next Step</p>
        <ChevronRight className='section-logo'/>
      </button>
    )
    const downloadButton = (
      <button type='submit' id='download-button' >
        <DownloadLogo className='section-logo'/>
        <DownloadPdf />
      </button>
    )
    const previousButton = (
      <button type='submit' id='previous-button' onClick={this.renderPreviousPage}>
        <ChevronLeft className='section-logo'/>
        <p>Previous Step</p>
      </button>
    )

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
          {this.renderHeader('My Experiences')}
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
          {this.renderHeader('Download Resume')}
          <div className='content-div'>
            <MyDocument/>
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
