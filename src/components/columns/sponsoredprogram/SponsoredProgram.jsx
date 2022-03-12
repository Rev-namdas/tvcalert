import React from "react";
import "../col.css";
import EachSponsoredProgramType from "./EachSponsoredProgramType";

export default function SponsoredProgram() {
    const data = [
        {
            program_type: "Single Drama",
            programs: [
                {
                    program_name: "Ora Sahoshi_Nagorik TV_05-03-2022",
                    sponsored_by: "Robi Axiata Limited",
                },
                {
                    program_name: "Tomar Jonno_NTV_04-03-2022",
                    sponsored_by: "Unilever Bangladesh Limited",
                },
            ],
        },
        {
            program_type: "Talk Show",
            programs: [
                {
                    program_name: "Sompadokio (Live)_Somoy TV_01-03-2022",
                    sponsored_by: "Pran RFL Group",
                },
            ],
        },
        {
            program_type: "Movie",
            programs: [
                {
                    program_name: "Maa_Nagorik TV_01-03-2022",
                    sponsored_by: "Airtel Bangladesh Limited",
                },
                {
                    program_name: "Eri Naam Shongshar_Nagorik TV_02-03-2022",
                    sponsored_by: "Robi Axiata Limited",
                },
                {
                    program_name: "Purano Din_Mohona TV_03-03-2022",
                    sponsored_by: "Grameenphone Limited",
                },
            ],
        },
        {
            program_type: "News",
            programs: [
                {
                    program_name: "News Room Update_ATN News_03-03-2022",
                    sponsored_by: "Zahir Steel & Re-Rolling Mills Limited",
                },
                {
                    program_name: "Raater Somoy at 09 PM_Somoy TV_01-03-2022",
                    sponsored_by: "Abul Khair Group",
                }
            ],
        },
    ];

    return (
        <div className="col">
            <div className="col-title">Sponsored Programs</div>
            <div className="content-wrapper">
                {
                    data.map((eachProgramType, index) => (
                        <EachSponsoredProgramType key={index} data={eachProgramType} />
                    ))
                }

                {/* <div className="programtype-wrapper">
                    <div className="programtype">{ data[0].program_type }</div>

                    <div className="programname-wrapper">
						<div className="programname">{ data[0].programs[0].program_name }</div>
						<div className="sponsoredby">Sponsored By: { data[0].programs[0].sponsored_by }</div>
					</div>
                </div> */}
            </div>
        </div>
    );
}
