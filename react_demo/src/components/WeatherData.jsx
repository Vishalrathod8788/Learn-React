export const WeatherData = ({ data }) => {
  return (
    <div>
      <h2>City : {data.city}</h2>
      <p>Weather : {data.weather}</p>
      <p>Temperature : {data.temperature}</p>
      <p>Condition : {data.condition}</p>
    </div>
  );
};
