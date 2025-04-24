import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [details, setDetails] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); 

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
      setDetails(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % details.length); 
    }, 2000); 

    return () => clearInterval(interval); 
  }, [details]);

  return (
    <div>
      <div className="p-10 space-x-5 space-y-5 bg-amber-100 h-full">
        {details.map((item, index) => (
          <Card
            key={item.id}
            id={item.id}
            author={item.author}
            image={item.download_url}
            isActive={index === activeIndex}
            onAddFriend={() => alert(`Added ${item.author} as a friend!`)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
