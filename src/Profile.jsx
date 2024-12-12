import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-details">
      <div>Profile Details</div>
      <div className="full-name">
        <label htmlFor="fullName">FullName</label>
        <input type="text" placeholder="Enter Full Name" required />
      </div>
      <div className="age">
        <label htmlFor="age">Age</label>
        <input type="number" placeholder="Enter Age" required />
      </div>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Enter Email" required />
      </div>
    </div>
  );
};

export default Profile;
