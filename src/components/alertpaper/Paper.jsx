import React from "react";
import AdIcon from "../../img/icon_ad.png";
import ProgIcon from "../../img/icon_prog.png";
import TVIcon from "../../img/icon_tv.png";
import "./paper.css";
import FirstAppearedAd from "../columns/firstappearedad/FirstAppearedAd";
import FirstAppearedProgram from "../columns/firstappearedprogram/FirstAppearedProgram";
import SponsoredProgram from "../columns/sponsoredprogram/SponsoredProgram";

export default function Paper({ columns }) {
    return (
        <div className="paper-layout">
            <div className="paper-header">
                <img src={AdIcon} alt="Ad Icon" height="80" />
                <div className="center">
                    <img src={TVIcon} alt="TV Icon" height="80" className="tv-icon" />
                    <div className="paper-title">TV Media Insights</div>
                </div>
                <img src={ProgIcon} alt="Program Icon" height="70" />
            </div>
            <div className="paper-container">
                { columns["fa-ad"] && <FirstAppearedAd /> }
                { columns["fa-prog"] && <FirstAppearedProgram /> }
                { columns["spn-prog"] && <SponsoredProgram /> }
            </div>
        </div>
    );
}
