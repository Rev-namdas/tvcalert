import React from "react";

export default function ControlPanel({ columns, setColumns }) {
    const handleSelection = (e) => {
        setColumns({
            ...columns,
            [e.target.name]: e.target.checked
        })
    }

    return (
        <div>
            <input type="checkbox" name="fa-ad" id="fa-ad" onChange={handleSelection} />
            <label htmlFor="fa-ad">First Appeared Ad</label>

            <input type="checkbox" name="fa-prog" id="fa-prog" onChange={handleSelection} />
            <label htmlFor="fa-prog">First Appeared Program</label>

            <input type="checkbox" name="spn-prog" id="spn-prog" onChange={handleSelection} />
            <label htmlFor="spn-prog">Sponsored Program</label>
        </div>
    );
}
