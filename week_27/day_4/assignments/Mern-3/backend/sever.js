//GET,POST,PUT(EDIT),DELETE

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { stderr } = require("process");
const { parse } = require("path");

let student_data = [];

//read  the file student.js in this way the info of student file will be stored in this file
fs.readFile("./students.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    //as bcs its in json format its all stringify u need to parse it
    student_data = JSON.parse(data);
  }
});

const app = express();
app.use(express.json());
app.use(cors());

//GET REQUEST
app.get("/persons", (req, res) => {
  fs.readFile("./students.json", (err, data) => {
    if (err) {
      res
        .status(403)
        .set("Content-Type", "application/json")
        .send({ message: "something went wrong" })
        .end();
    } else {
      student_data = JSON.parse(data);
      res
        .status(200)
        .set("Content-Type", "application/json")
        .send(student_data)
        .end();
    }
  });
});

//search the student

app.get("/student", (req, res) => {
  const index = students_data.findIndex((elem) => {
    return elem.email === req.body.email;
  });

  if (index >= 0) {
    let data = students_data.filter((elem) => elem.email === req.body.email);
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: "No Such person Found" });
  }
});

//post student details(add)

app.post("/create", (req, res) => {
  const test = student_data.find((elem) => elem.email === req.body.email);

  if (test) {
    res.status(403).json({ message: "PERSON ALREADY EXIST" });
    return;
  }

  if (req.body.name === "" || !req.body.name) {
    res.status(403).json({ message: "name can't be empty" });
    return;
  } else if (req.body.blood_group === "" || !req.body.blood_group) {
    res.status(403).json({ message: "blood_group can't be empty" });
    return;
  } else if (req.body.email === "" || !req.body.email) {
    res.status(403).json({ message: "email can't be empty" });
    return;
  } else if (req.body.city === "" || !req.body.city) {
    res.status(403).json({ message: "city can't be empty" });
    return;
  } else if (req.body.image_link === "" || !req.body.image_link) {
    res.status(403).json({ message: "image_link can't be empty" });
    return;
  } else if (req.body.gender === "" || !req.body.gender) {
    res.status(403).json({ message: "gender can't be empty" });
    return;
  } else {
    const data = {
      name: req.body.name,
      blood_group: req.body.blood_group,
      email: req.body.email,
      city: req.body.city,
      image_link: req.body.image_link,
      gender: req.body.gender,
    };

    student_data.push(data);

    //save the data new data in the main json file so u have to stringify it
    fs.writeFile("./students.json", JSON.stringify(students_data), (err) => {
      if (err) {
        console.log("Error updating the file.");
      } else {
        console.log("File updated");
      }
    });

    res.status(200).json({
      status: "success",
      message: "New person has been added to the database",
    });
  }
});

app.put("/edit", (err, data) => {
  const index = student_data.findIndex((elem) => {
    return elem.email === req.body.email;
  });

  if (index >= 0) {
    student_data = student_data.map((elem, i) => {
      //error
      if (i === index) {
        let data = { ...req.body };
        return data;
      } else {
        return elem;
      }
    });
    fs.writeFile("./students.json", JSON.stringify(students_data), (err) => {
      if (err) {
        console.log("Error updating the file.");
      } else {
        console.log("File updated");
      }
    });

    res.status(200).json({ message: "person data is sucessfully updated" });
  } else {
    res.status(404).json({ message: "Person data is successfully updated" });
  }
});

app.delete("/delete", (req, res) => {
  const index = student_data.findIndex((elem) => {
    return elem.email === req.body.email;
  });

  if (index >= 0) {
    student_data.splice(index, 1);
    fs.writeFile("./students.json", JSON.stringify(students_data), (err) => {
      if (err) {
        console.log("Error updating the file.");
      } else {
        console.log("File updated");
      }
    });

    res.status(200).json({
      status: "Success",
      message: "person has been removed from the database",
    });
  } else {
    res.status(404).json({ message: "No Such person Found" });
  }
});

app.listen(5000, () => {
  console.log("The server is up and running");
});
