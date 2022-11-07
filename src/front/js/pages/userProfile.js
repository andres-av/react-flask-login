import React from "react";
import profilePic from "../../../../docs/assets/profilePic.jpg"

export const UserProfile = () =>{

    return (
        <div className="text-center">
        <p className="fs-4 fw-semibold"> Welcome to your profile</p>
        <p className="fs-6 my-0"> Here is a profile pic</p>
        <img
                src={profilePic}
                width="500"
                alt="Profile pic"
              />
        </div>
    )
}