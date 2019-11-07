import React, { useReducer } from "react";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";
import { reducer, initialState } from './helpers'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const drag = ev => ev.preventDefault();
  // prettier-ignore
  const memoFunc = function() {
    let param, count;
    param = null;
    count = 0;
    return function(a) {
      switch (count) {
        case 0:
          count = count + 1;
          param = a;
          break;
        case 1:
          count = 0;
          if (a.dropId !== undefined) {
            dispatch({
              type: "DRAG",
              payload: {
                dragId: param,
                dropId: a.dropId,
                affter: a.affter,
                whareTo: a.whareTo
              }
            });
          }
          break;
        default:
          return null;
      }
    };
  }();

  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
      onDragOver={drag}
    >
      <FirstColumn firtsColumn={state.firtsColumn} memoFunc={memoFunc} />
      <SecondColumn secondColumn={state.secondColumn} memoFunc={memoFunc} />
    </div>
  );
}

export default App;
