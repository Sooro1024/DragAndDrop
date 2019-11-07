import React from "react";
import FirsColumnShorctCut from "./FirsColumnShorctCut";

const FirstColumn = ({ firtsColumn, memoFunc, closure }) => {
  return (
    <div>
      {firtsColumn.map(el => (
        <FirsColumnShorctCut
          item={el}
          key={el.id}
          memoFunc={memoFunc}
          closure={closure}
        />
      ))}
    </div>
  );
};

export default React.memo(FirstColumn);
