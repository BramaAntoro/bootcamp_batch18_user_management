const users = require("./users");
const fs = require("fs");
const input = require("./readline");

if (!fs.existsSync("user.json")) {
  fs.writeFileSync("user.json", JSON.stringify(users, null, 2));
}

// const data = fs.readFileSync("user.json", "utf-8");
// const parsedUsers = JSON.parse(data);

// console.log("User Management System");
// console.log("\n");

// console.log("BEFORE PARSING");
// console.log(typeof data);
// console.log(data);

// console.log("AFTER PARSING");
// console.log(typeof parsedUsers);
// console.log(parsedUsers);

// const greetUser = (user) => {
//   if (!user.status) {
//     console.log(`User ${user.name} non-active`);
//     return;
//   }

//   console.log("--------------------");
//   console.log(`Name  : ${user.name}`);
//   console.log(`Email : ${user.email}`);
//   console.log(`Phone : ${user.phone}`);
//   console.log(`Role  : ${user.role}`);
//   console.log(`Status: Active`);

//   if (user.role === "ADMIN") {
//     console.log(`Welcome back, Admin ${user.name}`);
//   } else {
//     console.log(`Hello ${user.name}`);
//   }
// };

// parsedUsers.forEach(greetUser);
