// import React from "react";
// import './TempComp.css';

// const TempComp = ({
//     tempReading,
//     time
// }) => {
//     return (
//         <div>
//             <div className="SingleTempReading">
//                 <p>Time - {new Date(time * 1000).toDateString()}</p>
//                 <p>Temperature - {tempReading}° C</p>
//             </div>
//         </div>
//     );
// };

// export default TempComp;
import React from "react";
import './TempComp.css';

const TempComp = ({ tempReading, time }) => {
    return (
        <div className="TempTableContainer">
            <table className="TempTable">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Temperature</th>
                        <th> Device Used </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p className="TempTime">{new Date(time * 1000).toDateString()}</p>
                        </td>
                        <td>
                            <p className="TempReading">{tempReading}° C</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TempComp;
