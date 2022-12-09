import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Activity = (props) => {
  const { handleAddToCart, activity } = props;
  const { about, img, name, time, rating } = activity;
  // console.log(handleAddToCart);

  return (
    <div className="mb-6">
      <div className="card bg-white text-black p-5 shadow-md flex flex-col justify-between h-full w-full rounded-2xl">
        <div>
          <figure className="border-solid border-2 border-sky-500 rounded-md">
            <img src={img} className="" alt="Shoes" />
          </figure>
        </div>
        <div className="text-left">
          <div className="flex flex-col gap-5 py-4">
            <div>
              <h2 className="text-xl font-semibold">{name}</h2>
            </div>
            <div className="">
              <p>{about.slice(0, 100) + "..."}</p>
            </div>
            <div className="text-sm">
              <p>Rating : {rating} stars</p>
              <p>Time required : {time}m</p>
            </div>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(activity)}
              className="bg-lean-500 w-full bg-teal-500 text-black hover:bg-green-600 hover:text-white rounded-md flex flex-row py-3 justify-center items-center"
            >
              <p className="pr-2 text-lg font-semibold">Add to list</p>
              <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
