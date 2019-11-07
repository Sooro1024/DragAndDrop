import React from "react";
import SecondColumnShorctCut from "./SecondColumnShortcut";

const SecondColumn = ({ secondColumn, memoFunc, closure }) => {
  return (
    <div>
      {secondColumn.map(el => (
        <SecondColumnShorctCut
          item={el}
          key={el.id}
          memoFunc={memoFunc}
          closure={closure}
        />
      ))}
    </div>
  );
};

export default React.memo(SecondColumn);
