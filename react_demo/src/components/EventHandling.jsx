import "./EV.css";

export const EventHandling = () => {
  const handleClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    console.log(event.target.textContent);
    alert("Button Clicked! ");
  };

  return (
    <>
      {/* Function Component with named Function */}
      {/* inshort this function is called refernce function so, directly call function*/}
      <button onClick={handleClick}>Click Me!</button>

      {/* that mean first user click on text then function call handlClick function and this function return the value */}
      <button onClick={(event) => handleClick(event)}>Click Me 2</button>
    </>
  );
};
