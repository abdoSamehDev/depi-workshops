import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const naviget = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const auth = async () => {
    await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        console.log(token);
      });
  };
  useEffect(() => {
    if (token) {
      naviget("/profile");
    }
  }, [token]);
  return (
    <div className="container m-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          auth();
          console.log(username);
          console.log(password);
        }}
      >
        <input
          type="text"
          className="form-control my-2"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="form-control my-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
