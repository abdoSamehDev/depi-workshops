import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GetData from "../hooks/GetData";
import Loading from "../components/Loading";
import axios from "axios";

const ViewUserPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, loading] = GetData(`http://localhost:5000/${params.id}`);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const deleteUser = async () => {
    await axios.delete(`http://localhost:5000/${params.id}`);
    navigate("/");
  };
  const updateUser = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/${params.id}`, {
      name,
      email,
      password,
    });
    navigate("/");
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>{data[0].name}</h1>
          <h1>{data[0].email}</h1>
          <button
            onClick={deleteUser}
            className="bg-red-500 p-2 rounded-md mt-2 text-white"
          >
            Delete
          </button>

          {/* Update Form */}
          <form onSubmit={updateUser} className="mt-4">
            <div className="mb-2">
              <label className="block mb-1">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder={data[0].name}
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder={data[0].email}
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="New Password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 p-2 rounded-md mt-2 text-white"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewUserPage;
