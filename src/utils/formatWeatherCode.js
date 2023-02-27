import {
  faSun,
  faCloud,
  faSmog,
  faCloudRain,
  faSnowflake,
  faCloudBolt,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const formatWeatherCode = (index) => {
  let formattedValue;
  let image;
  let icon;

  if (index === 0) {
    formattedValue = "Clear sky";
    image = "sunny";
    icon = faSun;
  } else if (index === 1 || index === 2 || index === 3) {
    formattedValue = "Cloudy";
    image = "cloudy";
    icon = faCloud;
  } else if (index === 45 || index === 48) {
    formattedValue = "Fog";
    image = "fog";
    icon = faSmog;
  } else if (index === 51 || index === 53 || index === 55) {
    formattedValue = "Drizzle";
    image = "drizzle";
    icon = faCloudRain;
  } else if (index === 56 || index === 57) {
    formattedValue = "Freezing Drizzle";
    image = "drizzle";
    icon = faCloudRain;
  } else if (index === 61 || index === 63 || index === 65) {
    formattedValue = "Rain";
    image = "rain";
    icon = faCloudRain;
  } else if (index === 66 || index === 67) {
    formattedValue = "Freezing Rain";
    image = "rain";
    icon = faCloudRain;
  } else if (index === 71 || index === 73 || index === 75) {
    formattedValue = "Snow Fall";
    image = "snow";
    icon = faSnowflake;
  } else if (index === 77) {
    formattedValue = "Snow Grains";
    image = "snow";
    icon = faSnowflake;
  } else if (index === 80 || index === 81 || index === 82) {
    formattedValue = "Rain Showers";
    image = "rain";
    icon = faCloudRain;
  } else if (index === 85 || index === 86) {
    formattedValue = "Snow Showers";
    image = "snow";
    icon = faSnowflake;
  } else if (index === 95 || index === 96 || index === 99) {
    formattedValue = "Thunderstorm";
    image = "storm";
    icon = faCloudBolt;
  } else {
    formattedValue = "Not Avalaible";
    image = "loading";
    icon = faQuestion;
  }

  const values = { text: formattedValue, image: image, icon: icon };

  return values;
};

export default formatWeatherCode;
