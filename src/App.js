import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import GPSComp from './GPSComp/GPSComp';
import TempComp from './TempComp/TempComp';
import MagnComp from './MagComp/MagnComp';


import './App.css'
import AcclComp from './AccelComp/AcclComp';
import BarGraph from './BarGraph/Bargraph';
//import GoogleMapsIPC from './GooogleMapsIPC/GoogleMapsIPC';
//import Map from './GooogleMapsIPC/GoogleMapsIPC';
import Mapss from './GooogleMapsIPC/GoogleMapsIPC';
import SimpleMap from './GooogleMapsIPC/GoogleMapsIPC';
import MyMapComponent from './GooogleMapsIPC/GoogleMapsIPC';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBKXg5qcyOGcG8GcUiS08_22Qwfkbhd2PE",
    authDomain: "ipcreactproject.firebaseapp.com",
    databaseURL: "https://ipcreactproject-default-rtdb.firebaseio.com",
    projectId: "ipcreactproject",
    storageBucket: "ipcreactproject.appspot.com",
    messagingSenderId: "626917250462",
    appId: "1:626917250462:web:479601a42875852761b28f",
    measurementId: "G-3YSC6EZL4P"
  };

  firebase.initializeApp({
    ...firebaseConfig
  })

  const firestore = firebase.firestore();

  // Temperature settings
  const tempMessagesRef = firestore.collection('TempData');
  // const tempQuery = tempMessagesRef.orderBy('createdAt').limit(3);
  const tempQuery = tempMessagesRef.orderBy('createdAt', 'desc').limit(10);

  const [tempData] = useCollectionData(tempQuery);

  // GPS settings
  const GPSMessagesRef = firestore.collection('GPSData');
  const GPSQuery = GPSMessagesRef.orderBy('createdAt', 'desc').limit(10);
  const [GPSData] = useCollectionData(GPSQuery);

  // Magnetometer settings
  const MagMessagesRef = firestore.collection('MagnitudeData');
  const MagQuery = MagMessagesRef.orderBy('createdAt', 'desc').limit(10);
  const [MagData] = useCollectionData(MagQuery);

  // Accelerometer settings
  //
  const AcclMessagesRef = firestore.collection('AccelerationData');
  const AcclQuery = AcclMessagesRef.orderBy('createdAt', 'desc').limit(10);
  const [AcclData] = useCollectionData(AcclQuery);
  console.log(tempData);
  const lat = 37.7749; // replace with your latitude data
  const lng = -122.4194; // replace with your longitude data
  return (
    <div>
      <h1>Sensor Data</h1>

      {/* <h2>Graphs View</h2> */}
<MyMapComponent/>
        <div className="TempComp">
          {/* <TempComp
            tempReading={dataPoint.Reading}
            time={dataPoint.createdAt.seconds}
          /> */}
          {/* <BarGraph/> */}
          {/* <Mapss lat={lat} lng={lng} /> */}
          {/* < */}
          {/* <SimpleMap/> */}
        </div>

      <h2>GPS sensor</h2>

      {GPSData && GPSData.map(dataPoint =>
        <div className="GPSComp">
          <GPSComp
            time={dataPoint.createdAt.seconds}
            latitude={dataPoint.Reading}
            longitude={dataPoint.longitude}
            deviceID={dataPoint.SensorID}
          />
        </div>

      )}

<h2>Accelerometer Sensor</h2>

{AcclData && AcclData.map(dataPoint =>
  <div className="GPSComp">
    <AcclComp
            acclReading={dataPoint.Reading}
            time={dataPoint.createdAt.seconds}
            sensorID={dataPoint.SensorID}
          />
  </div>

)}

<h2>Magnetometer Sensor</h2>

      {MagData && MagData.map(dataPoint =>
        <div className="GPSComp">
          <MagnComp
            time={dataPoint.createdAt.seconds}
            magnReading={dataPoint.Reading}
            sensorID={dataPoint.SensorID}
          />
        </div>

      )}
    </div>
  );
}

export default App;
