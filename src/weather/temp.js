import React, { useState, useEffect } from "react";
import TempInfo from "./main";
import "./style.css";
const WeatherTemp = () => {
  const [searchData, setSearchData] = useState("sukkur");
  const [tempInfo, setTempInfo] = useState({});

  const getTempData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric &appid=dbe2866da91d1440bcbec5089287ffbb`;

      const data = await fetch(url);
      let complete = await data.json();
      //console.log(complete);
      const { temp, humidity, pressure } = complete.main;
      const { main: mood } = complete.weather[0];
      const { name } = complete;
      const { speed } = complete.wind;
      const { country, sunset } = complete.sys;

      const weatherDetail = {
        temp,
        humidity,
        pressure,
        mood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(weatherDetail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTempData();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            className="searchTerm"
            placeholder="....search..."
            autoFocus
            id="search"
            value={searchData}
            onChange={(event) => {
              setSearchData(event.target.value);
            }}
          />
          <button className="searchButton" type="button" onClick={getTempData}>
            Search
          </button>
        </div>
      </div>
      <TempInfo tempInfo={tempInfo} />
    </>
  );
};

export default WeatherTemp;
