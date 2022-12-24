let img = document.getElementById('lel');
let rc = document.getElementById('race');
let desc = document.getElementById('description');
let race;


img.src = localStorage.getItem('image');


const brownUser = () => {
    const first = ['the', 'la', 'el', 'super']
    const second = ['tacoEater', 'wallJump', 'brownie', 'notNig', 'dark', 'mencho'];
    let random = Math.floor(Math.random()* first.length);
    let random2 = Math.floor(Math.random()* second.length);
    let randGen = Math.floor(Math.random()*720);

    let rendered = `${first[random]}${second[random2]}${randGen}`;
    return rendered
}

const whiteUser = () => {
    const first = ['proudly', 'cool', 'mega', 'daily']
    const second = ['racist', 'schoolShooter', 'warStarter', 'pedoPhile', 'twinkie', 'gay'];
    let random = Math.floor(Math.random()* first.length);
    let random2 = Math.floor(Math.random()* second.length);
    let randGen = Math.floor(Math.random()*720);

    let rendered = `${first[random]}${second[random2]}${randGen}`;
    return rendered
}

const blackUser = () => {
    const first = ['monkey', 'darker', 'shadow', 'notVisible'];
    const second = ['kool-Aid', 'chickenEater', 'robber', 'NWord', 'Obama', 'watermelonLover'];
    let random = Math.floor(Math.random()* first.length);
    let random2 = Math.floor(Math.random()* second.length);
    let randGen = Math.floor(Math.random()*720);

    let rendered = `${first[random]}${second[random2]}${randGen}`;
    return rendered
}


switch(localStorage.getItem('race')) {
    case('m'):
        race = 'brown';
        localStorage.setItem('user', brownUser());
        break;

    case('b'):
        race = 'white';
        localStorage.setItem('user', whiteUser());
        break;
    
    case('n'):
        race = 'black';
        localStorage.setItem('user', blackUser());
        break;
    default:
        console.log('Bastard');
}

rc.innerHTML = '@' + localStorage.getItem('user');
let phrase = 'Imagine being ' + race + ' 😹😹😹';
desc.innerHTML = phrase;