const fs = require("fs");
const path = require("path");

const jsonFilePath = path.join(__dirname, "data.json");

fs.readFile(jsonFilePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  }
  let users = JSON.parse(data);

  const newUser = {
    name: "Anna",
    age: 21,
  };

  users.push(newUser);
  
  fs.writeFile(jsonFilePath, JSON.stringify(users, null, 2), "utf8", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("New user added!!");
  });
});
