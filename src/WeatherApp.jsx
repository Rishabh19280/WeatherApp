import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState(null);

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="weatherApp">

            <div className="appHeader">
                <h1>☁ Weather App</h1>
                <p>Check the current weather of any city</p>
            </div>

            <SearchBox updateInfo={updateInfo} />

            {weatherInfo && (
                <InfoBox info={weatherInfo} />
            )}

        </div>
    );
}