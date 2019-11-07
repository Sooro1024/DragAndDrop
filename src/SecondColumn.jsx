import React from "react";
import SecondColumnShorctCut from "./SecondColumnShortcut";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const SecondColumn = ({ secondColumn, memoFunc, closure }) => {
  return (
    <div>
      <TransitionGroup>
        {secondColumn.map(el => (
          <CSSTransition
            key={el.id}
            timeout={{ appear: 500, enter: 500, exit: 0 }}
            classNames="item"
          >
            <SecondColumnShorctCut
              item={el}
              memoFunc={memoFunc}
              closure={closure}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default React.memo(SecondColumn);
