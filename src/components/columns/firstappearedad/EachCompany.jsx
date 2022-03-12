import React from "react";
import "../col.css";
import EachAd from "./EachAd";

export default function EachCompany({ data }) {
    return (
        <div className="companyname-wrapper">
            <div className="companyname">{ data.company_name }</div>
            {
                data.ads.map((eachAd, index) => (
                    <EachAd key={index} data={eachAd} />
                ))
            }
        </div>
    );
}
