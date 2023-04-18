import React from "react";
import './MagnComp.css';

const MagnComp = ({
    magnReading,
    time
}) => {
    return (
        <div>
            <div className="SingleMagnReading">
                <p>Time - {new Date(time * 1000).toDateString()}</p>
                <p>Temperature - {magnReading}° C</p>
            </div>
        </div>
    );
};

export default MagnComp;