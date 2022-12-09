import React from "react";
import Practice from "../Practice/Practice";
import Profile from "../Profile/Profile";

const Cart = (props) => {
  return (
    <div>
      <Profile></Profile>
      <Practice task={props.task}></Practice>
    </div>
  );
};

export default Cart;
