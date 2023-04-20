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

const MagnComp = ({ magnReading, time }) => {
    return (
        <div className="MagnTableContainer">
            <table className="MagnTable">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Magnetude</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p className="MagnTime">{new Date(time * 1000).toDateString()}</p>
                        </td>
                        <td>
                            <p className="MagnReading">{magnReading}° C</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MagnComp;
