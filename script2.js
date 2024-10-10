document.getElementById('my-button').addEventListener('click', function() {
    if (confirm('Do you want to open an external site?')) {
      console.log('OK');
    } else {
      console.log('Cancel');
    }
  })