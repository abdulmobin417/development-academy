import React, { useEffect, useState } from "react";
import {
  addBreakToLocalStorage,
  TotalTimeToStorage,
  getStoredBreakTime,
  getTotalTime,
} from "../../utilities/fakedb";

const Practice = (props) => {
  const { task } = props;
  
  const totalTime = getTotalTime();

  const [breakTime, setbreakTime] = useState([]);
  const breakTimeSet = (time) => {
    addBreakToLocalStorage(time);
    setbreakTime(time);
  };
  useEffect(() => {
    setbreakTime(getStoredBreakTime());
  }, [breakTime]);

  return (
    <div className="px-6 mt-6">
      <h1 className="text-left text-2xl mb-6 font-semibold">Add a Break</h1>
      <div className="bg-gray-200 rounded-md py-4 px-2 sm:px-6 flex items-end md:flex-wrap md:gap-2 justify-between font-semibold text-sm">
        <button
          onClick={() => breakTimeSet(10)}
          className="rounded-full bg-teal-500 h-10 w-10 sm:w-12 sm:h-12"
        >
          10m
        </button>
        <button
          onClick={() => breakTimeSet(20)}
          className="rounded-full bg-teal-500 h-10 w-10 sm:w-12 sm:h-12"
        >
          20m
        </button>
        <button
          onClick={() => breakTimeSet(30)}
          className="rounded-full bg-teal-500 h-10 w-10 sm:w-12 sm:h-12"
        >
          30m
        </button>
        <button
          onClick={() => breakTimeSet(40)}
          className="rounded-full bg-teal-500 h-10 w-10 sm:w-12 sm:h-12"
        >
          40m
        </button>
        <button
          onClick={() => breakTimeSet(50)}
          className="rounded-full bg-teal-500 h-10 w-10 sm:w-12 sm:h-12"
        >
          50m
        </button>
      </div>
      <h1 className="text-left text-2xl mt-6 mb-6 font-semibold">
        Practice Details
      </h1>
      <div className="bg-gray-200 text-xl rounded-md p-6 flex items-center justify-between">
        <p>Exercise time</p>
        <p>{totalTime}m</p>
      </div>
      <div className="bg-gray-200 text-xl my-6 rounded-md p-6 flex items-center justify-between">
        <p>Break time</p>
        <p>{breakTime}m</p>
      </div>
      <div>
        <button className="py-4 bg-teal-500 w-full rounded-md text-md font-semibold mb-6">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Practice;
