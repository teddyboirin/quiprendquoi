let user = document.getElementById('author');

// on enregistre dans le localstorage
localStorage.setItem('user', user.value);

document.getElementById('author').value = localStorage.getItem('user');