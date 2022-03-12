import React from "react";
import "../col.css";

export default function EachAd({ data }) {
    return (
        <div className="adname-wrapper">
            <div className="adname">{data.adname}</div>
            <div className="channellist">
                <a
                    className="channelname famedia"
                    target="_blank"
					rel="noreferrer noopener"
                    href={data.ad_link}
                >
                    {data.fa_media}
                </a>
				{
					data.media_names.map((eachChannel, index) => (
						<span key={index} className="channelname">, { eachChannel }</span>
					))
				}
            </div>
            <hr />
        </div>
    );
}
