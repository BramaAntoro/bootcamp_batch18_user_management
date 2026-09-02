const roles = require("./roles");
function cekRole(roleInput) {
  const availableRoles = roles.some((role) => role == roleInput);

  if (!availableRoles) {
    console.log(`Role already ${roles}`);
    return false;
  }
  return true;
}

module.exports = cekRole;
