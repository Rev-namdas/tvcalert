import React from "react";
import "../col.css";
import EachAdProductType from "./EachAdProductType";

export default function FirstAppearedAd() {
    const data = [
        {
            product_type: "Banking Service",
            details: [
                {
                    company_name: "bKash Limited",
                    ads: [
                        {
                            adname: "Money Savings On IDLC Account 10s 03-03-2022",
                            fa_media: "Channel 24",
                            ad_link: "https://youtu.be/sMwKrxZKUSc",
                            media_names: ["Asian TV", "DBC News", "Somoy TV"],
                        },
                    ],
                },
                {
                    company_name: "Nagad Limited",
                    ads: [
                        {
                            adname: "Nagad Islamic Account 15 sec TVC_44_A Mosque 15s 04-03-2022",
                            fa_media: "Somoy TV",
                            ad_link: "https://youtu.be/sMwKrxZKUSc",
                            media_names: ["Asian TV", "DBC News", "Channel 24"],
                        },
                    ],
                },
            ],
        },
        {
            product_type: "Consumer Product",
            details: [
                {
                    company_name: "Akij Bakers Limited",
                    ads: [
                        {
                            adname: "Bakemans Cookies Biscuits 10s 01-03-2022",
                            fa_media: "Channel 24",
                            ad_link: "https://youtu.be/sMwKrxZKUSc",
                            media_names: ["Asian TV", "DBC News", "Somoy TV"],
                        },
                    ],
                },
                {
                    company_name: "Pran RFL Group",
                    ads: [
                        {
                            adname: "All Time Cream Roll Chocolate Creamfill 10s 02-03-2022",
                            fa_media: "Somoy TV",
                            ad_link: "https://youtu.be/sMwKrxZKUSc",
                            media_names: ["Asian TV", "DBC News", "Bangla TV"],
                        },
                    ],
                },
                {
                    company_name: "Unilever Bangladesh Limited",
                    ads: [
                        {
                            adname: "Lifebuoy HW Covid PSA 15s TVC Jan 22 15s 05-03-2022",
                            fa_media: "Nagorik TV",
                            ad_link: "https://youtu.be/sMwKrxZKUSc",
                            media_names: ["Asian TV", "DBC News", "Bangla TV"],
                        },
                        {
                            adname: "Rin Functional 20s TVC Feb 22 20s 04-03-2022",
                            fa_media: "Nagorik TV",
                            ad_link: "https://youtu.be/sMwKrxZKUSc",
                            media_names: ["Asian TV", "DBC News", "Bangla TV"],
                        },
                    ],
                },
            ],
        },
        {
            product_type: "Telecommunication",
            details: [
                {
                    company_name: "Grameenphone Limited",
                    ads: [
                        {
                            adname: "GP Ekhoni Shomoy Network TVC 20s 06-03-2022",
                            fa_media: "Channel 24",
                            ad_link: "https://youtu.be/sMwKrxZKUSc",
                            media_names: ["Asian TV", "DBC News", "Somoy TV"],
                        },
                        {
                            adname: "GP Ekhoni Shomoy Network TVC Fisherman 40s 06-03-2022",
                            fa_media: "Channel 24",
                            ad_link: "https://youtu.be/sMwKrxZKUSc",
                            media_names: ["Asian TV", "DBC News", "Somoy TV"],
                        },
                    ],
                },
                {
                    company_name: "Banglalink Digital Communications Limited ",
                    ads: [
                        {
                            adname: "OOKLA Speedtest_4th Win 10s 02-03-2022",
                            fa_media: "Somoy TV",
                            ad_link: "https://youtu.be/sMwKrxZKUSc",
                            media_names: ["Asian TV", "DBC News", "Bangla TV"],
                        },
                    ],
                },
                {
                    company_name: "Airtel Bangladesh Limited ",
                    ads: [
                        {
                            adname: "Airtel Thematic 10 sec A (Left Logo) 10s 02-03-2022",
                            fa_media: "Nagorik TV",
                            ad_link: "https://youtu.be/sMwKrxZKUSc",
                            media_names: ["Asian TV", "DBC News", "Bangla TV"],
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="col">
            <div className="col-title">New Ads</div>
            <div className="content-wrapper">
                {
					data.map((eachProductType, index) => (
						<EachAdProductType key={index} data={eachProductType} />
					))
              	}
                {/* <div className="producttype-wrapper">
                    <div className="producttype">{data[0].product_type}</div>

					<div className="companyname-wrapper">
						<div className="companyname">{ data[0].details[0].company_name }</div>
						
						<div className="adname-wrapper">
							<div className="adname">{ data[0].details[0].ads[0].adname }</div>
							<div className="channellist">
								<a className="channelname famedia" target="_blank" href={ data[0].details[0].ads[0].ad_link }>{ data[0].details[0].ads[0].fa_media }</a>
								<span className="channelname">, Somoy TV</span>
								<span className="channelname">, Independent TV</span>
								<span className="channelname">, Nagorik TV</span>
								<span className="channelname">, Bangla TV</span>
							</div>
							<hr />
						</div>
					</div>
                </div> */}
        
            </div>
        </div>
    );
}
