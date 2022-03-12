import React from 'react'

export default function EachProgram({ data }) {
  return (
    <div className="programname-wrapper">
        <div className="programname">{ data.program_name }</div>
        <div className="launchingdatetime">On Aired: { data.launching_date_time }</div>
    </div>
  )
}
