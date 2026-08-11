import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import './InfoBox.css'

export default function InfoBox({ info }) {

    const THUNDERSTORM_URL = "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fHww";

    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const SNOW_URL = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vdyUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const CLOUD_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const FOG_URL = "https://media.istockphoto.com/id/1163968623/photo/commuters-cars-drive-through-fog-on-city-street-at-twilight.webp?a=1&b=1&s=612x612&w=0&k=20&c=jZ-pm1LeQYJdRsrhW7mEaguTrmAwKE7k4Zo81r8_Qp4=";

    const HAZE_URL = "https://images.unsplash.com/photo-1599059021750-82716ae2b661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF6ZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const CLEAR_URL = "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const DEFAULT_URL = CLEAR_URL;

    const weather = info.weather.toLowerCase();

    let weatherImage;

    if (weather.includes("thunderstorm")) {
        weatherImage = THUNDERSTORM_URL;
    }
    else if (weather.includes("rain")) {
        weatherImage = RAIN_URL;
    }
    else if (weather.includes("snow")) {
        weatherImage = SNOW_URL;
    }
    else if (weather.includes("cloud")) {
        weatherImage = CLOUD_URL;
    }
    else if (weather.includes("mist") || weather.includes("fog")) {
        weatherImage = FOG_URL;
    }
    else if (weather.includes("haze")) {
        weatherImage = HAZE_URL;
    }
    else if (weather.includes("clear")) {
        weatherImage = CLEAR_URL;
    }
    else if (info.temp > 30) {
        weatherImage = HOT_URL;
    }
    else {
        weatherImage = DEFAULT_URL;
    }

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card className="weatherCard">
                    <CardMedia
                        className="weatherImage"
                        image={weatherImage}
                    />
                    <CardContent className="weatherContent">
                        <div className="location">
                            <div>
                                <h2>{info.city}</h2>

                                <p className="weatherDescription">
                                    {info.weather}
                                </p>
                            </div>

                            
                        </div>

                        <div className="temperature">
                            {info.temp}°C
                        </div>

                        <p className="feelsLike">
                            Feels like {info.feelsLike}°C
                        </p>

                        <div className="weatherDetails">

                            <div className="detailBox">
                                <div className="detailIcon">💧</div>
                                <p className="detailTitle">Humidity</p>
                                <p className="detailValue">
                                    {info.humidity}%
                                </p>
                            </div>

                            <div className="detailBox">
                                <div className="detailIcon">🌡️</div>
                                <p className="detailTitle">Min Temp</p>
                                <p className="detailValue">
                                    {info.tempMin}°C
                                </p>
                            </div>

                            <div className="detailBox">
                                <div className="detailIcon">🌡️</div>
                                <p className="detailTitle">Max Temp</p>
                                <p className="detailValue">
                                    {info.tempMax}°C
                                </p>
                            </div>

                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}