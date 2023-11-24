// import { useEffect, useState } from "react";
// import Button from "../components/Button";

// function CounterPage({ initialCount }) {
//   const [count, setCount] = useState(initialCount);

//   useEffect(() => {
//     console.log(count);
//   }, [count]);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <h1>Count is {count}</h1>
//       <Button onClick={handleClick}>Increment</Button>
//     </div>
//   );
// }

// export default CounterPage;

//USING CUSTOM HOOKS

// import Button from "../components/Button";
// import useCounter from "../hooks/use-counter";

// function CounterPage({ initialCount }) {
//   const { count, increment } = useCounter(initialCount);
//   return (
//     <div>
//       <h1>Count is {count}</h1>
//       <Button onClick={increment}>Increment</Button>
//     </div>
//   );
// }

// export default CounterPage;

// import { useState } from "react";
// import Button from "../components/Button";
// import Panel from "../components/Panel";

// function CounterPage({ initialCount }) {
//   const [count, setCount] = useState(initialCount);
//   const [valueToAdd, setValueToAdd] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const handleChange = (event) => {
//     const value = parseInt(event.target.value) || 0;
//     setValueToAdd(value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setCount(count + valueToAdd);
//     setValueToAdd(0);
//   };
//   return (
//     <Panel className="m-3">
//       <h1 className="text-lg">Count is {count}</h1>
//       <div className="flex flex-row">
//         <Button onClick={increment}>Increment</Button>
//         <Button onClick={decrement}>Decrement</Button>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <label>Add a lot!</label>
//         <input
//           value={valueToAdd}
//           onChange={handleChange}
//           type="number"
//           className="p-1 m-3 bg-gray-50 border border-gray-300"
//         ></input>
//         <Button>Add it</Button>
//       </form>
//     </Panel>
//   );
// }

// export default CounterPage;

//Using Hook useReducer

import produce from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const CHANGE_VALUE_TO_ADD = "change_value_to_add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };

    case CHANGE_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    //   return {
    //     ...state,
    //     valueToAdd: action.payload,
    //   };

    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    //   return {
    //     ...state,
    //     count: state.count - 1,
    //   };

    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    //   return {
    //     ...state,
    //     count: state.count + state.valueToAdd,
    //     valueToAdd: 0,
    //   };
    default:
      //   throw new Error("unexpected action type:" + action.type);
      //   return state;
      return;
  }
};
//   return {
//     ...state,
//     count: state.count + 1,
//   };
//   if (action.type === INCREMENT_COUNT) {
//   return {
//     ...state,
//     count: state.count + 1,
//   };
//   }
//   if (action.type === CHANGE_VALUE_TO_ADD) {
//   return {
//     ...state,
//     valueToAdd: action.payload,
//   };
//   }
// };

function CounterPage({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  //   console.log(state);

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);

    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd | ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
