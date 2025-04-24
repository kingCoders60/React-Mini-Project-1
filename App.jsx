import React,{useState} from 'react'

const App = () => {
  const [names,setName]=useState([]);
  const [nameinput,setInput]=useState("");
  const submit = (e) =>{
    e.preventDefault();
    if(nameinput.trim()!=""){
      setName([...names,nameinput]);
      setInput("");
    }
  };
  const updatedName = (index) =>{
    const updated = names.filter((_,i)=>i!==index); //isse jo i index se match karega wo //filter out ho jayega.
    setName(updated);
  }
  return (
    <div className="form-container">
      <form >
        <input
          type="text"
          value={nameinput}
          placeholder="Enter task"
          className="px-4 py-4 m-4 bg-cyan-800 rounded-2xl"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={submit}
          className="px-2 py-2 bg-red-600 rounded-b-full">
          Submit
        </button>
      </form>
      <h3>Form Submissions:</h3>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            <input
              type="checkbox"
              className="bg-amber-300 m-2"
              onChange={() => updatedName(index)}
            />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
