import React from "react";
import './AcclComp.css';

const AcclComp = ({
    acclReading,
    time,
    sensorID
}) => {
    return (
        <div className="TempTableContainer">
            <table className="TempTable">
                <thead>
                    <tr>
                        <th>Accelerometer Data</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p className="TempTime">Time</p>
                        </td>
                        <td>
                            <p className="TempReading">{new Date(time * 1000).toDateString()}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="TempTime">Accelerometer Reading</p>
                        </td>
                        <td>
                            <p className="TempReading">{acclReading}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="MagnTime"> Sensor ID / Name </p>
                        </td>
                        <td>
                            <p className="MagnReading">{sensorID}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AcclComp;