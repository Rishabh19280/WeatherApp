import './WeatherDetail.css'
export default function WeatherDetail({ icon, title, value }) {
    return (
        <div className="detailBox">
            <div className="detailIcon">{icon}</div>

            <p className="detailTitle">
                {title}
            </p>

            <p className="detailValue">
                {value}
            </p>
        </div>
    );
}