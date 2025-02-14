import React, { useState } from "react";
const user = [
  { name: "John", age: 25 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 25 },
  { name: "Smith", age: 25 },
  { name: "Alex", age: 28 },
];

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Doe", age: 30 },
    { name: "Smith", age: 35 },
    { name: "Alex", age: 28 },
  ]);

  const filter = users.filter((user) => user.age > 25);

  const userCount = users.length;

  const averageAge =
    users.reduce((accum, user) => accum + user.age, 0) / userCount;

  console.log(users);

  return (
    <>
      <div className="main-div">
        {filter.map((user, index) => (
          <div key={index}>
            <li>
              Name : {user.name} - Age : {user.age} <br />
            </li>
          </div>
        ))}
        <h1>Total User : {userCount}</h1>
        <h1>Average Age : {averageAge}</h1>
      </div>
    </>
  );
};
