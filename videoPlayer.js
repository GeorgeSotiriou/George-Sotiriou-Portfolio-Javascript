
const video1 = document.querySelector('#vid-one');
const video2 = document.querySelector('#vid-two');

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');

const thumb1Btn = document.querySelector('#thumb-one img');
const thumb2Btn = document.querySelector('#thumb-two img');

const videoPlayer = document.querySelector('.video-player');
const videoGallery = document.querySelector('.video-gallery');

backBtnVid = document.querySelector('.backBtn-vid');


let video;


function main() {

  thumb1Btn.addEventListener('click', () => {
    video = video1;
    video.muted = true;

    videoGallery.style.display = "none";
    videoPlayer.style.display = "inherit";
    video1.style.display = "inherit";
    video2.style.display = "none";
    playVideo();

    playBtn.style.visibility = "visible";
    pauseBtn.style.visibility = "hidden";

    backBtn.style.visibility = "hidden";
    backBtnVid.style.display = "inherit";

    backBtnVid.addEventListener('click', () => {
      videoGallery.style.display = "inherit";
      videoPlayer.style.display = "none";
      backBtn.style.visibility = "visible";
      backBtnVid.style.display = "none"; 
    }) 

  })


  thumb2Btn.addEventListener('click', () => {
    video = video2;
    video.muted = true;

    videoGallery.style.display = "none";
    videoPlayer.style.display = "inherit";
    video2.style.display = "inherit";
    video1.style.display = "none";
    playVideo();

    playBtn.style.visibility = "visible";
    pauseBtn.style.visibility = "hidden";

    backBtn.style.visibility = "hidden";
    backBtnVid.style.display = "inherit";

    backBtnVid.addEventListener('click', () => {
      videoGallery.style.display = "inherit";
      videoPlayer.style.display = "none";
      backBtn.style.visibility = "visible"; 
      backBtnVid.style.display = "none";
    }) 

  })

}


function playVideo() {

  playBtn.addEventListener('click', () => {
    video.play();
    playBtn.style.visibility = "hidden";
    pauseBtn.style.visibility = "visible";
  })

  pauseBtn.addEventListener('click', () => {
    video.pause();
    pauseBtn.style.visibility = "hidden";
    playBtn.style.visibility = "visible";
  })

  video.addEventListener('ended', () => {
    pauseBtn.style.visibility = "hidden";
    playBtn.style.visibility = "visible";
  })

}

main();