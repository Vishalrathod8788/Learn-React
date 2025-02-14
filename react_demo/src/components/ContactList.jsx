export const ContacList = ({ prop }) => {
  const { name, phone, email } = prop;
  return (
    <div>
      <h1>Contac-List</h1>
      <p>Name : {name}</p>
      <p>Phone : {phone}</p>
      <p>E-mail : {email}</p>
    </div>
  );
};
