
import React, {useEffect, useState} from "react";

export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({});
    const API_KEY = process.env.API_KEY;
    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`https://www.weatherapi.com/{API_KEY}`);
                const data = await res.json();
                setWeatherData(data);
            } catch (error) {
                console.error(error);
            }
        }
            getData();
    
    }, []);
    if (!weatherData.list){
        return <p>Loading..</p>
    } else {
        return (
    <p> <strong>
        Temp:</strong>
        {weatherData.list[0].main.temp}
        </p>
);
}
}
