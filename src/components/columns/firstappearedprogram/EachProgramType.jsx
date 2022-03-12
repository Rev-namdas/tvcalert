import React from 'react'
import EachProgram from './EachProgram'

export default function EachProgramType({ data }) {
  return (
    <div className="programtype-wrapper">
        <div className="programtype">{ data.program_type }</div>

        {
            data.programs.map((eachProgram, index) => (
                <EachProgram key={index} data={eachProgram} />
            ))
        }
    </div>
  )
}
