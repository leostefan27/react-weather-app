import axios from "axios";

const getWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum,precipitation_probability_max,windspeed_10m_max&timezone=auto`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getWeatherData;
