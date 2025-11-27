import { ForecastItem } from "../ForecastItem/ForecastItem";
import styles from "./ForecastList.module.css";

interface ForecastListProps {
  forecast: {
    date: string;
    temp: number;
    desc: string;
  }[];
}

export const ForecastList = ({ forecast }: ForecastListProps) => {
  return (
    <div className={styles.list}>
      {forecast.map((item, i) => (
        <ForecastItem
          key={i}
          date={item.date}
          temp={item.temp}
          desc={item.desc}
        />
      ))}
    </div>
  );
};
