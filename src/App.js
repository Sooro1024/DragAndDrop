import React, { useReducer } from "react";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";
import { findIndex } from "lodash";
import nanoid from "nanoid";

const arr = [
  { name: "Republic of Kosovo", id: "I5a1W_fjAaoNxvi0FDFsO" },
  { name: "Romania", id: "JGG6NIuaTjECdr_uJNv-2" },
  { name: "Russian Federation", id: "BrEvNdPJyY6kFNY_uYcEf" },
  { name: "San Marino", id: "bLOMhCX7LN43LyaVJvT_t" },
  { name: "Serbia", id: "pcI2d-UbEW_5jiWuqqgi8" },
  { name: "Slovakia", id: "p55nzgZXjmsyOP5VPuRQr" },
  { name: "Slovenia", id: "n2dsapvZqVLzjc0FDLQxE" },
  { name: "Spain", id: "xVxhSryTXmfOCZx05Q3hc" },
  { name: "Svalbard and Jan Mayen", id: "h3WKU9WgtooiaJOevnV95" },
  { name: "Sweden", id: "ZsYKyArHNXalctpci7D_w" }
];

const arr2 = [
  { name: "Nigeria", id: "uhN3IGujXLFN1S-h3zLHN" },
  { name: "Réunion", id: "BvfD0N1Im5yDdlNadXxM3" },
  { name: "Rwanda", id: "5cCtlkdcnUMSQANK9ctpI" },
  { name: "Saint Helena", id: "kdB6DWkUUBnEbZaBHBq6Z" },
  { name: "Sao Tome and Principe", id: "I5kLUyrHAZhBhmLNy9SfF" },
  { name: "Senegal", id: "8R9U6E5g6gFPxtZhWsW3U" },
  { name: "Seychelles", id: "dczpbMrPTRvAc_7m_IKhJ" },
  { name: "Sierra Leone", id: "bLb9Pi3JbUx0kWnR_ZAhq" },
  { name: "Somalia", id: "t2XfK2duWkHg02HEDhB6_" },
  { name: "South Africa", id: "jy2ox5gLG5z0SkMBPhoAH" },
  { name: "South Sudan", id: "3Y8cIVyBxpSw07Hx-gYo6" }
];

const initialState = {
  firtsColumn: arr,
  secondColumn: arr2
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "DRAG":
      return dragFunc(state, payload);

    default:
      return state;
  }
};

const dragFunc = (state, { dragId, dropId, affter, whareTo }) => {
  if (whareTo === "toSecond") {
    const dragIndex = findIndex(state.firtsColumn, ["id", dragId]);
    const dropIndex = findIndex(state.secondColumn, ["id", dropId]);
    if (dragIndex === -1 || dropIndex === -1) {
      return swap("secondColumn", dragId, dropId, state);
    }
    const addItem = state.firtsColumn[dragIndex];
    const firtsColumn = NewFistColumn(state.firtsColumn, dragIndex);
    const secondColumn = newSecondColumn(
      state.secondColumn,
      dropIndex,
      affter,
      addItem
    );
    return { firtsColumn, secondColumn };
  } else if (whareTo === "toFirst") {
    const dragIndex = findIndex(state.secondColumn, ["id", dragId]);
    const dropIndex = findIndex(state.firtsColumn, ["id", dropId]);
    if (dragIndex === -1 || dropIndex === -1) {
      return swap("firtsColumn", dragId, dropId, state);
    }
    const addItem = state.secondColumn[dragIndex];
    const secondColumn = NewFistColumn(state.secondColumn, dragIndex);
    const firtsColumn = newSecondColumn(
      state.firtsColumn,
      dropIndex,
      affter,
      addItem
    );
    return { firtsColumn, secondColumn };
  }
};

const NewFistColumn = (firtsColumn, dragIndex) => {
  const arr = [...firtsColumn];
  arr.splice(dragIndex, 1);
  return arr;
};
const newSecondColumn = (firtsColumn, dragIndex, affter, addItem) => {
  const deleteCount = affter ? 1 : 0;
  const arr = [...firtsColumn];
  arr.splice(dragIndex + deleteCount, 0, addItem);
  return arr;
};

const swap = (colomn, dragId, dropId, state) => {
  const col = state[colomn];
  const data = [...col];
  const dragIndex = findIndex(data, ["id", dragId]);
  const dropIndex = findIndex(data, ["id", dropId]);
  const oldDrag = data[dragIndex];
  const oldDrop = data[dropIndex];
  oldDrag.id = nanoid();
  oldDrop.id = nanoid();
  data[dragIndex] = oldDrop;
  data[dropIndex] = oldDrag;
  return { ...state, [colomn]: data };
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const drag = ev => ev.preventDefault();

  const memoFunc = first => {
    return (second, affter, whareTo) => {
      dispatch({
        type: "DRAG",
        payload: { dragId: first, dropId: second, affter, whareTo }
      });
    };
  };

  const closure = {};

  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
      onDragOver={drag}
    >
      <FirstColumn
        firtsColumn={state.firtsColumn}
        memoFunc={memoFunc}
        closure={closure}
      />
      <SecondColumn
        secondColumn={state.secondColumn}
        memoFunc={memoFunc}
        closure={closure}
      />
    </div>
  );
}

export default App;
