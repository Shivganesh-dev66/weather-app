import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const SearchBar = () => {
    const [city, setCity] = useState('');
    const { fetchWeather } = useContext(WeatherContext);

    const handleSearch = (e) => {
        e.preventDefault(); 
        if (city.trim()) { 
            fetchWeather(city);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;



