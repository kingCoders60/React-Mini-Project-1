import React from "react";

const Card = (props) => {
  return (
    <div
      className={`bg-blue-200 shadow-lg shadow-blue-400 p-6 rounded text-shadow-black text-center inline-block transform transition-transform duration-1000 ${
        props.isActive
          ? "scale-120 bg-amber-500"
          : "hover:scale-120 hover:bg-amber-500"
      }`}>
      <img src={props.image} alt="Random" className="h-20" />
      <h1>
        {props.id} {props.author}
      </h1>
      <button
        className="mt-2 px-4 py-2 shadow-amber-200 p-4 bg-blue-500 text-white rounded hover:cursor-pointer hover:text-black hover:shadow-md transform hover:scale-105 transition-transform duration-200"
        onClick={props.onAddFriend}>
        Add friend
      </button>
    </div>
  );
};

export default Card;
