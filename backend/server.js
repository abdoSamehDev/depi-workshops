// Requires
require("dotenv").config();
const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();

// Vars
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) console.log(err);
    if (data) {
      const parsedData = JSON.parse(data);
      let userData = parsedData["users"].map(({ password, ...reset }) => reset);
      res.status(200).json({
        data: userData,
      });
    }
  });
});

app.post("/", (req, res) => {
  const { name, email, password } = req.body;
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) console.log(err);
    if (data) {
      const parsedData = JSON.parse(data);
      const last_id = parsedData["last_id"] + 1;
      let users = parsedData["users"];
      users.push({
        id: last_id,
        name,
        email,
        password,
      });

      fs.writeFile(
        "database.json",
        JSON.stringify({
          users,
          last_id,
        }),
        (err) => {
          if (err) {
            console.log(err);
          } else {
            res.status(201).json({ msg: "User has been added" });
          }
        }
      );
    }
  });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) console.log(err);
    if (data) {
      const parsedData = JSON.parse(data);
      let userData = parsedData["users"].map(({ password, ...reset }) => reset);
      const user = userData.filter((e) => e.id == id);
      res.status(200).json({
        data: user,
      });
    }
  });
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) console.log(err);
    if (data) {
      const parsedData = JSON.parse(data);
      let users = parsedData["users"].filter((e) => e.id != id);
      const last_id = parsedData["last_id"];
      fs.writeFile(
        "database.json",
        JSON.stringify({
          users,
          last_id,
        }),
        (err) => {
          if (err) {
            console.log(err);
          } else {
            res.status(201).json({ msg: "User has deleted" });
          }
        }
      );
    }
  });
});

app.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;

  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    if (data) {
      const parsedData = JSON.parse(data);
      let users = parsedData["users"];
      const userIndex = users.findIndex((user) => user.id == id);

      if (userIndex === -1) {
        return res.status(404).json({ msg: "User not found" });
      }

      // Update user data
      users[userIndex] = {
        ...users[userIndex],
        ...(name && { name }),
        ...(email && { email }),
        ...(password && { password }),
      };

      fs.writeFile(
        "database.json",
        JSON.stringify({
          users,
          last_id: parsedData["last_id"],
        }),
        (err) => {
          if (err) {
            console.log(err);
            res.status(500).json({ error: "Failed to update user" });
          } else {
            res.status(200).json({ msg: "User has been updated" });
          }
        }
      );
    }
  });
});

// Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
