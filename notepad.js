

const notepadScreen= document.querySelector(".notepad");

const capsOn = document.getElementById("caps-on");
const capsOff = document.getElementById("caps-off");
const space = document.getElementById("space");
const enter = document.getElementById("enter");
const backspace = document.getElementById("backspace");

let output = document.querySelector(".input-keyboard");

notepadScreen.style.display = "none";

 // The variable that will contain the keyboard
const keyboardContainer = document.createElement("div");
keyboardContainer.style.display = "none";


// Function to render the keys on the keyboard. The extra lower buttons(space, enter, backspace and caps on/off) are acquaring their
// functionality through this function.

function createKeyboard() {
  const keyboard = document.createDocumentFragment();
  const keys = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l","!",
    "z", "x", "c", "v", "b", "n", "m", ",", ".", "?"
  ];

  keys.forEach(key => {
    const keyElement = document.createElement("button");

    keyElement.setAttribute("type", "button");
    keyElement.classList.add("keyboard-key");
    keyElement.textContent = key.toLowerCase();   

    capsOff.addEventListener('click', () => {
      keyElement.textContent = key.toUpperCase();
      capsOn.style.display = "inherit";
    })                                                      
       
    capsOn.addEventListener('click', () => {
      keyElement.textContent = key.toLowerCase();  
      capsOn.style.display = "none";
    })                          
   
    keyElement.addEventListener('click', () => {
      const input = keyElement.textContent
      output.textContent += input;      
    });
               
    keyboard.appendChild(keyElement);
                                                        
    if (["0", "p", "!", "?"].indexOf(key) !== -1) {              //statement to render on a new line from specific buttons 
      keyboard.appendChild(document.createElement("br"));
    }
  });

  return keyboard;
   
}


function lowerKeys() {

  space.addEventListener('click', () => {
    output.textContent += " ";
  })      

  enter.addEventListener('click', () => {
    output.textContent += "\n";
  })      

  backspace.addEventListener('click', () => {
    output.textContent = output.textContent.substring(0, output.textContent.length - 1);
  })      
}

// function to make the keyboard work. Rendering the keys on the container and pushing them to the DOM. 

function iniciateKeyboard() {
 
  const keyboardKeys = document.createElement("div");

  keyboardContainer.classList.add("keyboard-container");
  keyboardKeys.classList.add("keyboard-keys");
  keyboardKeys.appendChild(createKeyboard());

  keyboardContainer.appendChild(keyboardKeys);
  document.body.appendChild(keyboardContainer);	
}


function main() {
  lowerKeys();
  iniciateKeyboard();
}

main();


