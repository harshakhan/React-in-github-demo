const express = require("express");

const app = express();

app.use(express.json());

let users = [
  {
    username: "ram",
    email: "ram@gmail.com",
    age: 20,
  },
];

app.get("/getuser/:username", (req, res) => {
  res.status(200).json(users);
});

app.post("/adduser", (req, res) => {
  console.log(req.query);
  const newUser = {
    username: req.query.username,
    email: req.query.email,
    age: req.query.age,
  };
  users.push(newUser);
  res.status(200).json({ message: "Successfully User is Added" });
  const check = users.filter((item) => item.email === email);
  if (check) {
    res.status(400).json({ message: "Above user is already exists" });
  }
});

app.delete("/deleteuser/:username", (req, res) => {
  const username = req.params.username;

  const index = users.findIndex((users) => {
    return users.username == username;
  });

  if (index >= 0) {
    let deletedUser = users[index];
    users.splice(index, 1);
    res.status(200).json({ message: "Successfully User is Deleted" });
  } 
  else {
    res.status(404).json({ message: "Error Deleting the Users" });
  }
});

app.listen(5000, () => {
  console.log("The server is up and running");
});