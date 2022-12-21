let take = document.querySelector('#click-photo');
let context = canvas.getContext('2d');
let square = document.querySelector('.square');
let rgbText = document.querySelector('.rgb');

async function startCamera(){
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
    
}

let pixels = context.data;

function identRace() {
    let pixel = context.getImageData(160, 120, canvas.width, canvas.height);
    let pixel1 = context.getImageData(162, 120, canvas.width, canvas.height);
    let pixel2 = context.getImageData(158, 120, canvas.width, canvas.height);

    let arr = [pixel, pixel1, pixel2];
    let arrData = [];

    arr.forEach(x => {
        arrData.push(x.data);
    })

    let first = (arrData[0][0] + arrData[1][0] + arrData[2][0])/3;
    let second = (arrData[0][1] + arrData[1][1] + arrData[2][1])/3;
    let third = (arrData[0][2] + arrData[1][2] + arrData[2][2])/3;



    let rgb = `rgb(${first.toFixed(0)}, ${second.toFixed(0)}, ${third.toFixed(0)})`;
    
    rgbText.innerHTML = rgb;
    return rgb;
}

take.onclick = () => {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let img_url = canvas.toDataURL('image/jpeg');
    video.style.display = 'none';
    canvas.style.display = 'block';
    let rgb = identRace();
    square.style.backgroundColor = rgb;
    // console.log(img_url);
}

startCamera();