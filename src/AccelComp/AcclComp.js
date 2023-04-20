import React from "react";
import './AcclComp.css';

const AcclComp = ({
    acclReading,
    time
}) => {
    return (
        <div className="TempTableContainer">
            <table className="TempTable">
                <thead>
                    <tr>
                        <th>Accelerometer Dat</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p className="TempTime">{new Date(time * 1000).toDateString()}</p>
                        </td>
                        <td>
                            <p className="TempReading">{acclReading}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AcclComp;