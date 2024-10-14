function move(url) {
  if (confirm('Do you want to open an external site?')) {
    location.href = url;
  } else {
   return;
  }
}