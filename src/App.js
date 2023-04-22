import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import GPSComp from './GPSComp/GPSComp';

import './App.css'


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
  const GPSQuery = GPSMessagesRef.orderBy('sensorId', 'desc').limit(20);
  const GPSQuery2 = GPSMessagesRef.orderBy('sensorId', 'desc').limit(1);
  const [GPSData] = useCollectionData(GPSQuery);
  const [GPSData2] = useCollectionData(GPSQuery2);
  // console.log(GPSData)
  console.log(GPSData2)
 
  return (
    <div>
      <h1>Sensor Data</h1>

        {GPSData2 && GPSData2.map(dataPoint2 =>
    
        <MyMapComponent  longitude={parseFloat(dataPoint2.longitude)} latitude={parseFloat(dataPoint2.latitude)} />
      )}

      {/* <GMap/> */}

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
