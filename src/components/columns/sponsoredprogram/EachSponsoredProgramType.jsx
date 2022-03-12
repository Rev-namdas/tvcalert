import React from 'react'
import EachSponsoredProgram from './EachSponsoredProgram'

export default function EachSponsoredProgramType({ data }) {
  return (
    <div className="programtype-wrapper">
        <div className="programtype">{ data.program_type }</div>

        {
            data.programs.map((eachProgram, index) => (
                <EachSponsoredProgram key={index} data={eachProgram} />
            ))
        }
    </div>
  )
}
