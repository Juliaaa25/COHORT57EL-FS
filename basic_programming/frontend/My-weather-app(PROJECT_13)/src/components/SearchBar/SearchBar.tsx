import { useState } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) onSearch(city.trim());
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        value={city}
        placeholder="Enter a city..."
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button className={styles.button} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
