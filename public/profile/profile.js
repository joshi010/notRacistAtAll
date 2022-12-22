let img = document.getElementById('lel');
let rc = document.getElementById('race');
let desc = document.getElementById('description');
let race;


img.src = localStorage.getItem('image');
rc.innerHTML = '@' + localStorage.getItem('race');


switch(localStorage.getItem('race')) {
    case('m'):
        race = 'brown';
        break;

    case('b'):
        race = 'white';
        break;
    
    case('n'):
        race = 'black';
        break;
    default:
        console.log('Bastard');
}
let phrase = 'Imagine being ' + race + ' 😹😹😹';
desc.innerHTML = phrase;