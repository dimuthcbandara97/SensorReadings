

// import React, { useEffect } from "react";
//  import GoogleMapReact from "google-map-react";

//  const MyMapComponent = ({longitude, latitude}) => {
//    useEffect(() => {
//      const loadMap = () => {

//        const myLatLng = { lat: latitude, lng: longitude };

//        const map = new window.google.maps.Map(
//          document.getElementById("map"),
//          {
//            zoom: 15,
//            center: myLatLng,
//          }
//        );

//        new window.google.maps.Marker({
//          position: myLatLng,
//          map: map,
//          title: "Hello World!",
//          icon: {
//            url: "https://img.freepik.com/premium-vector/vector-black-race-car-white-background_231873-5926.jpg?w=2000",
//            scaledSize: new window.google.maps.Size(50, 50),
//          },
//        });
//      };

//      if (window.google && window.google.maps) {
//        // If Google Maps API is already loaded, execute the function
//        loadMap();
//      } else {
//        const YOUR_API_KEY = 'AIzaSyCAKrCxeLTRiCxdOByqM7EUPQQwEmiS4kE'
//        // Otherwise, load the API first and then execute the function
//        const script = document.createElement("script");
//        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCAKrCxeLTRiCxdOByqM7EUPQQwEmiS4kE&callback=initMap`;
//        script.defer = true;
//        script.async = true;
//        script.onload = loadMap;
//        document.head.appendChild(script);
//      }
//    }
   
//    , []);

//    return <div id="map" style={{ height: "100vh" }}></div>;
//  };

//  export default MyMapComponent;

import React, { useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";

const MyMapComponent = ({ longitude, latitude }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const myLatLng = { lat: latitude, lng: longitude };

      const map = new window.google.maps.Map(
        document.getElementById("map"),
        {
          zoom: 15,
          center: myLatLng,
        }
      );

      if (markerRef.current) {
        // If marker exists, update its position
        markerRef.current.setPosition(myLatLng);
      } else {
        // Otherwise, create a new marker
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
        markerRef.current = marker; // Save the marker instance in the ref
      }
    };

    if (window.google && window.google.maps) {
      // If Google Maps API is already loaded, execute the function
      loadMap();
    } else {
      const YOUR_API_KEY = "AIzaSyCAKrCxeLTRiCxdOByqM7EUPQQwEmiS4kE";
      // Otherwise, load the API first and then execute the function
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&callback=initMap`;
      script.defer = true;
      script.async = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    }
  }, [latitude, longitude]);

  return <div id="map" style={{ height: "100vh" }}></div>;
};

export default MyMapComponent;
