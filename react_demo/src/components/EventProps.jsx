import "./EV.css";
export const EventProps = () => {
  const handleClick = (user) => {
    alert(`Welcome ${user}`);
  };
  const handleHover = () => {
    alert("Hovered");
    console.log("Hovered");
  };
  return (
    <>
      <WelcomeUser
        buttonClick={() => handleClick("Vishal")}
        buttonHover={() => handleHover()}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { buttonClick, buttonHover } = props;
  return (
    <>
      <button onClick={buttonClick}>Click Me!</button>
      <button onMouseEnter={buttonHover}>Mouse Hovered</button>
    </>
  );
};