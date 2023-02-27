const formatWeatherCode = (index) => {
  let formattedValue;
  let image;

  if (index === 0) {
    formattedValue = "Clear sky";
    image = "sunny";
  } else if (index === 1 || index === 2 || index === 3) {
    formattedValue = "Cloudy";
    image = "cloudy";
  } else if (index === 45 || index === 48) {
    formattedValue = "Fog";
    image = "fog";
  } else if (index === 51 || index === 53 || index === 55) {
    formattedValue = "Drizzle";
    image = "drizzle";
  } else if (index === 56 || index === 57) {
    formattedValue = "Freezing Drizzle";
    image = "drizzle";
  } else if (index === 61 || index === 63 || index === 65) {
    formattedValue = "Rain";
    image = "rain";
  } else if (index === 66 || index === 67) {
    formattedValue = "Freezing Rain";
    image = "rain";
  } else if (index === 71 || index === 73 || index === 75) {
    formattedValue = "Snow Fall";
    image = "snow";
  } else if (index === 77) {
    formattedValue = "Snow Grains";
    image = "snow";
  } else if (index === 80 || index === 81 || index === 82) {
    formattedValue = "Rain Showers";
    image = "rain";
  } else if (index === 85 || index === 86) {
    formattedValue = "Snow Showers";
    image = "snow";
  } else if (index === 95 || index === 96 || index === 99) {
    formattedValue = "Thunderstorm";
    image = "storm";
  } else {
    formattedValue = "Not Avalaible";
    image = "sunny";
  }

  const values = { text: formattedValue, image: image };

  return values;
};

export default formatWeatherCode;
