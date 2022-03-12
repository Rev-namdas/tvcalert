import React from 'react'
import "../col.css";
import EachCompany from './EachCompany';

export default function EachAdProductType({ data }) {
  return (
    <div className="producttype-wrapper">
      <div className="producttype">{data.product_type}</div>
      {
		  data.details.map((eachCompany, index) => (
			  <EachCompany key={index} data={eachCompany} />
		  ))
	  }
    </div>
  )
}
