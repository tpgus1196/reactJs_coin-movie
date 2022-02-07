import {useEffect, useState} from "react";
function App() {
  const [count, setCount] = useState(0);
  const [toDo, setToDo] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return
    } else{
        setCount(count + 1); //이게 왜 되는걸까?????
        setToDo("");
    } 
    console.log(e);
  } 
  const onChange = (e) => setToDo(e.target.value); //이래야 input바에 나오는구나... 
  
  return (
    <div >
      <h1>My To Dos ({count})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          placeholder="Write your to do..." 
          value={toDo} 
          type="text"/>
        <button>Add To Do</button>
      </form>
      <div>{toDo}</div>
    </div>
  );
}

export default App;
