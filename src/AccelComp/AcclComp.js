import React from "react";
import './AcclComp.css';

const AcclComp = ({
    magnReading,
    time
}) => {
    return (
        <div>
            <div className="SingleAcclReading">
                <p>Time - {new Date(time * 1000).toDateString()}</p>
                <p>Temperature - {acclReading}° C</p>
            </div>
        </div>
    );
};

export default AcclComp;