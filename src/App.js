import { useEffect, useState } from "react";
import getUserLocation from "./utils/getUserLocation";
import getWeatherData from "./utils/getWeatherData";
import searchCity from "./utils/searchCity";
import formatUVIndex from "./utils/formatUVIndex";
import formatWeatherCode from "./utils/formatWeatherCode";
import reverseGeocode from "./utils/reverseGeocoding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloudRain, faWind } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [weatherData, setWeatherData] = useState(undefined);
  const [query, setQuery] = useState("");
  const [cityList, setCityList] = useState([]);
  const [region, setRegion] = useState(undefined);
  const [selectedRegion, setSelectedRegion] = useState(undefined);

  // QUERY city list
  const fetchCity = async () => {
    try {
      if (query.length > 1) {
        const cities = await searchCity(query);
        if (cities.results) {
          setCityList(cities.results);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCity();
  }, [query]);

  // GET weather data from the API
  const fetchWeatherData = async () => {
    try {
      const location = await getUserLocation();
      if (selectedRegion) {
        const data = await getWeatherData(region.lat, region.lon);
        setWeatherData(data);
        return;
      }
      const data = await getWeatherData(location.lat, location.lon);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRegionData = async () => {
    try {
      const location = await getUserLocation();
      if (selectedRegion) {
        const regionData = await reverseGeocode(
          selectedRegion.lat,
          selectedRegion.lon
        );
        if (regionData && regionData.results && regionData.results.length > 0) {
          setRegion(regionData.results[0]);
        }
        return;
      }

      if (!selectedRegion) {
        const regionData = await reverseGeocode(location.lat, location.lon);
        if (regionData && regionData.results && regionData.results.length > 0) {
          setRegion(regionData.results[0]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRegionData();
    fetchWeatherData();
  }, [selectedRegion]);

  return (
    <main
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/${
          formatWeatherCode(weatherData?.daily.weathercode[0])?.image
        }.webp)`,
      }}
    >
      {weatherData && region && (
        <div className="dark-tint">
          <div className="container">
            <div className="searchCity">
              <input
                type="text"
                placeholder="Search for a city..."
                onChange={(e) => setQuery(e.target.value)}
              />
              {cityList.length > 0 && query.length > 0 && (
                <ul>
                  {cityList.map((city) => {
                    return (
                      <li
                        key={city.id}
                        onClick={() => {
                          setRegion({
                            lat: city.latitude,
                            lon: city.longitude,
                            area: city.name,
                            country: city.country_code,
                          });
                          setSelectedRegion(city);
                          setCityList(0);
                        }}
                      >{`${city.name}, ${city.country_code}`}</li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="forecast-info">
              <div className="today-forecast">
                <p className="city">{`${region.area}, ${region.country}`}</p>
                <h1 className="overall">
                  {formatWeatherCode(weatherData?.daily.weathercode[0])?.text}
                </h1>
                <h1 className="temperature">{`${weatherData?.daily.temperature_2m_max[0]}°C/${weatherData?.daily.temperature_2m_min[0]}°C`}</h1>
                <div className="other-info">
                  <div className="info-box">
                    <FontAwesomeIcon icon={faSun} />
                    <p>{`UV Index: ${formatUVIndex(
                      weatherData?.daily.uv_index_max[0]
                    )}(${weatherData?.daily.uv_index_max[0]})`}</p>
                  </div>

                  <div className="info-box">
                    <FontAwesomeIcon icon={faCloudRain} />
                    <p>{`Precipitations: ${weatherData?.daily.precipitation_sum[0]} litre of water per square meter`}</p>
                  </div>

                  <div className="info-box">
                    <FontAwesomeIcon icon={faWind} />
                    <p>{`Wind speed: ${weatherData?.daily.windspeed_10m_max[0]} km/h`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
