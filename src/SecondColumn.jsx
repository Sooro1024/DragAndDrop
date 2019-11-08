import React from "react";
import SecondColumnShorctCut from "./SecondColumnShortcut";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PoseGroup } from "react-pose";

const SecondColumn = ({ secondColumn, memoFunc }) => {
  return (
    <div>
      <TransitionGroup>
        <PoseGroup>
          {secondColumn.map(el => (
            <CSSTransition key={el.id} timeout={500} classNames="item">
              <SecondColumnShorctCut item={el} memoFunc={memoFunc} />
            </CSSTransition>
          ))}
        </PoseGroup>
      </TransitionGroup>
    </div>
  );
};

export default React.memo(SecondColumn);
