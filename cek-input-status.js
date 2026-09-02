function CekInputStatus(statusInput) {
  const status = statusInput.trim().toLowerCase();
  if (status != "true" && status != "false") {
    console.log("Harap inputkan true atau false");
    return false;
  }
  return true;
}

module.exports = CekInputStatus;
