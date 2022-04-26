import React from "react";
const TempInfo = ({ tempInfo }) => {
  const [weathermood, setWeatherMood] = React.useState("");
  const { temp, humidity, pressure, mood, name, speed, country, sunset } =
    tempInfo;
  let sec = sunset;
  let d = new Date(sec * 1000);
  let time = `${d.getHours()}:${d.getMinutes()}`;
  React.useEffect(() => {
    if (mood) {
      switch (mood) {
        case "Clouds":
          setWeatherMood("wi-day-cloudy");
          break;
        case "Haze" || "Smoke":
          setWeatherMood("wi-fog");
          break;
        case "Sunny":
          setWeatherMood("wi-day-sunny");
          break;
        case "Rain":
          setWeatherMood("wi-day-rain");
          break;

        default:
          setWeatherMood("wi-day-sunny");
          break;
      }
    }
  }, [mood]);
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weathermood}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{mood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p className="extra-infor-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>
            <div className="two-sided-section">
              <p className="extra-infor-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p className="extra-infor-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
            <div className="two-sided-section">
              <p className="extra-infor-leftside">
                {time}
                <br />
                Sunset
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default TempInfo;
