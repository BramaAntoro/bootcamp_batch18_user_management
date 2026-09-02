const fs = require("fs");

function cekName(name) {
  const users = fs.readFileSync("user.json", "utf-8");
  const parsedUser = JSON.parse(users);

  const isExist = parsedUser.some((user) => user.name == name);

  if (isExist) {
    console.log("User already exists");
    return false;
  }

  return true;
}

module.exports = cekName;
