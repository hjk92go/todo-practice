import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [inputs, setInputs] = useState();
  const [list, setList] = useState([]);
  const no = useRef(list.length + 1);

  const onChange = (e) => {
    setInputs(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInputs("");
    setList([
      ...list,
      {
        id: no.current++,
        text: inputs,
      },
    ]);
    console.log("list : ", list);
  };

  const onDelete = (id) => {
    setList(list.filter((list) => list.id !== id));
  };

  return (
    <div>
      <h1>Practice </h1>

      <form onSubmit={onSubmit}>
        <input required placeholder="here" onChange={onChange} value={inputs}></input>
        <button type="submit">Ok</button>
      </form>

      <h1>List</h1>

      {list.map((text) => (
        <li>
          {text.text}
          <button onClick={() => onDelete(text.id)}>Del</button>
        </li>
      ))}
    </div>
  );
}

export default App;
