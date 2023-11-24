import React from "react";
import { useSelector } from "react-redux";

function App() {
  const books = useSelector((state) => state.operationsReducer);
  console.log(books);
  return <div>App</div>;
}

export default App;
