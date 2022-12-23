/* eslint-disable no-useless-constructor */
import { Component, Fragment } from "react";
import { MonthValues, YearValues } from "./date-select-values";

class DateRangeSelect extends Component {
  constructor (props) {
    super (props)
  }

  render () {
    const { onChange, startDateMonth, startDateYear, endDateMonth, endDateYear } = this.props
    return (
      <Fragment>
        <div className="input-container date">
          <label htmlFor="startDateMonth">Start Date*</label>
          <div className="select-container">
            <select aria-label="start month" id="startDateMonth" value={startDateMonth} onChange={onChange}>
              <MonthValues/>
            </select>
            <select aria-label="start year" id="startDateYear" value={startDateYear} onChange={onChange}>
              <YearValues/>
            </select>
          </div>
        </div>
        <div className="input-container">
        <label htmlFor="endDateMonth">End Date*</label>
          <div className="select-container">
            <select aria-label="end month" id="endDateMonth" value={endDateMonth} onChange={onChange}>
              <MonthValues/>
            </select>
            <select aria-label="end year" id="endDateYear" value={endDateYear} onChange={onChange}>
              <YearValues/>
            </select>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default DateRangeSelect