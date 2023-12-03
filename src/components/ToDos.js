import React, { useEffect } from "react";
import { useState } from "react";

const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

export default function ToDos() {
  const [todos, setToDos] = useState([
    {
      id: "todo1",
      createdAt: "18:00",
    },
    {
      id: "todo2",
      createdAt: "20:00",
    },
  ]);

  const reverseOrder = () => {
    setToDos([...todos].reverse());
  };

  useEffect(()=>{
    document.title = "Todo"
  },[])

  return (
    <div>
      <button onClick={reverseOrder}>reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
