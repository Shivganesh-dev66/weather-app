import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [unit, setUnit] = useState('C'); // Default unit is Celsius
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch user's current location
    const fetchUserLocation = () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        resolve(`${latitude},${longitude}`);
                    },
                    (error) => {
                        reject('Unable to retrieve your location.');
                    }
                );
            } else {
                reject('Geolocation is not supported by your browser.');
            }
        });
    };

    const fetchWeather = async (location) => {
        setLoading(true);
        setError(null);
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const response = await axios.get(`http://localhost:5000/weather?location=${location}`);
            setWeatherData(response.data);
        } catch (err) {
            setError('Failed to fetch weather data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
    };

    useEffect(() => {
        fetchUserLocation()
            .then((location) => fetchWeather(location))
            .catch((err) => setError(err));
    }, []);

    return (
        <WeatherContext.Provider
            value={{
                weatherData,
                unit,
                toggleUnit,
                fetchWeather,
                loading,
                error,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};
