// src/features/weather/WeatherApp.tsx

import React, { useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchWeather, resetWeatherState, type WeatherData } from "./weatherSlice";
import styles from "./WeatherApp.module.css";




const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const dispatch = useAppDispatch();
  
  const { data: weatherData, loading, error } = useAppSelector(
    (state) => state.weather
  );

  const handleSearch = useCallback(() => {
    if (!city.trim()) {
      alert("Пожалуйста, введите название города.");
      return;
    }
    
    dispatch(resetWeatherState());
    
    dispatch(fetchWeather(city));

  }, [city, dispatch]);

  const renderWeatherCard = (data: WeatherData) => {
    const { 
      name, 
      sys: { country }, 
      main: { temp, feels_like, humidity }, 
      weather: [{ description,}], 
      wind: { speed } 
    } = data;
    

    return (
      <div className="bg-white/85 rounded-2xl p-8 mt-4 shadow-xl text-center">
        <h2 className="text-3xl font-semibold mb-2 text-gray-800">
          {name}, {country}
        </h2>
        
        <div className="text-7xl font-bold my-4 text-gray-800 leading-none">
          {Math.round(temp)}&deg;C
        </div>
        
        <div className="bg-gray-800/10 p-3 rounded-xl my-4 text-lg text-gray-800 font-medium">
          FEELS LIKE: <span className="font-semibold">{Math.round(feels_like)}&deg;C</span>
        </div>
        
        
        <p className="text-xl mb-6 text-gray-700 font-medium capitalize">
          {description}
        </p>
        
        <div className="flex justify-between flex-wrap gap-4">
          <div className="flex-1 min-w-[45%] bg-gray-100/70 p-4 rounded-xl text-gray-800">
            <div className="font-semibold mb-1 text-sm text-gray-500">HUMIDITY</div>
            <div className="text-xl font-bold">{humidity}%</div>
          </div>
          <div className="flex-1 min-w-[45%] bg-gray-100/70 p-4 rounded-xl text-gray-800">
            <div className="font-semibold mb-1 text-sm text-gray-500">WIND</div>
            <div className="text-xl font-bold">{speed} m/s</div>
          </div>
        </div>
      </div>
    );
  };

  const renderErrorCard = (error: { code: string; message: string }) => {
    return (
      <div className="bg-red-600/85 text-white p-8 rounded-2xl mt-4 shadow-xl">
        <div className="text-2xl mb-2 font-semibold">API Error ({error.code})</div>
        <div className="text-lg font-medium">
          {error.message}
        </div>
      </div>
    );
  };
  
  return (
    <div className={`min-h-screen flex justify-center items-center p-5 ${styles.container}`}> 
      <div className={`bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-lg p-8 text-center border border-white/20 `}>
        
        <h1 className="text-white text-4xl font-semibold mb-8 drop-shadow-md">
          Weather App
        </h1>
        
        <div className="flex mb-8 h-12">
          <input 
            type="text"
            className="flex-1 p-3 rounded-l-3xl border-none outline-none text-base bg-white/85 shadow-md placeholder-gray-500"
            placeholder="Введите город"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={loading} 
          />
          <button
            className="px-6 rounded-r-3xl bg-[#2c5364] text-white text-base font-medium transition-colors duration-300 shadow-md 
                       disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-[#203a43]"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? "Loading..." : "Search"} 
          </button>
        </div>
        
        {loading && (
            <div className="text-white text-xl font-medium my-4">
                Loading...
            </div>
        )}
        
        
        {weatherData && !loading && renderWeatherCard(weatherData)}
        {error && !loading && renderErrorCard(error)}

      </div>
    </div>
  );
};

export default WeatherApp;