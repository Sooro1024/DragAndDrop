import React, { useRef } from "react";

const FirsColumnShorctCut = ({ item, memoFunc, closure }) => {
  const ref = useRef(null);
  return (
    <div
      id={item.id}
      ref={ref}
      draggable
      style={{
        minWidth: "50px",
        minHeight: "50px",
        fontSize: "2rem",
        backgroundColor: "#61dafb",
        margin: "1rem"
      }}
      onDragStart={ev => {
        closure.memo = memoFunc(ev.currentTarget.id);
      }}
      onDrop={ev => {
        const affter = ev.pageY - ref.current.offsetTop > 25;
        closure.memo(ev.currentTarget.id, affter, "toFirst");
      }}
    >
      {item.name}
    </div>
  );
};

export default FirsColumnShorctCut;
