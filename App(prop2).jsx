import React,{useState } from 'react'
import axios from 'axios'
const App = () => {
  const [data,setData]=useState([])
  const getData = async() =>{
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    setData(response.data)
  }
  return (
    <div className="px-4 py-4">
      <button
        onClick={getData}
        className="bg-amber-400 text-shadow-white font-semibold text-2xl px-4 py-4 rounded active:scale-110 transition-transform hover:cursor-pointer hover:text-red-500">
        Submit
      </button>
      <div className="p-3 mt-5 bg-green-50">
        {data.map((item,index) => {
          return (
            <div key={index}>
              {item.author}
              <img className = 'h-20'src={item.download_url} alt="" />;
              <h1>{item.author}</h1>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default App
