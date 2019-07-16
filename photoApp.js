
const indiArrayThai = Array.prototype.slice.call(document.querySelectorAll(".thai-indicators > li"));
const textArrayThai = Array.prototype.slice.call(document.querySelectorAll(".info-thai > p"));
const textArrayThai2 = Array.prototype.slice.call(document.querySelectorAll(".info-thai-second > p"));

const indiArrayGre = Array.prototype.slice.call(document.querySelectorAll(".greece-indicators > li"));
const textArrayGre = Array.prototype.slice.call(document.querySelectorAll(".info-gre > p"));
const textArrayGre2 = Array.prototype.slice.call(document.querySelectorAll(".info-gre-second > p"));

const indiArrayOther = Array.prototype.slice.call(document.querySelectorAll(".other-indicators > li"));
const textArrayOther = Array.prototype.slice.call(document.querySelectorAll(".info-other > p"));
const textArrayOther2 = Array.prototype.slice.call(document.querySelectorAll(".info-other-second > p"));

textArrayThai[0].style.opacity = '1';
textArrayGre[0].style.opacity = '1';
textArrayOther[0].style.opacity = '1';



function showThaiText() {

	indiArrayThai.forEach((elementI, indexI) => { if ([0,1].indexOf(indexI) >= 0) {
	  elementI.addEventListener("click", function() { 
	  	textArrayThai[0].style.opacity = '1';
	    textArrayThai.forEach((elementT, indexT) => { if ([1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	    textArrayThai2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}}) }) }     
	});

	indiArrayThai.forEach((elementI, indexI) => { if ([2,3,4,5].indexOf(indexI) >= 0) {
	  elementI.addEventListener("click", function() { 
	    textArrayThai[1].style.opacity = '1';
	    textArrayThai.forEach((elementT, indexT) => { if ([0,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	    textArrayThai2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}}) }) }
	});

	indiArrayThai[6].addEventListener("click", function() {
		textArrayThai[2].style.opacity = '1';
	    textArrayThai.forEach((elementT, indexT) => { if ([0,1,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	    textArrayThai2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	});

	indiArrayThai.forEach((elementI, indexI) => { if ([7,8].indexOf(indexI) >= 0) {
	  elementI.addEventListener("click", function() { 
	    textArrayThai[3].style.opacity = '1';
	    textArrayThai.forEach((elementT, indexT) => { if ([0,1,2,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	    textArrayThai2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}}) }) }
	});

	indiArrayThai.forEach((elementI, indexI) => { if ([9,10].indexOf(indexI) >= 0) {
	  elementI.addEventListener("click", function() { 
	    textArrayThai[4].style.opacity = '1';
	    textArrayThai.forEach((elementT, indexT) => { if ([0,1,2,3,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	    textArrayThai2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}}) }) }
	});

	indiArrayThai[11].addEventListener("click", function() {
		textArrayThai[5].style.opacity = '1';
	    textArrayThai.forEach((elementT, indexT) => { if ([0,1,2,3,4,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	    textArrayThai2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  });

	indiArrayThai.forEach((elementI, indexI) => { if ([12,13].indexOf(indexI) >= 0) {
	  elementI.addEventListener("click", function() { 
	    textArrayThai[6].style.opacity = '1';
	    textArrayThai.forEach((elementT, indexT) => { if ([0,1,2,3,4,5].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	    textArrayThai2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}}) }) }
	});

	indiArrayThai[14].addEventListener("click", function() {
	  textArrayThai2[0].style.opacity = '1';
	  textArrayThai.forEach((elementT, indexT) => { if ([0,1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayThai2.forEach((elementT, indexT) => { if ([1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	});

	indiArrayThai[15].addEventListener("click", function() {
	  textArrayThai2[1].style.opacity = '1';
	  textArrayThai.forEach((elementT, indexT) => { if ([0,1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayThai2.forEach((elementT, indexT) => { if ([0,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	});

	indiArrayThai[16].addEventListener("click", function() {
	  textArrayThai2[2].style.opacity = '1';
	  textArrayThai.forEach((elementT, indexT) => { if ([0,1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayThai2.forEach((elementT, indexT) => { if ([0,1,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	});

	indiArrayThai[17].addEventListener("click", function() {
	  textArrayThai2[3].style.opacity = '1';
	  textArrayThai.forEach((elementT, indexT) => { if ([0,1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayThai2.forEach((elementT, indexT) => { if ([0,1,2].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	});

};



function showGreText() {

	indiArrayGre[0].addEventListener("click", () => { 
	  textArrayGre[0].style.opacity = '1';
	  textArrayGre.forEach((elementT, indexT) => { if ([1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayGre2.forEach((elementT, indexT) => { if ([0,1].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

	indiArrayGre[1].addEventListener("click", () => { 
	  textArrayGre[1].style.opacity = '1';
	  textArrayGre.forEach((elementT, indexT) => { if ([0,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayGre2.forEach((elementT, indexT) => { if ([0,1].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

	indiArrayGre[2].addEventListener("click", () => { 
	  textArrayGre[2].style.opacity = '1';
	  textArrayGre.forEach((elementT, indexT) => { if ([0,1,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayGre2.forEach((elementT, indexT) => { if ([0,1].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

	indiArrayGre[3].addEventListener("click", () => { 
	  textArrayGre[3].style.opacity = '1';
	  textArrayGre.forEach((elementT, indexT) => { if ([0,1,2,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayGre2.forEach((elementT, indexT) => { if ([0,1].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

	indiArrayGre[4].addEventListener("click", () => { 
	  textArrayGre[4].style.opacity = '1';
	  textArrayGre.forEach((elementT, indexT) => { if ([0,1,2,3,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayGre2.forEach((elementT, indexT) => { if ([0,1].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

	indiArrayGre.forEach((elementI, indexI) => { if ([5,6,7].indexOf(indexI) >=0) {
	  elementI.addEventListener('click', () => {
	    textArrayGre[5].style.opacity = '1';
	    textArrayGre.forEach((elementT, indexT) => { if ([0,1,2,3,4,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	    textArrayGre2.forEach((elementT, indexT) => { if ([0,1].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}}) }) 
	}});

	indiArrayGre[8].addEventListener("click", () => { 
	  textArrayGre[6].style.opacity = '1';
	  textArrayGre.forEach((elementT, indexT) => { if ([0,1,2,3,4,5].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayGre2.forEach((elementT, indexT) => { if ([0,1].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

	indiArrayGre.forEach((elementI, indexI) => { if ([9,10].indexOf(indexI) >=0) {
	  elementI.addEventListener('click', () => {
	    textArrayGre2[0].style.opacity = '1';
	    textArrayGre.forEach((elementT, indexT) => { if ([0,1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	    textArrayGre2.forEach((elementT, indexT) => { if ([1].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}}) }) 
	}});

    indiArrayGre.forEach((elementI, indexI) => { if ([11,12].indexOf(indexI) >=0) {
	  elementI.addEventListener('click', () => {
	    textArrayGre2[1].style.opacity = '1';
	    textArrayGre.forEach((elementT, indexT) => { if ([0,1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	    textArrayGre2.forEach((elementT, indexT) => { if ([0].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}}) }) 
	}});
};



function showOtherText() {

	indiArrayOther[0].addEventListener("click", () => { 
	  textArrayOther[0].style.opacity = '1';
	  textArrayOther.forEach((elementT, indexT) => { if ([1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayOther2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

	indiArrayOther[1].addEventListener("click", () => { 
	  textArrayOther[1].style.opacity = '1';
	  textArrayOther.forEach((elementT, indexT) => { if ([0,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayOther2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

    indiArrayOther[2].addEventListener("click", () => { 
	  textArrayOther[2].style.opacity = '1';
	  textArrayOther.forEach((elementT, indexT) => { if ([0,1,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayOther2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

    indiArrayOther[3].addEventListener("click", () => { 
	  textArrayOther[3].style.opacity = '1';
	  textArrayOther.forEach((elementT, indexT) => { if ([0,1,2,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayOther2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

    indiArrayOther[4].addEventListener("click", () => { 
	  textArrayOther[4].style.opacity = '1';
	  textArrayOther.forEach((elementT, indexT) => { if ([0,1,2,3,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayOther2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

	indiArrayOther[5].addEventListener("click", () => { 
	  textArrayOther[5].style.opacity = '1';
	  textArrayOther.forEach((elementT, indexT) => { if ([0,1,2,3,4,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayOther2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

    indiArrayOther[6].addEventListener("click", () => { 
	  textArrayOther[6].style.opacity = '1';
	  textArrayOther.forEach((elementT, indexT) => { if ([0,1,2,3,4,5].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayOther2.forEach((elementT, indexT) => { if ([0,1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

	indiArrayOther[7].addEventListener("click", () => { 
	  textArrayOther2[0].style.opacity = '1';
	  textArrayOther.forEach((elementT, indexT) => { if ([0,1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayOther2.forEach((elementT, indexT) => { if ([1,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

	indiArrayOther[8].addEventListener("click", () => { 
	  textArrayOther2[1].style.opacity = '1';
	  textArrayOther.forEach((elementT, indexT) => { if ([0,1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayOther2.forEach((elementT, indexT) => { if ([0,2,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

    indiArrayOther[9].addEventListener("click", () => { 
	  textArrayOther2[2].style.opacity = '1';
	  textArrayOther.forEach((elementT, indexT) => { if ([0,1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayOther2.forEach((elementT, indexT) => { if ([0,1,3].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});

    indiArrayOther[10].addEventListener("click", () => { 
	  textArrayOther2[3].style.opacity = '1';
	  textArrayOther.forEach((elementT, indexT) => { if ([0,1,2,3,4,5,6].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})
	  textArrayOther2.forEach((elementT, indexT) => { if ([0,1,2].indexOf(indexT) >= 0) {elementT.style.opacity = '.3'}})    
	});
};



function main() {
  showThaiText();
  showGreText();
  showOtherText();
}

main();
