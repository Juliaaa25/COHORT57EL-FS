import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "412d1a8b5f8fd80801fe43b8632f3d62";

// Current weather
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error("City not found");
    return await res.json();
  }
);

// 5-day forecast
export const fetchForecast = createAsyncThunk(
  "weather/fetchForecast",
  async (city: string) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error("Forecast not found");

    const json = await res.json();
    const daily = json.list.filter((_: any, index: number) => index % 8 === 0);

    return daily.map((el: any) => ({
      date: el.dt_txt.split(" ")[0],
      temp: el.main.temp,
      desc: el.weather[0].description,
    }));
  }
);

interface WeatherState {
  data: any | null;
  loading: boolean;
  error: string | null;
  forecast: any[];
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  forecast: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching weather";
      })
      .addCase(fetchForecast.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.loading = false;
        state.forecast = action.payload;
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching forecast";
      });
  },
});

export default weatherSlice.reducer;
