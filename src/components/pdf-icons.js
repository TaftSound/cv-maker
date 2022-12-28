import React from "react";
import { Svg, Path, G, Circle, View } from '@react-pdf/renderer';


const briefcasePath = "M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z"
const educationPath = "M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
const referencesPath = "M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18"
const skillsPath = "M11,1.07C7.05,1.56 4,4.92 4,9H11M4,15A8,8 0 0,0 12,23A8,8 0 0,0 20,15V11H4M13,1.07V9H20C20,4.92 16.94,1.56 13,1.07Z"

const personPath = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
const addressPath = "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
const phonePath = "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
const emailPath = "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"

const CreateIcon = (pathString) => {
  return (
    <View style={{ marginLeft: '-7px', marginRight: '-8px', marginBottom: '-20px', width: '45px' }}>
      <Svg viewBox="-10 -10 70 70" height='50px' width='45px'>
        <G>
          <Circle
            cx="12"
            cy="13"
            r="18"
            stroke="gray"
          />
          <Path
            d={pathString}
            fill="dimgray"
          />
        </G>
      </Svg>
    </View>
  )
}

const CreateSmallIcon = (pathString) => {
  return (
    <View style={{ marginLeft: '-7px', marginRight: '-10px', width: '40px' }}>
      <Svg viewBox="5 0 40 40" height='25px' width='40px'>
          <Path
            d={pathString}
            fill="white"
          />
      </Svg>
    </View>
  )
}

const BriefcaseIcon = CreateIcon(briefcasePath)
const EducationIcon = CreateIcon(educationPath)
const ReferencesIcon = CreateIcon(referencesPath)
const SkillsIcon = CreateIcon(skillsPath)
const PersonIcon = CreateSmallIcon(personPath)
const AddressIcon = CreateSmallIcon(addressPath)
const PhoneIcon = CreateSmallIcon(phonePath)
const EmailIcon = CreateSmallIcon(emailPath)

export { BriefcaseIcon, EducationIcon, ReferencesIcon, SkillsIcon, PersonIcon, AddressIcon, PhoneIcon, EmailIcon }