
const styleOne = document.querySelector("#style-one");
const styleTwo = document.querySelector("#style-two");
const styleThree = document.querySelector("#style-three");
const phoneCase = document.querySelector(".phone");
const colorCase = document.querySelector("#colorCase");
const changeColorCaseBtn = document.querySelector("#change-case p");

const imbg = document.querySelector("#imbg");
const imbg2 = document.querySelector("#imbg-t");
const imbg3 = document.querySelector("#imbg-th");
const imbg4 = document.querySelector("#imbg-f");



// functions changing the style of the grid / app screen

function changeToStyle2() {
  toolsBtn.style.backgroundColor = "white";
  toolsBtn.style.color = "black"
  bjAppBtn.style.backgroundColor = "black";
  mapsBtn.style.backgroundColor = "black";
  imgGalBtn.style.backgroundColor = "white";
  imgGalBtn.style.color = "black";
  notepadAppBtn.style.backgroundColor = "white";
  notepadAppBtn.style.color = "black"
  reactAppBtn.style.backgroundColor = "black";
  paintAppBtn.style.backgroundColor = "black";
  videoPlayerAppBtn.style.backgroundColor = "white";
  videoPlayerAppBtn.style.color = "black";

  appIcons.style.backgroundColor = "#cca300";

  styleTwo.style.color = "red";
  styleThree.style.color = "initial";
  styleOne.style.color = "initial";
}


function changeToStyle3() {
  toolsBtn.style.backgroundColor = "#e6e6e6";
  toolsBtn.style.color = "white"
  bjAppBtn.style.backgroundColor = "#e6e6e6";
  mapsBtn.style.backgroundColor = "#e6e6e6";
  imgGalBtn.style.backgroundColor = "#e6e6e6";
  imgGalBtn.style.color = "white"
  notepadAppBtn.style.backgroundColor = "#e6e6e6";
  notepadAppBtn.style.color = "white"
  reactAppBtn.style.backgroundColor = "#e6e6e6";
  paintAppBtn.style.backgroundColor = "#e6e6e6";
  videoPlayerAppBtn.style.backgroundColor = "#e6e6e6";
  videoPlayerAppBtn.style.color = "white"

  appIcons.style.backgroundColor = "#e6e6e6";

  styleThree.style.color = "red";
  styleTwo.style.color = "initial";
  styleOne.style.color = "initial";
}


function changeToStyle1() {
  toolsBtn.style.backgroundColor = "#e61919";
  toolsBtn.style.color = "white"
  bjAppBtn.style.backgroundColor = "#00e600";
  mapsBtn.style.backgroundColor = "#0080ff";
  imgGalBtn.style.backgroundColor = "#ff8000";
  imgGalBtn.style.color = "white"
  notepadAppBtn.style.backgroundColor = "#009999";
  notepadAppBtn.style.color = "white"
  reactAppBtn.style.backgroundColor = "#8000ff";
  paintAppBtn.style.backgroundColor = "#cc3300";
  videoPlayerAppBtn.style.backgroundColor = "#e600ac";
  videoPlayerAppBtn.style.color = "white"

  appIcons.style.backgroundColor = "#e6e6e6";

  styleOne.style.color = "red";
  styleThree.style.color = "initial";
  styleTwo.style.color = "initial";
}


// function changing the case / phone color 

function changeCaseColor() {
  phoneCase.style.backgroundColor = colorCase.value;
}

// functions changing the home screen background image

function changeHomeBg() {
  homeScreen.style.backgroundImage = "url('img/10.jpg')";
  homeScreen.style.backgroundSize = "276px 543px";
}

function changeHomeBg2() {
  homeScreen.style.backgroundImage = "url('img/13.jpg')";
  homeScreen.style.backgroundSize = "276px 543px";
}

function changeHomeBg3() {
  homeScreen.style.backgroundImage = "url('img/20.jpg')";
  homeScreen.style.backgroundSize = "276px 543px";
}

function changeHomeBg4() {
  homeScreen.style.backgroundImage = "url('img/18.jpg')";
  homeScreen.style.backgroundSize = "276px 543px";
}



function main() {
  styleTwo.addEventListener('click', () => changeToStyle2());
  styleThree.addEventListener('click', () => changeToStyle3());
  styleOne.addEventListener('click', () => changeToStyle1());
  changeColorCaseBtn.addEventListener('click', () => changeCaseColor());
  imbg.addEventListener('click', () => changeHomeBg());
  imbg2.addEventListener('click', () => changeHomeBg2());
  imbg3.addEventListener('click', () => changeHomeBg3());
  imbg4.addEventListener('click', () => changeHomeBg4());
}

main();