const addBreakToLocalStorage = (time) => {
  localStorage.setItem("break-time", time);
};

const addTotalTimeToStorage = (selectTime) => {
  // localStorage.setItem("total-time", selectTime);
  let time = {};
  const storedTime = localStorage.getItem("total-time");
  if (storedTime) {
    time = parseInt(storedTime) + selectTime;
  } else {
    time = selectTime;
  }
  localStorage.setItem("total-time", time);
};

const getTotalTime = () => {
  let time = {};
  const storedTime = localStorage.getItem("total-time");
  if (storedTime) {
    time = JSON.parse(storedTime);
  } else {
    time = 0;
  }
  return time;
};

const getStoredBreakTime = () => {
  let time = {};
  const storedTime = localStorage.getItem("break-time");
  if (storedTime) {
    time = JSON.parse(storedTime);
  } else {
    time = 0;
  }
  return time;
};

export {
  addBreakToLocalStorage,
  getStoredBreakTime,
  addTotalTimeToStorage,
  getTotalTime,
};
