const validator = require("validator");
function cekFotmatEmail(email) {
  if (validator.isEmail(email)) {
    console.log(`${email} valid`);
    return false;
  } else {
    console.log(`${email} invalid email`);
    return true;
  }
}

module.exports = cekFotmatEmail;
