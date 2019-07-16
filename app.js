
const screen = document.querySelector(".screen");

// slider to unlock the screen
const slider = document.getElementById("myRange");
const sliderScreen = document.querySelector(".slider-screen");

// home screen
const homeScreen = document.querySelector(".home-screen");
const settingsBtn = document.querySelector("#settings")
const settingScreen = document.querySelector(".settings-screen");
const appScreenBtn = document.getElementById("app-screen");
const timeMainScreen = document.querySelector(".time");
const menuBottom = document.querySelector(".wrapper");

// app screen
const appIcons = document.querySelector(".app-Mscreen");

//tools
const toolsBtn = document.getElementById("first-app");

// blackjack 
const bjAppBtn = document.getElementById("second-app");
const table = document.querySelector(".table");
const result = document.querySelector(".result");
const blackjackApp = document.querySelector(".blackjack-app");
const BJactionBtn = document.querySelector(".BJ-action-btn");

// google maps
const mapsBtn = document.getElementById("third-app");
const googleMaps = document.getElementById("map");

// image-gallery
const imgGalBtn = document.getElementById("fourth-app");
let defaultImg = document.querySelector("#default");
const imgGallery = document.querySelector(".image-gallery");
let imageGrid = document.querySelectorAll(".image-grid img");
const imageClicked = document.querySelector(".image-gallery");

// button to exit full screen in image gallery
const deleteBtn = document.querySelector(".delete-btn");
                                         
// notepad
const notepadAppBtn = document.getElementById("fifth-app");

//react app
const reactAppBtn = document.getElementById("sixth-app");
const reactApp = document.getElementById("reactQ");

//paint
const paintAppBtn = document.getElementById("seventh-app");
const paintApp = document.getElementById("paint");

//video player
const videoPlayerAppBtn = document.getElementById("eighth-app");
const vidz = document.querySelector(".vidz");

//generic back button
const backBtn = document.querySelector(".back-btn");




//---------------------------------------------------------------------------------------

// function toggling home screen after the user scrolls the slider all the way to the right

function slider_showMainScreen() {
  if (slider.value == 100) {
    sliderScreen.style.display = "none";
    homeScreen.style.display = "inherit";
    }
}


// function to show main screen. Making it appear while hiding all previous elements. This is the core
// principle that exists in all of the below functions

function showMainScreen() {
  appIcons.style.display = "none";
  homeScreen.style.display = "inherit";
  settingScreen.style.display = "none";
  backBtn.style.visibility = "hidden";
}



//---------------------------------------------------------------------------------------

// most importand function in this file, since the app screen is the screen where users enter 
// the various apps and return from them

function showAppScreen() {
  appIcons.style.display = "inherit";
  homeScreen.style.display = "none";
  backBtn.style.visibility = "visible";
  blackjackApp.style.display = "none";
  googleMaps.style.display = "none";
  backBtn.style.position = "absolute";
  backBtn.style.left = '125px';
  backBtn.style.color = "red";
  imgGallery.style.visibility = "hidden";
  notepadScreen.style.display = "none";
  keyboardContainer.style.display = "none";
  reactApp.style.display = "none";
  paintApp.style.display = "none";
  videoGallery.style.display = "none";
  toolsScreen.style.display = "none";

  backBtn.addEventListener('click', () => showMainScreen());
}



//---------------------------------------------------------------------------------------
//Tools App section//

function showTools() {
  toolsScreen.style.display = "inherit"
  appIcons.style.display = "none";
  backBtn.style.visibility = "visible";

  backBtn.addEventListener('click', () => {
    toolsScreen.style.display = "none";

    showAppScreen();
  });
}


//---------------------------------------------------------------------------------------
//Blackjack App section//

function showBJ(){
  blackjackApp.style.display = "inherit";
  appIcons.style.display = "none";
  backBtn.style.position = "absolute";
  backBtn.style.left = '235px';

  backBtn.addEventListener('click', () => showAppScreen());
}


//---------------------------------------------------------------------------------------
//Google Maps section//

function initMap() {
  let location = {lat:34.416667, lng: 129.333333};
  let map = new google.maps.Map(document.getElementById("map"), {
  	zoom: 6, 
  	center: location,
    fullscreenControl: false
  });
}

function showGoogleMaps() {
  googleMaps.style.display = "inherit";
  appIcons.style.display = "none";

  backBtn.addEventListener('click', () => showAppScreen());
}


//---------------------------------------------------------------------------------------
//Image Gallery section//

function showImgGallery() {
  imgGallery.style.visibility = "visible";
  appIcons.style.display = "none";
  backBtn.style.visibility = "visible";
  backBtn.style.color = "red";
  defaultImg.style.visibility = "hidden";
  deleteBtn.style.display = "none";

  backBtn.addEventListener('click', () => showAppScreen());
}

function imgFullScreen() {
imageGrid.forEach(img => img.addEventListener('click', e => (defaultImg.src = e.target.src)));
}

imgFullScreen();

function showImgFullScrn() {
defaultImg.style.visibility = "visible";
deleteBtn.style.display = "inherit";
backBtn.style.visibility = "hidden";
screen.style.backgroundColor = "black";
}

imageClicked.addEventListener('click', () => showImgFullScrn());


//---------------------------------------------------------------------------------------
//Notepad App section//



function showNotepadApp() {
  notepadScreen.style.display = "inherit";
  keyboardContainer.style.display = "inherit";
  appIcons.style.display = "none";
  //backBtn.style.visibility = "visible";
  backBtn.addEventListener('click', () => showAppScreen());
  
  
}


//---------------------------------------------------------------------------------------
//React User Evaluation section//

function showReactApp() {
  reactApp.style.display = "inherit";
  appIcons.style.display = "none";

  backBtn.addEventListener('click', () => showAppScreen());
}


//---------------------------------------------------------------------------------------
// Paint App section//

function showPaintApp() {
  paintApp.style.display = "inherit";
  appIcons.style.display = "none";

  backBtn.addEventListener('click', () => showAppScreen());
}


//---------------------------------------------------------------------------------------
// Video Player App section//

function showVideoPlayerApp() {
  videoGallery.style.display = "inherit";
  appIcons.style.display = "none";
  backBtn.addEventListener('click', () => {
     showAppScreen();
  });
}


//---------------------------------------------------------------------------------------
// Settings section

function showSettings() {
  settingScreen.style.display = "inherit";
  homeScreen.style.display = "none";

  backBtn.style.visibility = "visible";

  backBtn.addEventListener('click', () => showMainScreen());
}



//---------------------------------------------------------------------------------------
//Event Listeners section / Main function//

function main() {

  toolsBtn.addEventListener('click', () => showTools());
  bjAppBtn.addEventListener('click', () => showBJ());
  appScreenBtn.addEventListener('click', () => showAppScreen());
  slider.addEventListener('mouseup', () => slider_showMainScreen());
  mapsBtn.addEventListener('click', () => showGoogleMaps());
  imgGalBtn.addEventListener('click', () => showImgGallery());
  deleteBtn.addEventListener('click', () => showImgGallery());
  notepadAppBtn.addEventListener('click', () => showNotepadApp());
  reactAppBtn.addEventListener('click', () => showReactApp());
  paintAppBtn.addEventListener('click', () => showPaintApp());
  videoPlayerAppBtn.addEventListener('click', () => showVideoPlayerApp());
  settingsBtn.addEventListener('click', () => showSettings());
}

main();