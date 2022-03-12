import React from "react";
import "../col.css";
import EachProgramType from "./EachProgramType";

export default function FirstAppearedProgram() {
    const data = [
        {
            program_type: "Single Drama",
            programs: [
                {
                    program_name: "Ora Sahoshi_Nagorik TV",
                    launching_date_time: "05-03-2022 05:00 PM",
                },
                {
                    program_name: "Tomar Jonno_NTV",
                    launching_date_time: "04-03-2022 02:00 PM",
                },
            ],
        },
        {
            program_type: "Talk Show",
            programs: [
                {
                    program_name: "Sompadokio (Live)_Somoy TV",
                    launching_date_time: "01-03-2022 02:00 PM",
                },
            ],
        },
        {
            program_type: "Movie",
            programs: [
                {
                    program_name: "Maa_Nagorik TV",
                    launching_date_time: "02-03-2022 02:00 PM",
                },
                {
                    program_name: "Eri Naam Shongshar_Nagorik TV",
                    launching_date_time: "02-03-2022 02:00 PM",
                },
                {
                    program_name: "Purano Din_Mohona TV",
                    launching_date_time: "02-03-2022 02:00 PM",
                },
            ],
        },
    ];

    return (
        <div className="col">
            <div className="col-title">New Programs</div>
            <div className="content-wrapper">
				{
                    data.map((eachProgramType, index) => (
                        <EachProgramType key={index} data={eachProgramType} />
                    ))
                }

                {/* <div className="programtype-wrapper">
					<div className="programtype">{ data[0].program_type }</div>

					<div className="programname-wrapper">
						<div className="programname">{ data[0].programs[0].program_name }</div>
						<div className="launchingdatetime">On Aired: { data[0].programs[0].launching_date_time }</div>
					</div>
				</div> */}
			</div>
        </div>
    );
}
