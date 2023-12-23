import React from "react";

export default function TodoList(props) {
  return (
    <div>
      <li className="flex" style={{ justifyContent: "space-between" }}>
        {props.text}
        <i
          className="fa-solid fa-trash"
          onClick={() => {
            return props.del(props.id);
          }}></i>
      </li>
    </div>
  );
}
