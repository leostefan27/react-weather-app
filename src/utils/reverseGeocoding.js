import axios from "axios";

const reverseGeocode = async (lat, lon) => {
  try {
    const response = await axios.get(
      "https://trueway-geocoding.p.rapidapi.com/ReverseGeocode",
      {
        params: {
          location: `${lat},${lon}`,
          language: "en",
        },
        headers: {
          "X-RapidAPI-Key":
            "c1acec8208msh3cfecb523fdf214p1ca7e6jsnf837b3a344a5",
          "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default reverseGeocode;
