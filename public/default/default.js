let firstBtn = document.querySelector('#welcum');
let storyPath = './story.html';

const linkRederect = (link) => {
    window.open(link, '_self');
}

firstBtn.onclick = () => {
    linkRederect(storyPath);
}

