import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const ErrorMessage = () => {
    const { error } = useContext(WeatherContext);
    return error ? <div className="error-message">{error}</div> : null;
};

export default ErrorMessage;