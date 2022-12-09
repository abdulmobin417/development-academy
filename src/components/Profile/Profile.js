import React from "react";
import "./Profile.css";
import profile from "../../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div>
      <div className="flex sm:text-lg mt-8 px-6 items-center justify-center md:justify-start">
        <img src={profile} className="w-16 h-16 rounded-full" alt="" />
        <div className="pl-4 flex flex-col items-center md:items-start">
          <p className="text-left font-bold">Abdul Mobin</p>
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <p className="pl-2">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 mx-6 text-lg mt-12 rounded-md py-6">
        <div className="text-xl font-semibold">
          <p>United International University</p>
          <p>Department of CSE</p>
        </div>
        <div className="flex items-center justify-between px-6 pt-4">
          <div>
            <p>
              <span className="sm:text-3xl lg:text-2xl xl:3xl font-bold">
                56
              </span>
              <span className="sm:text-base lg:text-lg xl:text-base">kg</span>
            </p>
            <p className="sm:text-lg lg:text-base xl:text-lg">Weight</p>
          </div>

          <div>
            <p className="sm:text-3xl lg:text-2xl xl:3xl font-bold">5.6</p>
            <p className="sm:text-lg lg:text-base xl:text-lg">Height</p>
          </div>

          <div>
            <p>
              <span className="sm:text-3xl lg:text-2xl xl:3xl font-bold">
                22
              </span>
              <span className="sm:text-base lg:text-lg xl:text-base">yrs</span>
            </p>
            <p className="sm:text-lg lg:text-base xl:text-lg">Age</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
