import React from 'react'

export default function EachSponsoredProgram({ data }) {
  return (
    <div className="programname-wrapper">
        <div className="programname">{ data.program_name }</div>
        <div className="sponsoredby">Sponsored By: { data.sponsored_by }</div>
    </div>
  )
}
