import UserInfo from "./UserInfo";

function UserProfile() {
  const userName = "NagaLakshmi Nilla";
  const userAge = 22;

  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      <UserInfo name={userName} age={userAge} />
    </div>
  );
}

export default UserProfile;
