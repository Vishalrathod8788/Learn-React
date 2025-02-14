import { WeatherData } from "./WeatherData";
export const Weather = () => {
  const weather = {
    city: "Seoul",
    weather: "Rainy",
    temperature: 10,
    condition: "sunny",
  };
  return (
    <div>
      <h1>Weather App</h1>
      <WeatherData data={weather} />
    </div>
  );
};
