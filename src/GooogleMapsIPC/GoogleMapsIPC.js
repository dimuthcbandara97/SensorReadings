
// import React, { useEffect, useRef } from "react";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// const MyMapComponent = () => {
//   const markerRef = useRef(null);

//   const firebaseConfig = {
//     apiKey: "AIzaSyBKXg5qcyOGcG8GcUiS08_22Qwfkbhd2PE",
//     authDomain: "ipcreactproject.firebaseapp.com",
//     databaseURL: "https://ipcreactproject-default-rtdb.firebaseio.com",
//     projectId: "ipcreactproject",
//     storageBucket: "ipcreactproject.appspot.com",
//     messagingSenderId: "626917250462",
//     appId: "1:626917250462:web:479601a42875852761b28f",
//     measurementId: "G-3YSC6EZL4P"
//   };

//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

//   const firestore = firebase.firestore();

//   const GPSMessagesRef = firestore.collection('LocationData');
//   const GPSQuery = GPSMessagesRef.orderBy('sensorId', 'desc').limit(10);
//   const [GPSData] = useCollectionData(GPSQuery);

//   useEffect(() => {
//     const loadMap = () => {
//       const myLatLng = { lat: 7.538473, lng: 80.246704};
//       const map = new window.google.maps.Map(
//         document.getElementById("map"),
//         {
//           zoom: 15,
//           center: myLatLng,
//         }
//       );

//       if (GPSData) {
//         GPSData.forEach(dataPoint => {
//           const marker = new window.google.maps.Marker({
//             position: { lat: dataPoint.latitude, lng: dataPoint.longitude},
//             map: map,
//             title: "Hello World!",
//             icon: {
//               url:
//                 "https://img.freepik.com/premium-vector/vector-black-race-car-white-background_231873-5926.jpg?w=2000",
//               scaledSize: new window.google.maps.Size(50, 50),
//             },
//           });
//           markerRef.current = marker;
//         });
//       }
//     };

//     if (window.google && window.google.maps) {
//       loadMap();
//     } else {
//       const YOUR_API_KEY = "AIzaSyCAKrCxeLTRiCxdOByqM7EUPQQwEmiS4kE";
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&callback=initMap`;
//       script.defer = true;
//       script.async = true;
//       script.onload = loadMap;
//       document.head.appendChild(script);
//     }
//   }, [GPSData]);

//   return <div id="map" style={{ height: "100vh" }}></div>;
// };

// export default MyMapComponent;

// import React, { useEffect, useRef } from "react";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// const MyMapComponent = () => {
//   const markerRef = useRef(null);

//   const firebaseConfig = {
//     apiKey: "AIzaSyBKXg5qcyOGcG8GcUiS08_22Qwfkbhd2PE",
//     authDomain: "ipcreactproject.firebaseapp.com",
//     databaseURL: "https://ipcreactproject-default-rtdb.firebaseio.com",
//     projectId: "ipcreactproject",
//     storageBucket: "ipcreactproject.appspot.com",
//     messagingSenderId: "626917250462",
//     appId: "1:626917250462:web:479601a42875852761b28f",
//     measurementId: "G-3YSC6EZL4P"
//   };

//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

//   const firestore = firebase.firestore();

//   const GPSMessagesRef = firestore.collection('LocationData');
//   const GPSQuery = GPSMessagesRef.orderBy('sensorId', 'desc').limit(10);
//   const [GPSData] = useCollectionData(GPSQuery);

//   useEffect(() => {
//     const loadMap = () => {
//       const map = new window.google.maps.Map(
    
//         GPSData && GPSData.map(dataPoint =>
//           document.getElementById("map"),
//           {
//             zoom: 15,
//              center: { lat: dataPoint.latitude, lng: dataPoint.longitude},
//           }
//         )
        
//       );

//       if (GPSData) {
//         GPSData.forEach(dataPoint => {
//           const myLatLng = { lat: dataPoint.latitude, lng: dataPoint.longitude };
//           const marker = new window.google.maps.Marker({
//             position: myLatLng,
//             map: map,
//             title: "Hello World!",
//             icon: {
//               url:
//                 "https://img.freepik.com/premium-vector/vector-black-race-car-white-background_231873-5926.jpg?w=2000",
//               scaledSize: new window.google.maps.Size(50, 50),
//             },
//           });
//           markerRef.current = marker;
//         });
//       }
//     };

//     if (window.google && window.google.maps) {
//       loadMap();
//     } else {
//       const YOUR_API_KEY = "AIzaSyCAKrCxeLTRiCxdOByqM7EUPQQwEmiS4kE";
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&callback=initMap`;
//       script.defer = true;
//       script.async = true;
//       script.onload = loadMap;
//       document.head.appendChild(script);
//     }
//   }, [GPSData]);

//   return <div id="map" style={{ height: "100vh" }}></div>;
// };

// export default MyMapComponent;


import React, { useEffect, useRef } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const MyMapComponent = () => {
  const markerRef = useRef(null);

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

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const firestore = firebase.firestore();

  const GPSMessagesRef = firestore.collection('LocationData');
  const GPSQuery = GPSMessagesRef.orderBy('sensorId', 'desc').limit(10);
  const [GPSData] = useCollectionData(GPSQuery);

  useEffect(() => {
    const loadMap = () => {
      if (GPSData) {
        const map = new window.google.maps.Map(
          document.getElementById("map"),
          {
            zoom: 15,
            center: { lat: GPSData[0].latitude, lng: GPSData[0].longitude},
          }
        );

        GPSData.forEach(dataPoint => {
          const myLatLng = { lat: dataPoint.latitude, lng: dataPoint.longitude };
          const marker = new window.google.maps.Marker({
            position: myLatLng,
            map: map,
            title: "Hello World!",
            icon: {
              url:
                "https://img.freepik.com/premium-vector/vector-black-race-car-white-background_231873-5926.jpg?w=2000",
              scaledSize: new window.google.maps.Size(50, 50),
            },
          });
          markerRef.current = marker;
        });
      }
    };

    if (window.google && window.google.maps) {
      loadMap();
    } else {
      const YOUR_API_KEY = "AIzaSyCAKrCxeLTRiCxdOByqM7EUPQQwEmiS4kE";
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&callback=initMap`;
      script.defer = true;
      script.async = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    }
  }, [GPSData]);

  return <div id="map" style={{ height: "100vh" }}></div>;
};

export default MyMapComponent;

