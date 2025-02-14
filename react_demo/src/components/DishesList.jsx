export const DishesList = ({ name, price }) => {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>Name : {name}</h3>
      <h3>Price : {price}</h3>
    </div>
  );
};
