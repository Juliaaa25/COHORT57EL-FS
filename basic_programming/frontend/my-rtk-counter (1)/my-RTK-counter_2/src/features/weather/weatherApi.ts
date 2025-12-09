import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { WeatherResponse } from "./types/types";

const apiKey = "3603bb385cba1812ea388450e7b58c94";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  //   В этот момент RTK Query внутри себя строит объект API, который:
  //  хранит редьюсер
  //  создаёт middleware
  //  готовит кеш
  // генерирует хуки (ВАЖНО!)
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherResponse, string>({
      // RTK Query автоматически создаёт хук с названием:
      // use + название эндпоинта + Query
      // useGetWeatherQuery
      query: (city) => `weather?q=${city}&appid=${apiKey}&units=metric`,
    }),
  }),
});
export const { useGetWeatherQuery } = weatherApi;

// Компонент → dispatch(action) → редьюсер

//   В этот момент RTK Query внутри себя строит объект API, который:
//  хранит редьюсер
//  создаёт middleware
//  готовит кеш
// генерирует хуки (ВАЖНО!)

// RTK Query автоматически создаёт хук с названием:
// use + название эндпоинта + Query
// useGetWeatherQuery
