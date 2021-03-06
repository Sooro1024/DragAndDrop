import React, { useRef } from "react";
import posed from "react-pose";

const FirsColumnShorctCut = React.forwardRef(({ item, memoFunc }, refer) => {
  const ref = useRef(null);
  return (
    <div ref={refer}>
      <PosedBox item={item} memoFunc={memoFunc}>
        {(item, memoFunc) => (
          <div
            id={item.id}
            ref={ref}
            draggable
            style={{ height: "50px" }}
            onDragStart={ev => {
              memoFunc(ev.currentTarget.id);
            }}
            onDrop={ev => {
              const affter = ev.pageY - ref.current.offsetTop > 25;
              memoFunc({
                dropId: ev.currentTarget.id,
                affter,
                whareTo: "toFirst"
              });
            }}
          >
            {item.name}
          </div>
        )}
      </PosedBox>
    </div>
  );
});

const posedFirsColumnShorctCut = posed(FirsColumnShorctCut)();

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

const PosedBox = ({ item, memoFunc, children }) => (
  <Box
    style={{
      minWidth: "350px",
      minHeight: "50px",
      fontSize: "2rem",
      backgroundColor: "#61dafb",
      margin: "1rem",
      borderRadius: "0.5rem"
    }}
  >
    {children(item, memoFunc)}
  </Box>
);

export default posedFirsColumnShorctCut;
