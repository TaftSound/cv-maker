import React from "react";
import uniqid from "uniqid";

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { usePDF } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  iframe: {
    border: 'none',
    height: '710px',
    objectFit: 'cover',
  },
  page: {
    flexDirection: 'row',
    fontFamily: 'Helvetica',
  },
  sectionOne: {
    paddingTop: '25px',
    flex: .4,
    backgroundColor: '#3F6592',
    color: 'white',
  },
  sectionTwo: {
    flex: 1,
    backgroundColor: 'white',
    padding: '0px 15px',
  },
  personalSection: {
    padding: '5 15',
  },
  twoColumnBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftBox: {
    marginRight: '15px',
    width: '25%',
  },
  spacer: {
    backgroundColor: 'rgb(0, 0, 0, 0.2)',
    height: '1px',
    marginTop: '15px',
    marginBottom: '5px',
    width: '100%',
  },
  nameHeader: {
    fontSize: '20px',
    fontFamily: 'Helvetica',
    letterSpacing: '1px',
    padding: 0,
    margin: '15px 0px',
    marginTop: '20px',
  },
  mediumHeader: {
    fontSize: '13px',
    fontFamily: 'Helvetica',
    letterSpacing: '1px',
    padding: 0,
    margin: '10 0',
  },
  smallHeader: {
    fontSize: '11px',
    fontFamily: 'Helvetica-Bold',
    marginBottom: '5',
  },
  text: {
    fontSize: '10px',
    lineHeight: '1.5px',
    margin: '0',
  },
});

const DisplayName = () => {
  const personalInfoData = JSON.parse(localStorage.getItem('personalInfo'))
  let { firstName, lastName } = personalInfoData
  return <Text style={styles.nameHeader}>{firstName.toUpperCase()} {lastName.toUpperCase()}</Text>
}

const DisplayPersonalDetails = () => {
  const personalInfoData = JSON.parse(localStorage.getItem('personalInfo'))
  let { firstName, lastName, email, phone, address, city, zip } = personalInfoData
  const name = <Text style={styles.text}>{firstName} {lastName}</Text>
  if (email) { email = <Text style={styles.text}>{email}</Text> }
  if (phone) { phone = <Text style={styles.text}>{phone}</Text> }
  if (address) { address = <Text style={styles.text}>{address}</Text> }
  if (city && zip) { city = <Text style={styles.text}>{city}, {zip}</Text> }
  else if (zip && !city) { city = <Text style={styles.text}>{zip}</Text> }
  else if (city) { city = <Text style={styles.text}>{city}</Text> }
  return (
      <View style={styles.personalSection}>
        <Text style={styles.mediumHeader}>PERSONAL</Text>
        <Text style={styles.smallHeader}>Name</Text>
        {name}
        <Text style={styles.smallHeader}>Email</Text>
        {email}
        <Text style={styles.smallHeader}>Phone</Text>
        {phone}
        <Text style={styles.smallHeader}>Address</Text>
        {address}
        {city}
      </View>
  )
}
const DisplayPersonalInterests = () => {
  const interestsData = JSON.parse(localStorage.getItem('Interests'))
  const { items } = interestsData
  const itemArray = []
  for (const item of items) {
    const key = uniqid()
    const interest = item.props.stateObject.interest
    let interestView = <Text key={key} style={styles.text}>{interest}</Text>
    itemArray.push(interestView)
  }
  return (
    <View style={styles.personalSection}>
      <Text style={styles.mediumHeader}>INTERESTS</Text>
      {itemArray}
    </View>
  )
}

const DisplayObjective = () => {
  const objectiveData = JSON.parse(localStorage.getItem('resumeObjective'))
  return <Text style={styles.text}>{objectiveData.objective}</Text>
}

const CreateSpacer = () => {
  return <View style={styles.spacer}></View>
}

const DisplayWorkExperience = () => {
  const workData = JSON.parse(localStorage.getItem('Work Experience'))
  const { items } = workData
  const itemArray = []
  for (const item of items) {
    const key = uniqid()
    const { city, employer, title, startDateMonth, startDateYear, endDateMonth, endDateYear, description } = item.props.stateObject
    let workView = (
      <View key={key} style={styles.twoColumnBox}>
        <View style={styles.leftBox}>
          <Text style={styles.text}>{startDateMonth} {startDateYear} - {endDateMonth} {endDateYear}</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>{title}</Text>
          <Text style={styles.text}>{employer}, {city}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>
      )
    itemArray.push(workView)
  }
  return (
    <View>
      <Text style={styles.mediumHeader}>WORK EXPERIENCE</Text>
      {itemArray}
    </View>
  )
}

const DisplayEducation = () => {
  const educationData = JSON.parse(localStorage.getItem('Education'))
  const { items } = educationData
  const itemArray = []
  for (const item of items) {
    const key = uniqid()
    const { city, degree, school, startDateMonth, startDateYear, endDateMonth, endDateYear } = item.props.stateObject
    let educationView = (
      <View key={key} style={styles.twoColumnBox}>
        <View style={styles.leftBox}>
          <Text style={styles.text}>{startDateMonth} {startDateYear} - {endDateMonth} {endDateYear}</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>{degree}</Text>
          <Text style={styles.text}>{school}, {city}</Text>
        </View>
      </View>
      )
    itemArray.push(educationView)
  }
  return (
    <View>
      <Text style={styles.mediumHeader}>EDUCATION AND QUALIFICATIONS</Text>
      {itemArray}
    </View>
  )
}

const DisplayReferences = () => {
  const referencesInluded = JSON.parse(localStorage.getItem('includeReferences'))
  if (!referencesInluded) {
    return (
      <View>
        <Text style={styles.mediumHeader}>REFERENCES</Text>
        <Text style={styles.text}>References provided upon request</Text>
      </View>
    )
  }
  const referencesData = JSON.parse(localStorage.getItem('References'))
  const { items } = referencesData
  const itemArray = []
  for (const item of items) {
    const key = uniqid()
    const { company, email, name, phone } = item.props.stateObject
    let referencesView = (
      <View key={key} style={styles.twoColumnBox}>
        <View style={styles.leftBox}>
          <Text style={styles.text}>{company}</Text>
        </View>
        <View>
          <Text style={styles.smallHeader}>{name}</Text>
          <Text style={styles.text}>{phone}</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
      </View>
      )
    itemArray.push(referencesView)
  }
  return (
    <View>
      <Text style={styles.mediumHeader}>REFERENCES</Text>
      {itemArray}
    </View>
  )
}

const DisplaySkills = () => {
  const skillsData = JSON.parse(localStorage.getItem('Skills'))
  const { items } = skillsData
  const itemArray = []
  for (const item of items) {
    const key = uniqid()
    const { skill, yearsExperience } = item.props.stateObject
    let skillsView = (
      <View key={key} style={styles.twoColumnBox}>
        <View style={styles.leftBox}>
          <Text style={styles.text}>{skill} - {yearsExperience}</Text>
        </View>
        <View>
          <Text style={styles.text}></Text>
        </View>
      </View>
      )
    itemArray.push(skillsView)
  }
  return (
    <View>
      <Text style={styles.mediumHeader}>SKILLS</Text>
      {itemArray}
    </View>
  )
}

const CreateDocumentData = () => (
    <Document >
      <Page size="A4" style={styles.page} >
        <View style={styles.sectionOne} >
          {DisplayPersonalDetails()}
          {DisplayPersonalInterests()}
        </View>
        <View style={styles.sectionTwo}>
          {DisplayName()}
          {DisplayObjective()}
          {CreateSpacer()}
          {DisplayWorkExperience()}
          {CreateSpacer()}
          {DisplayEducation()}
          {CreateSpacer()}
          {DisplayReferences()}
          {CreateSpacer()}
          {DisplaySkills()}
        </View>
      </Page>
    </Document>
)

const CreatePdf = () => {
  const [instance] = usePDF({ document: CreateDocumentData() });

  return (
    <div style={{ 
        // height: '45vh',
        // width: '30vh',
        height: '73.8vh',
        width: "52.2vh",
        borderRadius: '5px',
        overflow: 'hidden',
        position: 'relative',
        alignSelf: 'center', }}>
      <iframe 
        src={`${instance.url}#toolbar=0`}
        // height='103%'
        height='101.4%' 
        width='101.4%' 
        objectfit="contain"
        title="pdfFile"
        frameBorder="0"
        style={{
          margin: '0px',
          position: "absolute",
          top: '-2px',
          left: '-3px',
          overflow: "hidden",
          backgroundColor: "transparent"
        }}
        >
      </iframe>
    </div>
  )
}

// Create Document Component
export const MyDocument = () => {
  return CreatePdf()
}