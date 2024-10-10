function alertFunction() {
  if (confirm('Do you want to open an external site?')) {
    return true;
  } else {
   return false;
  }
}