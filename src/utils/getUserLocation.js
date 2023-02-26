const getUserLocation = async () => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
      .then((position) => {
        const location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        return location;
      })
      .catch((error) => {
        throw error;
      });
  } else {
    throw new Error("Geolocation is not supported by this browser.");
  }
};

export default getUserLocation;
