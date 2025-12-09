// src/features/weather/weatherSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../../app/store";
import type { WeatherResponse } from "./types/types";


interface WeatherState {
  data: WeatherResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

const apiKey = "3603bb385cba1812ea388450e7b58c94";

export const fetchWeather = createAsyncThunk<
  WeatherResponse,      // тип успешного результата
  string,               // аргумент thunk (city)
  { rejectValue: string } // тип ошибки
>(
  "weather/fetchWeather",
  async (city, { rejectWithValue }) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await axios.get<WeatherResponse>(url);
      return response.data;
    } catch {
      return rejectWithValue("Город не найден");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // ✔ типизировано
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Ошибка";
      });
  },
});

export const selectWeather = (state: RootState) => state.weather;

export default weatherSlice.reducer;
