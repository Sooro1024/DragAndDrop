import React from "react";
import FirsColumnShorctCut from "./FirsColumnShorctCut";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PoseGroup } from "react-pose";

const FirstColumn = ({ firtsColumn, memoFunc }) => {
  return (
    <div>
      <TransitionGroup>
        <PoseGroup>
          {firtsColumn.map(el => (
            <CSSTransition key={el.id} timeout={500} classNames="item">
              <FirsColumnShorctCut item={el} key={el.id} memoFunc={memoFunc} />
            </CSSTransition>
          ))}
        </PoseGroup>
      </TransitionGroup>
    </div>
  );
};

export default React.memo(FirstColumn);
