const fs = require("fs");
const readline = require("readline");
const cekName = require("./cek-name");
const cekRole = require("./cek-role");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Name: ", (name) => {
  const isValidName = cekName(name);
  if (!isValidName) {
    rl.close();
    return;
  }
  rl.question("Email: ", (email) => {
    rl.question("Phone: ", (phone) => {
      rl.question("Role : ", (role) => {
        const isValidRole = cekRole(role);
        if (!isValidRole) {
          rl.close();
          return;
        }
        rl.question("Status : ", (statusInput) => {
          const status = statusInput.trim().toLowerCase() === "true";
          const data = fs.readFileSync("user.json", "utf-8");
          const parsedUsers = JSON.parse(data);
          const newData = { name, email, phone, role, status };
          parsedUsers.push(newData);
          fs.writeFileSync("user.json", JSON.stringify(parsedUsers, null, 2));
          console.log("-".repeat(35));
          console.log(`Name : ${name}`);
          console.log(`Email : ${email}`);
          console.log(`Phone : ${phone}`);
          console.log(`Role : ${role}`);
          console.log(`Status : ${status}`);
          console.log("User successfully created.");
          rl.close();
        });
      });
    });
  });
});

module.exports = rl;
