import React from "react";

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
  function inputTextHandler(e) {
    setInputText(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, complete: false, id: Math.random() },
    ]);
    setInputText("");
  }

  function handleFilter(e) {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={handleSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div onChange={handleFilter} className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
