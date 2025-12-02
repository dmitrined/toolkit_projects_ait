
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: { code: string; message: string } | null;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "1c20103ae7c6c0c1b59aab4ebc2647ef";
const UNITS = "metric";

export const fetchWeather = createAsyncThunk<
  WeatherData,
  string,
  { rejectValue: { code: string; message: string } }
>(
  "weather/fetchWeather",
  async (city: string, { rejectWithValue }) => {

    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=${UNITS}&lang=ru`;

    const res = await fetch(url);

    if (!res.ok) {
      const errorData = await res.json();
      return rejectWithValue({
        code: `${res.status}`,
        message: errorData.message || `Ошибка HTTP: ${res.status}`,
      });
    }

    return await res.json() as WeatherData;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    resetWeatherState: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || {
          code: "Error",
          message: action.error.message || "Неизвестная ошибка загрузки данных",
        };
      });
  },
});

export const { resetWeatherState } = weatherSlice.actions;
export default weatherSlice.reducer;