import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curEle) => {
        return <SeriesCard key={curEle.id} data={curEle} />;
      })}
    </ul>
  );
};
