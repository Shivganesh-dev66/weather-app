import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const Loader = () => {
    const { loading } = useContext(WeatherContext);

    if (!loading) return null;

    return (
        <div className="loader">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default Loader;

