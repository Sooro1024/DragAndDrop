import React, { useRef } from "react";

const FirsColumnShorctCut = ({ item, memoFunc }) => {
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
        memoFunc(ev.currentTarget.id);
      }}
      onDrop={ev => {
        const affter = ev.pageY - ref.current.offsetTop > 25;
        memoFunc({ dropId: ev.currentTarget.id, affter, whareTo: "toFirst" });
      }}
    >
      {item.name}
    </div>
  );
};

export default FirsColumnShorctCut;
