import { useEffect, useState } from "react";

const DistanceCalculator = ({ eventLat, eventLng }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          localStorage.setItem("userLocation", JSON.stringify(userLoc));
          setUserLocation(userLoc);
          calculateDistance(userLoc.latitude, userLoc.longitude);
        },
        (error) => {
          console.error("Error fetching user location:", error);
        }
      );
    };

    let storedLocation = localStorage.getItem("userLocation");

    if (storedLocation) {
      storedLocation = JSON.parse(storedLocation);
      setUserLocation(storedLocation);
      calculateDistance(storedLocation.latitude, storedLocation.longitude);
    } else {
      getUserLocation(); // ✅ Always ask for location if not stored
    }
  }, []);

  const calculateDistance = (lat1, lon1) => {
    if (!eventLat || !eventLng || !lat1 || !lon1) return;

    const R = 6371; // Earth radius in km
    const dLat = (eventLat - lat1) * (Math.PI / 180);
    const dLon = (eventLng - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(eventLat * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceKm = R * c;
    setDistance(distanceKm.toFixed(2));
  };

  return <p>{distance ? ` ${distance} km away` : "Fetching location..."}</p>;
};

export default DistanceCalculator;
