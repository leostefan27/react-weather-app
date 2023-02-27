import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formatWeatherCode from "../utils/formatWeatherCode";

const NextDaysComponent = (props) => {
  const data = props.data.daily;

  //   I'm not proud of myself
  const dummyArray = [1, 2, 3, 4, 5, 6];

  return (
    <section className="next-days">
        {dummyArray.map((value, idx) => {
          return (
            <div key={idx} className="day">
              <p className="date">{data.time[value]}</p>
              <FontAwesomeIcon icon={formatWeatherCode(data.weathercode[value])?.icon} />
              <p className="overall">{formatWeatherCode(data.weathercode[value])?.text}</p>
              <p className="temperature">{`${data.temperature_2m_max[value]}°C/${data.temperature_2m_min[value]}°C`}</p>
            </div>
          );
        })}
    </section>
  );
};

export default NextDaysComponent;
