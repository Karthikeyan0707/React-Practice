// import React, { useState } from "react";
// import styled from "styled-components";
// import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color:${(props) => (props.invald ? "red" : 'black"')}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invald ? "red" : "#ccc")};
//     background:${(props) => (props.invald ? "#ffd7d7" : "transparent")}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

// const CourseInput = (props) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isValid, setisValid] = useState(true);

//   const goalInputChangeHandler = (event) => {
//     if (event.target.value.trim().length > 0) {
//       setisValid(true);
//     }
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     if (enteredValue.trim().length === 0) {
//       setisValid(false);
//       return;
//     }
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <FormControl invald={!isValid}>
//         {/* 2 */}
//         {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}>  */}
//         {/* 1 */}
//         {/* inside label */}
//         {/* style={{ color: !isValid ? "red" : "black" }} */}
//         <label>Course Goal</label>
//         {/* 1 */}
//         {/* inside input */}
//         {/* style={{
//             borderColor: !isValid ? "red" : "#ccc",
//             background: !isValid ? "salmon" : "transparent",
//           }} */}
//         <input type="text" onChange={goalInputChangeHandler} />
//         {/* 2 */}
//         {/* </div> */}
//       </FormControl>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// export default CourseInput;

import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl invalid={!isValid}> */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
