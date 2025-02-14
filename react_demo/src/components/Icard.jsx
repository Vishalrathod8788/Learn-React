import studentData from "../api/studentData.json";
import { IcardData } from "./IcardData";

export const Icard = () => {
  return (
    <ul>
      {studentData.map((student) => {
        return <IcardData key={student.id} data={student} />;
      })}
    </ul>
  );
};
