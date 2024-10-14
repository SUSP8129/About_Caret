document.getElementById('my-button').addEventListener('click', function move(url) {
    if (confirm('Do you want to open an external site?')) {
      console.log('OK');
      location.href = url;
    } else {
      console.log('Cancel');
      return;
    }
  })
