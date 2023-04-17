import React from "react";
import './TempComp.css';

const TempComp = ({
    tempReading,
    time
}) => {
    return (
        <div>
            <div className="SingleTempReading">
                <p>Time - {new Date(time * 1000).toDateString()}</p>
                <p>Temperature - {tempReading}° C</p>
            </div>
        </div>
    );
};

export default TempComp;