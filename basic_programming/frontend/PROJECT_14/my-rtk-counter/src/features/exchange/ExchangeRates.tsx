// ExchangeRates.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setBase } from "./exchangeSlice";
import { useGetRatesQuery } from "./exchangeApi";

const CURRENCIES = ["USD", "EUR", "GBP", "CHF", "JPY"];

export default function ExchangeRates() {
  const dispatch = useAppDispatch();
  const base = useAppSelector((state) => state.exchange.base);

  const { data, error, isLoading } = useGetRatesQuery(base);

  const handleBaseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBase(e.target.value));
  };

  const rates = data?.conversion_rates || {};

  return (
    <div style={{ padding: 20 }}>
      <h1>Курсы валют (RTK Query + Redux Persist)</h1>

      {/* Выбор базовой валюты */}
      <label>
        Базовая валюта:
        <select
          value={base}
          onChange={handleBaseChange}
          style={{ marginLeft: 10 }}
        >
          {CURRENCIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      {/* Загрузка и ошибки */}
      {isLoading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>Ошибка загрузки данных</p>}

      {/* Основная таблица курсов */}
      {!isLoading && !error && data && (
        <div style={{ marginTop: 20 }}>
          <p>
            <strong>Последнее обновление:</strong> {data.time_last_update_utc}
          </p>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: 10,
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Базовая валюта
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Валюта
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>Курс</th>
              </tr>
            </thead>
            <tbody>
              {CURRENCIES.filter((c) => c !== base).map((currency) => (
                <tr key={currency}>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {base}
                  </td>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {currency}
                  </td>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {rates[currency]?.toFixed(2) ?? "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!isLoading && !error && Object.keys(rates).length === 0 && (
        <p>Нет данных для отображения.</p>
      )}
    </div>
  );
}
