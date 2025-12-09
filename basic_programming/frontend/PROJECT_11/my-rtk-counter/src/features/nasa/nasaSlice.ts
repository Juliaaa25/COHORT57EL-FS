import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { ApodItem } from "./nasaTypes";

const API_KEY = "xwppzGeu0Y2K7c4HwiygcbadIkNbcenhqewyAlCd";

export const fetchNasaPhotos = createAsyncThunk<ApodItem[]>(
  "nasa/fetchNasaPhotos",
  async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=3`
    );
    const data = await response.json();
    return data;
  }
);

interface NasaState {
  items: ApodItem[];
  loading: boolean;
  error: string | null;
}

const initialState: NasaState = {
  items: [],
  loading: false,
  error: null,
};

const nasaSlice = createSlice({
  name: "nasa",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNasaPhotos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNasaPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNasaPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка загрузки NASA фото";
      });
  },
});

export default nasaSlice.reducer;
