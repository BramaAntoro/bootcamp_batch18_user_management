const fs = require("fs");
const readline = require("readline");
const cekName = require("./cek-name");
const cekRole = require("./cek-role");
const CekInputStatus = require("./cek-input-status");
const validators = require("./validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Name: ", (name) => {
  rl.question("Email: ", (email) => {
    rl.question("Phone: ", (phone) => {
      rl.question("Role : ", (roleInput) => {
        rl.question("Status : ", (statusInput) => {
          const isValid = validators({ name, email, phone, roleInput, statusInput });
          console.log(isValid);
          if (!isValid) {
            return;
            rl.close();
          }
          const status = statusInput.trim().toLowerCase() === "true";
          const data = fs.readFileSync("user.json", "utf-8");
          const parsedUsers = JSON.parse(data);
          const newData = { name, email, phone, roleInput, status };
          parsedUsers.push(newData);
          fs.writeFileSync("user.json", JSON.stringify(parsedUsers, null, 2));
          console.log("-".repeat(35));
          console.log(`Name : ${name}`);
          console.log(`Email : ${email}`);
          console.log(`Phone : ${phone}`);
          console.log(`Role : ${roleInput}`);
          console.log(`Status : ${status}`);
          console.log("User successfully created.");
          rl.close();
        });
      });
    });
  });
});

module.exports = rl;
