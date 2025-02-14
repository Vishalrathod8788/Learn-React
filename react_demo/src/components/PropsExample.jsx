export const PropsExample = () => {
  return (
    <div>
      <h1>Props Example</h1>
      <h1>Profile Card</h1>
      <Profile
        name="Vishal"
        age={24}
        greeting={
          <div>
            <strong>Hi Vishal, How are you !</strong>
          </div>
        }
      >
        <p>Hobbies : Reading, Learning</p>
        <button>Contact</button>
      </Profile>
    </div>
  );
};

function Profile(prop) {
  //   return (
  //     <>
  //       <h2>Name : {prop.name}</h2>
  //       <p>Age : {prop.age}</p>
  //       <p>{prop.greeting}</p>
  //       <div>{prop.div}</div>
  //     </>
  //   );
}