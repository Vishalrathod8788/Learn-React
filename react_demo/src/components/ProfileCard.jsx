import PersonalData from "../api/profileData.json";
import { PersonalCard } from "./PersonalCard";

export const ProfilesCard = () => {
  return (
    <>
      <ul>
        {PersonalData.map((curEle) => {
          return <PersonalCard key={curEle.id} data={curEle} />;
        })}
      </ul>
    </>
  );
};
