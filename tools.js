
const toolsScreen = document.querySelector(".tools");

const revBtn = document.querySelector("#revBtn");
const reverseScreen = document.querySelector(".reverse");
let inputRevStr = document.querySelector("#insert-string");
let outputRevStr = document.querySelector("#reversed-string");

const tempBtn = document.querySelector("#tempBtn");
const tempConverterScreen = document.querySelector(".temperature");
let celcius = document.querySelector("#celcius");
let fahrenheit = document.querySelector("#fahr");
let kelvin = document.querySelector("#kelvin");

const currBtn = document.querySelector("#currBtn");
const currConverterScreen = document.querySelector(".currency");
let usd = document.querySelector("#usd");
let pound = document.querySelector("#pound");
let euro = document.querySelector("#euro");
let kwon = document.querySelector("#kwon");
let jyen = document.querySelector("#jyen");

const backBtnTools = document.querySelector(".backBtn-tools");


//----------------------------------------------------------------------

// Temperature Converter //


function convertCelcius() {
  const C = parseInt(celcius.value);
  const F = (C * (9/5)) +32;
  const K = C + 273;

  fahrenheit.value = F;
  kelvin.value = K;
}

function convertFarherheit() {
  const F = parseInt(fahrenheit.value);
  const C = (F - 32) * 5/9;
  const K = (F + 460) * 5/9;

  celcius.value = C;
  kelvin.value = K;
}

function convertKelvin() {
  const K = parseInt(kelvin.value);
  const C = K - 273;
  const F = K * 9/5 - 460;

  celcius.value = C;
  fahrenheit.value = F;
}

function convertTemp() {
  celcius.addEventListener('input', () => convertCelcius());
  fahrenheit.addEventListener('input', () => convertFarherheit());
  kelvin.addEventListener('input', () => convertKelvin());
}

convertTemp();


//----------------------------------------------------------------------

// Reversed Text //

function reversedString() {
  const inputStr = inputRevStr.value;
  const reversedStr = inputStr.split('').reverse().join('');

  outputRevStr.value = reversedStr;
}



inputRevStr.addEventListener('input', () => reversedString());


//----------------------------------------------------------------------

// Currency Converter //

function convertUSD() {
  const D = parseInt(usd.value);
  const P = D * 0.78;
  const E = D * 0.88;
  const K = D * 1181;
  const J = D * 108;

  pound.value = P;
  euro.value = E;
  kwon.value = K;
  jyen.value = J;
}

function convertPound() {
  const P = parseInt(pound.value);
  const D = P * 1.2731;
  const E = P * 1.123;
  const K = P * 1503.62;
  const J = P * 137.77;

  usd.value = D;
  euro.value = E;
  kwon.value = K;
  jyen.value = J;
}

function convertEuro() {
  const E = parseInt(euro.value);
  const P = E * 0.889;
  const D = E * 1.1329;
  const K = E * 1338;
  const J = E * 122.6;

  pound.value = P;
  usd.value = D;
  kwon.value = K;
  jyen.value = J;
}

function convertKwon() {
  const K = parseInt(kwon.value);
  const P = K * 0.00066;
  const E = K * 0.00075;
  const D = K * 0.00085;
  const J = K * 0.09;

  pound.value = P;
  euro.value = E;
  usd.value = D;
  jyen.value = J;
}

function convertJyen() {
  const J = parseInt(jyen.value);
  const P = J * 0.00725;
  const E = J * 0.00815;
  const K = J * 10.9125;
  const D = J * 0.00924;

  pound.value = P;
  euro.value = E;
  kwon.value = K;
  usd.value = D;
}



function convertCurrency() {
  usd.addEventListener('input', () => convertUSD());
  pound.addEventListener('input', () => convertPound());
  euro.addEventListener('input', () => convertEuro());
  kwon.addEventListener('input', () => convertKwon());
  jyen.addEventListener('input', () => convertJyen());
}

convertCurrency();


//----------------------------------------------------------------------

// Main / Tools Home Page //

function showToolScreen() {
  reverseScreen.style.display = "none";
  tempConverterScreen.style.display = "none";
  currConverterScreen.style.display = "none";
  backBtnTools.style.display = "none";
  backBtn.style.visibility = "visible";
  toolsScreen.style.display = "inherit";  

  backBtn.addEventListener('click', () => {
  	toolsScreen.style.display = "none";
  	appIcons.style.display = "inherit";
  })
}




function toolsMain() {

  revBtn.addEventListener('click', () => {
  	toolsScreen.style.display = "none";
    reverseScreen.style.display = "inherit";
    backBtnTools.style.display = "inherit";
    backBtn.style.visibility = "hidden";

    backBtnTools.addEventListener('click', () => showToolScreen());
  });

  tempBtn.addEventListener('click', () => {
  	toolsScreen.style.display = "none";
    tempConverterScreen.style.display = "inherit";
    backBtnTools.style.display = "inherit";
    backBtn.style.visibility = "hidden";
  
    backBtnTools.addEventListener('click', () => showToolScreen());
  });

  currBtn.addEventListener('click', () => {
  	toolsScreen.style.display = "none";
    currConverterScreen.style.display = "inherit";
    backBtnTools.style.display = "inherit";
    backBtn.style.visibility = "hidden";
   
    backBtnTools.addEventListener('click', () => showToolScreen());
  });

}

toolsMain();



