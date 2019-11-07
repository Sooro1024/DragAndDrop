import React, { useRef } from "react";

const SecondColumnShorctCut = ({ item, memoFunc, closure }) => {
  const ref = useRef(null);
  return (
    <div
      id={item.id}
      draggable
      style={{
        minWidth: "50px",
        minHeight: "50px",
        fontSize: "2rem",
        backgroundColor: "#45A163",
        margin: "1rem"
      }}
      ref={ref}
      onDrop={ev => {
        const affter = ev.pageY - ref.current.offsetTop > 25;
        memoFunc({ dropId: ev.currentTarget.id, affter, whareTo: "toSecond" });
      }}
      onDragStart={ev => {
        memoFunc(ev.currentTarget.id);
      }}
    >
      {item.name}
    </div>
  );
};

export default SecondColumnShorctCut;
