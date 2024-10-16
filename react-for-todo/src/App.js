import { useState } from "react";


function App() {
const [toDo, setToDo] = useState("");
const [toDos, setToDos] = useState([]);
const onChange = (event) => setToDo(event.target.value);
// 엔터를 치면 내용이 초기화된다 
const onSubmit = (event) => {
  event.preventDefault()
  if (toDo === "") {
    return;
  }
  setToDo("");
  setToDos(
    (currentArray) => [toDo, ...currentArray]);
};
console.log(toDos); 

  return (
    <div>
      <h1>My toDos ({toDo.length}) </h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do.."
        
         />
        <button>Add To Do</button>   
      </form>
      <hr />
      <ul>
      {toDos.map((item, index) => 
      (<li key={index}>{item}</li>))}
      </ul>
      
     
    </div>
  );
}

export default App;
