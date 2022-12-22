let img = document.getElementById('lel');
let rc = document.getElementById('race');

img.src = localStorage.getItem('image');
rc.innerHTML = '@' + localStorage.getItem('race');
