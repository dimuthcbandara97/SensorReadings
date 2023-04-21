import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import GPSComp from './GPSComp/GPSComp';



import './App.css'
import AcclComp from './AccelComp/AcclComp';
import BarGraph from './BarGraph/Bargraph';


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


  // GPS settings
  const GPSMessagesRef = firestore.collection('LocationData');
  const GPSQuery = GPSMessagesRef.orderBy('sensorId', 'desc').limit(10);
  const [GPSData] = useCollectionData(GPSQuery);
  console.log(GPSData)

  const lat = 37.7749; // replace with your latitude data
  const lng = -122.4194; // replace with your longitude data
  return (
    <div>
      <h1>Sensor Data</h1>

      {/* <h2>Graphs View</h2> */}
<MyMapComponent/>
       

      <h2>GPS sensor</h2>

      {GPSData && GPSData.map(dataPoint =>
        <div className="GPSComp">
          <GPSComp
            time={dataPoint.course}
            latitude={dataPoint.latitude}
            longitude={dataPoint.longitude}
            deviceID={dataPoint.sensorId}
            speed={dataPoint.speed}
          />
        </div>
      )}




    </div>
  );
}

export default App;
