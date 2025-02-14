import "./EV.css";

export const EventPropagation = () => {
  const handleGrandParentClick = () => {
    console.log("Grand Parent Clicked");
    alert("Grand Parent Clicked");
  };

  const handleParentClick = () => {
    console.log("Parent Clicked");
    alert("Parent Clicked");
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log("Child Clicked");
    alert("Child Clicked");
  };

  return (
    <>
      <section className="event-propagation">
        <div className="g-div" onClickCapture={handleGrandParentClick}>
          <div className="p-div" onClickCapture={handleParentClick}>
            <button className="c-div" onClickCapture={handleChildClick}>
              Click Me!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
