import styles from "./ForecastItem.module.css";

interface ForecastItemProps {
  date: string;
  temp: number;
  desc: string;
}

export const ForecastItem = ({ date, temp, desc }: ForecastItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.date}>{date}</div>
      <div className={styles.temp}>{temp}°C</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};
