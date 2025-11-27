import styles from "./WeatherCard.module.css";

interface WeatherCardProps {
  city: string;
  temp: number;
  desc: string;
}

export const WeatherCard = ({ city, temp, desc }: WeatherCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.city}>{city}</div>
      <div className={styles.temp}>{temp}°C</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};
