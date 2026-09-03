const validator = require("validator");
const fs = require("fs");
const roles = require("./roles");

function Validator({ name, email, phone, roleInput, statusInput }) {
  console.log("Mulai pengecekan");

  console.log("Mulai pengecekan name");
  // cek already name
  const users = fs.readFileSync("user.json", "utf-8");
  const parsedUser = JSON.parse(users);

  const isExistName = parsedUser.some((user) => user.name == name);

  if (isExistName) {
    console.log("User already exists");
    return false;
  }

  // cek format email
  console.log("Mulai pengecekan email");
  if (!validator.isEmail(email)) {
    console.log(`${email} invalid email`);
    return false;
  }

  // cek format phone number
  console.log("Mulai pengecekan phne number");
  if (!validator.isMobilePhone(phone)) {
    console.log(`${phone} invalid ponsel nomber`);
    return false;
  }

  //cek available roles
  console.log("Mulai pengecekan role");
  const formattedRole = roleInput?.trim();
  const availableRoles = roles.includes(formattedRole);

  if (!availableRoles) {
    console.log(`Role already ${roles}`);
    return false;
  }

  // cek type status
  console.log("Mulai pengecekan status");
  console.log(typeof statusInput);
  const status = statusInput.trim().toLowerCase();
  if (status != "true" && status != "false") {
    console.log(`${statusInput} valid`);
    return false;
  }

  console.log("selesai pengecekan");

  return true;
}

module.exports = Validator;
