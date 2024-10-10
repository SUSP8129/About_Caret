document.getElementById('my-button').addEventListener('click', function() {
    if (confirm('Remove token?')) {
      console.log('OK');
    } else {
      console.log('Cancel');
    }
  })