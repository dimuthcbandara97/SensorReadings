// import React from "react";
// import './GPSComp.css';

// const GPSComp = ({
//     latitude,
//     longitude,
//     time
// }) => {
//     return (
//         <div>
//             <div className="SingleGPSReading">
//                 <p>Time - {new Date(time * 1000).toDateString()}</p>
//                 <p>Latitude  - {latitude}° N</p>
//                 <p>Longitude  - {longitude}° E</p>
//             </div>
//         </div>
//     );
// };

// export default GPSComp;
import React from "react";
import './GPSComp.css';

const GPSComp = ({
    latitude,
    longitude,
    time,
    deviceID
}) => {
    return (
        <div className="TempTableContainer">
            <table className="TempTable">
                <thead>
                    <tr>
                        <th>Location Data</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Time</td>
                        <td>
                            <p className="TempTime">{new Date(time * 1000).toDateString()}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Latitude</td>
                        <td>
                            <p className="TempReading">{latitude}° N</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Longitude</td>
                        <td>
                            <p className="TempReading">{longitude}° E</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Sensor Name / ID : </td>
                        <td>
                            <p className="TempReading">{deviceID}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GPSComp;

//In this modified code, the <table> tag is used to create a table. Inside the <table> tag, a <thead> tag is added to contain the table header row. The header row has two cells created using the <th> tag. The table body is created using the <tbody> tag. The table has three rows, one for the time, one for the latitude, and one for the longitude, and each row has two cells, one for the label and one for the value. The labels are displayed inside <td> tags, and the values are displayed inside <p> tags with className "TempTime" and "TempReading" respectively, similar to the TempComp code.



