import React from "react";
import './GPSComp.css';

const GPSComp = ({
    latitude,
    longitude,
    time
}) => {
    return (
        <div>
            <div className="SingleGPSReading">
                <p>Time - {new Date(time * 1000).toDateString()}</p>
                <p>Latitude  - {latitude}° N</p>
                <p>Longitude  - {longitude}° E</p>
            </div>
        </div>
    );
};

export default GPSComp;