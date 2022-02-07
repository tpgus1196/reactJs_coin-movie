import {useEffect, useState} from "react";
function App() {
  
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return
    } else{
      setToDo("");
      setToDos((current) => [toDo, ...current]); //toDo 현재까지 배열 요소로 추가하기         
    } 
   console.log(toDos);
  } 
  const onChange = (e) => setToDo(e.target.value); //이래야 input바에 나오는구나... 
  
  return (
    <div >
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          placeholder="Write your to do..." 
          value={toDo} 
          type="text"/>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;