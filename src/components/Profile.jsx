import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const getUserData = async () => {
    await fetch("https://dummyjson.com/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="container m-5">
      <h2>{`Welcome, ${userData.firstName} ${userData.lastName}`}</h2>
    </div>
  );
};

export default Profile;
