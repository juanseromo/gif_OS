let browserInfo = {isSafari, isChrome, isFirefox, isEdge, isOpera};

document.getElementById("comenzar").onclick = function(){

    let sug = document.getElementsByClassName("suggest");
    let crg = document.getElementById("crear-guifos");
    let capt = document.getElementById("capture");

    sug[0].style.display = "none";
    crg.style.display = "none";
    capt.style.display = "block";

    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(camera) {
        var video = document.getElementById('capture-video');
        video.srcObject = camera;
        video.onloadedmetadata = function(e) {
            video.play();
        }
        recorder = RecordRTC(camera, {
            type: 'gif',
            frameRate: 10,
            quality: 2,
            width: 680,
            height: 510,
        });
    })
    .catch(function(error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
    });
}

document.getElementById("capturar").onclick = function (callback) {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(camera) {
        let video = document.getElementById('capture-video');
        video.src = camera;
        video.onloadedmetadata = function(e) {
            video.play();
        }

        recorder = RecordRTC(camera, {
            type: 'gif',
            frameRate: 1,
            quality: 1,
            width: 680,
            height: 510,
        
            onGifRecordingStarted: function(gifURL) {
                document.querySelector('h2').innerHTML = 'Gif recording started.';

                let image = document.getElementById('capture-video');
                image.srcObject = gifURL;
            },
            onGifPreview: function(gifURL) {

                let vid = document.getElementById("capture-video");
                vid.style.display = "none";

                let image = document.getElementById('preview');
                image.style.display = "block";
                image.srcObject = gifURL;
            }
        });

        recorder.startRecording()

    })
    .catch(function(error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
    }); 
    
    let capt = document.getElementById("capturar");
    let stop = document.getElementById("btn-stop");

    capt.style.display = "none";
    stop.style.display = "block";

    document.querySelector('h2').innerHTML = 'Waiting for Gif Recorder to start...';
    document.getElementById('btn-stop').disabled = false;

}


document.getElementById('btn-stop').onclick = function(blob){
  
    recorder.stopRecording();  
    document.querySelector('h2').innerHTML = 'Gif recording stopped: ' + bytesToSize(recorder.getBlob().size);

    let image = document.getElementById('preview');
    image.src = URL.createObjectURL(recorder.getBlob(blob));    
    
    let form = new FormData();
    form.append('file', recorder.getBlob(), 'myGif.gif'); 
    console.log(form.get('file'));



    let upl = document.getElementById("upload");
    //let rep = document.getElementById("repeat");
    let stop = document.getElementById("btn-stop");

    upl.style.display = "block";
    //rep.style.display = "block";
    stop.style.display = "none";
}

document.getElementById('upload').onclick = async function () {

    let formdata = new FormData();

    formdata.append("api_key", "vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz");
    formdata.append("file", recorder.getBlob(), "myGif.gif");

    let requestOptions = {
        method: "post",
        body: formdata,
        redirect: "follow"
    };

    await fetch("https://upload.giphy.com/v1/gifs", requestOptions)
        .then(response => response.json())
        .then(id => myID = id.data.id)
        .catch(console.error);

    await fetch("https://api.giphy.com/v1/gifs/" + myID + "?api_key=vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz")
        .then(response => response.json())
        .then(geturl => myURL = geturl.data.images.original.url);

    localStorage.setItem(myID, myURL);
    localStorage.getItem(myID, myURL);


    let prev = document.getElementById('gifview');
    prev.setAttribute("src", myURL);

    let gifFra = document.getElementsByClassName('gifFra');
    gifFra[0].setAttribute("src", myURL);

    
    let succ = document.getElementById("success");
    let upl = document.getElementById("upload");
    //let rep = document.getElementById("repeat");
    //let copy = document.getElementById("copy");
    //let down = document.getElementById("download");
    let sug = document.getElementsByClassName("suggest");
    let capt = document.getElementById("capture");
    let listo = document.getElementById("listo");
    let prog = document.getElementById("progress");
    
    succ.style.display = "block";
    upl.style.display = "none";
    //rep.style.display = "none";
    //copy.style.display = "none";
    //down.style.display = "none";
    sug[0].style.display = "block";
    capt.style.display = "none";
    listo.style.display = "block";
    prog.style.visibility = "visible"
    
} 

/*
var local = localStorage.getItem();
let img = document.getElementsByClassName("gifFra");

    for (let i = 0; i < img.length; i++){
        img[i].setAttribute("src", local);
    }

*/
