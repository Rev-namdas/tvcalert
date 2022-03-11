import React from "react";
import "../col.css";
import EachAd from "./EachAd";

export default function EachCompany({ data }) {
    return (
        <div>
            <div className="companyname">{data.company_name}</div>
            <div className="col-content">
                {data.ads.map((eachAd, index) => (
                    <EachAd key={index} data={eachAd} />
                ))}
            </div>
        </div>
    );
}
