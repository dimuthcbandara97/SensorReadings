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
  
  const tempMessagesRef = firestore.collection('TempData');
  const tempQuery = tempMessagesRef.orderBy('createdAt').limit(25);
  const [tempData] = useCollectionData(tempQuery);

  const GPSMessagesRef = firestore.collection('GPSData');
  const GPSQuery = GPSMessagesRef.orderBy('createdAt').limit(25);
  const [GPSData] = useCollectionData(GPSQuery);

  console.log(tempData);
  return (
    <div>
      <h1>Sensor Data</h1>
      <h2>Temperature sensor</h2>
      {tempData && tempData.map(dataPoint => <TempComp
        tempReading={dataPoint.Reading}
        time={dataPoint.createdAt.seconds}
      />)}
      <h2>GPS sensor</h2>
      {GPSData && GPSData.map(dataPoint => <GPSComp
        time={dataPoint.createdAt.seconds}
        latitude={dataPoint.latitude}
        longitude={dataPoint.longitude}
      />)}
    </div>
  );
}

export default App;
