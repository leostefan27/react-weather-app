import axios from "axios";

const searchCity = async (q) => {
  try {
    const response = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${q}&count=3`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default searchCity;
