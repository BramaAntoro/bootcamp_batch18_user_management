console.log("User Management System");
console.log("\n");

const roles = ["USER", "ADMIN"];

// let user = {
//   name: "John Doe",
//   email: "john@example.com",
//   phone: "081234567890",
//   role: roles[0],
//   status: true,
// };

// let admin = {
//   name: "John Doe Admin",
//   email: "joh`n@example.com",
//   phone: "081234567890",
//   role: roles[1],
//   status: true,
// };

let data = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "081234567890",
    role: roles[0],
    status: false,
  },
  {
    name: "John Doe Aktif",
    email: "john@example.com",
    phone: "081234567890",
    role: roles[0],
    status: true,
  },
  {
    name: "John Doe Admin",
    email: "joh`n@example.com",
    phone: "081234567890",
    role: roles[1],
    status: true,
  },
];

const greetUser = (user) => {
  if (!user.status) {
    console.log(`User ${user.name} non-active`);
    return;
  }

  console.log("--------------------");
  console.log(`Name  : ${user.name}`);
  console.log(`Email : ${user.email}`);
  console.log(`Phone : ${user.phone}`);
  console.log(`Role  : ${user.role}`);
  console.log(`Status: Active`);

  if (user.role === "ADMIN") {
    console.log(`Welcome back, Admin ${user.name}`);
  } else {
    console.log(`Hello ${user.name}`);
  }
};
data.forEach(greetUser);