export const IcardData = ({ data }) => {
  const { rollNumber, firstName, lastName, age, grade, isPresent } = data;
  return (
    <>
      <li>
        <p>Roll No. : {rollNumber}</p>
        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Age : {age}</p>
        <p>Grade : {grade}</p>
        <p>IsPresent : {isPresent}</p>
      </li>
    </>
  );
};
