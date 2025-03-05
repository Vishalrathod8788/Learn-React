import React, { useRef } from "react";
const Counts = () => {
  const renderCount = useRef(0);
  return (
    <>
      <div className="mt-3 font-display text-center">
        <p className="">Nothing Change here but I've now rendered:</p>
        <span className="text-red-600">{renderCount.current++}</span>
      </div>
    </>
  );
};

export default React.memo(Counts);
