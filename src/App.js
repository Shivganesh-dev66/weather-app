import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
    return (
        <WeatherProvider>
            <MainContent />
        </WeatherProvider>
    );
};

export default App;
