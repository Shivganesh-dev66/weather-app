import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import './WeatherDisplay.css'; 

const WeatherDisplay = () => {
    const { weatherData, unit } = useContext(WeatherContext);

    if (!weatherData) return null;

    const { current, location } = weatherData;
    const temperature = unit === 'C' ? current.temp_c : current.temp_f;

    return (
        <div className="weather-dashboard">
            <h2>{location.name}, {location.country}</h2>
            <div className="weather-details">
                <div className="weather-icon">
                    <img src={current.condition.icon} alt={current.condition.text} />
                    <p>{current.condition.text}</p>
                </div>
                <div className="weather-stats">
                    <p><strong>Temperature:</strong> {temperature}°{unit}</p>
                    <p><strong>Humidity:</strong> {current.humidity}%</p>
                    <p><strong>Wind Speed:</strong> {current.wind_kph} km/h</p>
                    <p><strong>Feels Like:</strong> {unit === 'C' ? current.feelslike_c : current.feelslike_f}°{unit}</p>
                    <p><strong>UV Index:</strong> {current.uv}</p>
                </div>
            </div>
        </div>
    );
};                                                  

export default WeatherDisplay;

