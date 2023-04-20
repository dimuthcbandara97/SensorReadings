// import React from "react";
// import './MagnComp.css';

// const MagnComp = ({
//     magnReading,
//     time
// }) => {
//     return (
//         <div>
//             <div className="SingleMagnReading">
//                 <p>Time - {new Date(time * 1000).toDateString()}</p>
//                 <p>Temperature - {magnReading}° C</p>
//             </div>
//         </div>
//     );
// };

// export default MagnComp;
import React from "react";
import './MagnComp.css';

const MagnComp = ({ magnReading, time, sensorID}) => {
    return (
        <div className="MagnTableContainer">
            <table className="MagnTable">
                <thead>
                    <tr>
                        <th>Magnetometer Reading</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p className="MagnTime">Date </p>
                        </td>
                        <td>
                            <p className="MagnReading">{new Date(time * 1000).toDateString()}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="MagnTime"> Magnitude Reading </p>
                        </td>
                        <td>
                            <p className="MagnReading">{magnReading}</p>
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

export default MagnComp;
