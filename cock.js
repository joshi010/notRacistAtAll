let video = document.querySelector('#video');
let canvas = document.querySelector('#canvas');
let btn = document.querySelector('#boton');


function takePicture() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    console.log('lel');
}

async function lel() {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
}



btn.onclick = () => {
    takePicture();
}

lel();
window.onload = () => {
    takePicture();
}
