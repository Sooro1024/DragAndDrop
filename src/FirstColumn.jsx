import React from "react";
import FirsColumnShorctCut from "./FirsColumnShorctCut";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FirstColumn = ({ firtsColumn, memoFunc, closure }) => {
  return (
    <div>
      <TransitionGroup>
        {firtsColumn.map(el => (
          <CSSTransition
            key={el.id}
            timeout={{ appear: 600, enter: 500, exit: 0 }}
            classNames="item"
          >
            <FirsColumnShorctCut
              item={el}
              key={el.id}
              memoFunc={memoFunc}
              closure={closure}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default React.memo(FirstColumn);
