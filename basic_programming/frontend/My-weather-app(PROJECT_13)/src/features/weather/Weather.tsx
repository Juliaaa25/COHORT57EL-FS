import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchWeather, fetchForecast } from "./weatherSlice";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { WeatherCard } from "../../components/WeatherCard/WeatherCard";
import { ForecastList } from "../../components/ForecastList/ForecastList";
import styles from "./Weather.module.css";

export const Weather = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error, forecast } = useAppSelector(
    (state) => state.weather
  );

  const handleSearch = (city: string) => {
    dispatch(fetchWeather(city));
    dispatch(fetchForecast(city));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Weather App</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {data && (
        <>
          <WeatherCard
            city={data.name}
            temp={data.main.temp}
            desc={data.weather[0].description}
          />

          {forecast.length > 0 && <ForecastList forecast={forecast} />}
        </>
      )}

      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        alt="Nature"
        className={styles["nature-image"]}
      />
    </div>
  );
};
