let next = document.querySelector('#next');
let back = document.querySelector('#back');
let text = document.querySelector('#text');
let image = document.querySelector('#lel');

let arr = [
    {image: './public/images/1st.png', text: 'It all started the day I was born...'},
    {image: './public/images/2.png', text: 'My dad left me for reasons I could not comprehend...'},
    {image: './public/images/3.png', text: 'My mom tried to raise me...'},
    {image: './public/images/4.png', text: 'And when everything started to look better...'},
    {image: './public/images/5.png', text: 'She died.'},
    {image: './public/images/6.png', text: 'I had nowhere to go, so I created CockLand...'},
    {image: './public/images/6.png', text: 'To make fun of you 😈'}
]

let index = 0;

next.onclick = () => {
    if(index < arr.length-1) {
        index++;
        text.innerHTML = arr[index].text;
        image.src = arr[index].image;
        next.innerHTML = 'NEXT >'
    } else {
        next.innerHTML = 'CONTINUE';
        window.open('./picture.html', '_self');
    }

}

back.onclick = () => {
    if(index !== 0) {
        index--;
        text.innerHTML = arr[index].text;
        image.src = arr[index].image;
        next.innerHTML = 'NEXT >'
    } else {
        window.open('./index.html', '_self');
    }
}

