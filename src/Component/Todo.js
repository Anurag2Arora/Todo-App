import React, { useState } from "react";
import "./Todo.css";
import TodoList from "./TodoList";
export default function Todo() {
  const [data, setData] = useState("");
  const [name, setName] = useState([]);
  const InputEvent = (e) => {
    setData(e.target.value);
  };
  const Add = () => {
    setName((old) => {
      return [...old, data];
    });
    setData("");
  };
  const Delete = (id) => {
    setName((old) => {
      return old.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main">
        <div className="todo">
          <h1 style={{ textAlign: "center" }}>TO DO List</h1>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="input">
            <input
              type="text"
              placeholder="Add Item"
              onChange={InputEvent}
              value={data}
            />
            <button onClick={Add}>Submit</button>
          </div>
          <h6
            className="flex"
            style={{ alignItems: "center", gap: "50%", marginLeft: "20px" }}>
            Ex: Buy an apple <i className="fa-solid fa-trash"></i>
          </h6>
          <ol>
            {name.map((val, index) => {
              return (
                <TodoList text={val} del={Delete} key={index} id={index} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
