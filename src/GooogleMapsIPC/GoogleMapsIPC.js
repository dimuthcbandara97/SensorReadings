
import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";

const MyMapComponent = ({latitude,longitude}) => {
  useEffect(() => {
    const loadMap = () => {
      
      // const myLatLng = { lat: 7.538460, lng: 80.246737 };

      const myLatLng = { lat: latitude, lng: longitude };

      const map = new window.google.maps.Map(
        document.getElementById("map"),
        {
          zoom: 15,
          center: myLatLng,
        }
      );

      new window.google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello World!",
        icon: {
          url: "https://img.freepik.com/premium-vector/vector-black-race-car-white-background_231873-5926.jpg?w=2000",
          scaledSize: new window.google.maps.Size(50, 50),
        },
      });
    };

    if (window.google && window.google.maps) {
      // If Google Maps API is already loaded, execute the function
      loadMap();
    } else {
      const YOUR_API_KEY = 'AIzaSyCAKrCxeLTRiCxdOByqM7EUPQQwEmiS4kE'
      // Otherwise, load the API first and then execute the function
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCAKrCxeLTRiCxdOByqM7EUPQQwEmiS4kE&callback=initMap`;
      script.defer = true;
      script.async = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    }
  }, []);

  return <div id="map" style={{ height: "100vh" }}></div>;
};

export default MyMapComponent;