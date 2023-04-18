import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import GPSComp from './GPSComp/GPSComp';
import TempComp from './TempComp/TempComp';
import './App.css'

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
  const tempQuery = tempMessagesRef.orderBy('createdAt').limit(3);
  const [tempData] = useCollectionData(tempQuery);

  // GPS settings
  const GPSMessagesRef = firestore.collection('GPSData');
  const GPSQuery = GPSMessagesRef.orderBy('createdAt').limit(3);
  const [GPSData] = useCollectionData(GPSQuery);

  // Magnetometer settings
  const MagMessagesRef = firestore.collection('MagnitudeData');
  const MagQuery = GPSMessagesRef.orderBy('createdAt').limit(3);
  const [MagData] = useCollectionData(MagQuery);

  // Accelerometer settings
  //
  const AcclMessagesRef = firestore.collection('AccelerationData');
  const AcclQuery = GPSMessagesRef.orderBy('createdAt').limit(3);
  const [AcclData] = useCollectionData(AcclQuery);
  console.log(tempData);
  return (
    <div>
      <h1>Sensor Data</h1>
      
      <h2>Temperature sensor</h2>

      {tempData && tempData.map(dataPoint => 
      <div className="TempComp">
  <TempComp
    tempReading={dataPoint.Reading}
    time={dataPoint.createdAt.seconds}
  />
</div>

)}

      <h2>GPS sensor</h2>
      
      {GPSData && GPSData.map(dataPoint =>
       <div className="GPSComp">
        <GPSComp
        time={dataPoint.createdAt.seconds}
        latitude={dataPoint.Reading}
        longitude={dataPoint.longitude}
      />
       </div>
      
      )}
    </div>
  );
}

export default App;
