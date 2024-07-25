import React from "react";
import "./style.css";

const InputField = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input type="text" />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
