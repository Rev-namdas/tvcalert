import { useState } from "react";
import "./App.css";
import Paper from "./components/alertpaper/Paper";
import ControlPanel from "./components/controlpanel/ControlPanel";

function App() {
    const [columns, setColumns] = useState({
        "fa-ad": false,
        "fa-prog": false,
        "spn-prog": false,
    });

    return (
        <div className="core-container">
            <ControlPanel columns={columns} setColumns={setColumns} />
            <Paper columns={columns} />
        </div>
    );
}

export default App;
