import { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "",
    age: 0,
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validateInputFields = (val, field) => {
    let error = "";
    var regex = /^[a-zA-Z][a-zA-Z\\s]+$/;

    switch (field) {
      case "fullName":
        if (!val.trim()) {
          error = "Full Nmae is Required";
        } else if (!regex.test(val)) {
          error = "Full Nmae validation";
        } else if (val.length > 50) {
          error = "Full name length";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const inputHandler = (e, field) => {
    console.log("event", e.target.value);
    const val = e.target.value;
    const temp = { ...profileData };
    temp[field] = val;
    setProfileData(temp);

    const err = validateInputFields(val, field);
    let tempErr = { ...errors };
    tempErr[field] = err;
    setErrors(tempErr);
  };

  console.log("errors", errors);

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
          {errors.fullName && (
            <span className="error-msg">{errors.fullName}</span>
          )}
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
