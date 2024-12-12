import { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "",
    age: 0,
    email: "",
  });

  const inputHandler = (e, field) => {
    console.log("event", e.target.value);
    const val = e.target.value;
    const temp = { ...profileData };
    temp[field] = val;
    setProfileData(temp);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("event", e.target);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="profile-details">
        <div>Profile Details</div>
        <div className="full-name">
          <label htmlFor="fullName">FullName</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={profileData.fullName}
            onInput={(e) => inputHandler(e, "fullName")}
            required
          />
        </div>
        <div className="age">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            value={profileData.age}
            onInput={(e) => inputHandler(e, "age")}
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            value={profileData.email}
            onInput={(e) => inputHandler(e, "email")}
            required
          />
        </div>
        <button style={{ cursor: "pointer", height: "40px" }}>
          Submit Profile Details
        </button>
      </div>
    </form>
  );
};

export default Profile;
