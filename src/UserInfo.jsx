function UserInfo({ name, age }) {
  return (
    <div className="user-info">
      <p>
        <span>Name:</span> {name}
      </p>
      <p>
        <span>Age:</span> {age}
      </p>
    </div>
  );
}

export default UserInfo;
