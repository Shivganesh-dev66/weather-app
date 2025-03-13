import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const MainContent = () => {
    const { toggleUnit, unit } = useContext(WeatherContext);

    return (
        <div className="App">
            <h1>Weather App</h1>
            <button onClick={toggleUnit} className="unit-toggle">
                Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
            </button>
            <div className="component-container">
                <SearchBar />
            </div>
            <div className="component-container">
                <ErrorMessage />
            </div>
            <div className="component-container">
                <Loader />
            </div>
            <div className="component-container">
                <WeatherDisplay />
            </div>
        </div>
    );
};

export default MainContent;