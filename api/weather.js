const axios = require('axios');

module.exports = async (req, res) => {
    const { location } = req.query;
    const apiKey = process.env.REACT_APP_API_KEY; 
    console.log("API Key:", process.env.REACT_APP_API_KEY);
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};
