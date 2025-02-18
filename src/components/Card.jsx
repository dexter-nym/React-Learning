// import React from "react";

const Card = ({ user }) => {
  return (
    <div className="card">
      <img src={user.profilePhoto} alt="Profile" className="profile-photo" />
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
  );
};

export default Card;
