import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
