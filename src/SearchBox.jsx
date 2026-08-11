import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState, useEffect } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "95d918a844c7f4d1bb6b2e7fee7317c9";

    useEffect(() => {
        const loadDefaultWeather = async () => {
            try {
                let response = await fetch(
                    `${API_URL}?q=Delhi&appid=${API_KEY}&units=metric`
                );

                if (!response.ok) {
                    throw new Error("City not found");
                }

                let jsonResponse = await response.json();

                let result = {
                    city: jsonResponse.name,
                    temp: jsonResponse.main.temp,
                    tempMin: jsonResponse.main.temp_min,
                    tempMax: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelsLike: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].description,
                };

                updateInfo(result);

            } catch (err) {
                console.log(err);
            }
        };

        loadDefaultWeather();

    }, []);
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );

            let jsonResponse = await response.json();

            if (!response.ok) {
                throw new Error("City not found");
            }

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            return result;

        } catch (err) {
            throw err;
        }
    };
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {

            let newInfo = await getWeatherInfo();
            setError(false);
            updateInfo(newInfo);
            setCity("");

        } catch (err) {
            setError(true);
        }
    };


    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit} autoComplete="off">

                <TextField
                    id="city-search"
                    name="city-search"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    autoComplete="new-password"
                />

                <Button
                    variant="contained"
                    type="submit"
                >
                    Search
                </Button>

                {error && (
                    <p style={{ color: 'red' }}>
                        No such place exists!
                    </p>
                )}

            </form>

        </div>
    );
}