//Dropdown
let nc = 2;
let slider = document.querySelector('.sidebarItems');

const element = document.getElementById("slider");
element.addEventListener("click", sidebarNar);

function sidebarNar() {
    if(nc == 1){
        slider.style.display = "none";
        nc = 2;
    }else if(nc == 2){
        slider.style.display = "block";
        nc = 1;
    }
};

function createPage(){
    let whackyFix = 1; //sorry i had to fix a problem and i did not feel like it so i just did this
if(whackyFix == 1){
let scrollbarWidth = window.innerWidth - document.body.clientWidth;
console.log(scrollbarWidth);

let wWindow = window.innerWidth - scrollbarWidth; // browser width
let hWindow = 0;
if(wWindow > 640 - scrollbarWidth){
    hWindow = window.innerHeight - 55; //remove 215
}else{
    hWindow = window.innerHeight - 55; //remove 215
}

console.log(hWindow, wWindow);

let dotWidth = 100;
let dotHeight = 115.469;
if(wWindow > 640 - scrollbarWidth){
    dotWidth = 130;
    //dotHeight = 147.797;
    //dotHeight = 149.797;
    dotHeight = 112.869;
}else
if(wWindow <= 640 - scrollbarWidth){
    dotWidth = 102;
    //dotHeight = 115.469;
    dotHeight = 88.619;
}
let hdots = Math.round(hWindow/dotHeight); // how many dots fit height
let wdots = Math.floor((wWindow/dotWidth-0.5)*2); // how many dots fit width
console.log("Formula for hdots",hWindow/dotHeight)


if(hdots % 2 == 0){
    wdots = Math.floor((wWindow/dotWidth)*2);
}else{
    wdots = Math.floor((wWindow/dotWidth-0.5)*2);
}
console.log("Hdots", hdots % 2);

console.log(wdots);
let numDots = hdots * wdots;

console.log(numDots, hdots, wdots);
  
let htmlDot = "<div></div>";
document.querySelector('.container').innerHTML = "";
while(numDots>0){
    document.querySelector('.container').innerHTML += htmlDot;
    numDots = numDots - 2;
}
//let importantSave = document.querySelector('.container').innerHTML;
//document.querySelector('.container').innerHTML += htmlDot;
//document.querySelector('.container').innerHTML += htmlDot;
//document.querySelector('.container').innerHTML = importantSave;
let scrollbarWidth2 = window.innerWidth - document.body.clientWidth;
console.log(scrollbarWidth2);
}


}


let wdots2 = 0;
let hdots2 = 0;


function checkSrollbarAndReloadIt(){
let scrollbarWidth = window.innerWidth - document.body.clientWidth;
console.log(scrollbarWidth);

let wWindow = window.innerWidth - scrollbarWidth; // browser width
let hWindow = 0;
if(wWindow > 640 - scrollbarWidth){
    hWindow = window.innerHeight - 55; //remove 215
}else{
    hWindow = window.innerHeight - 55; //remove 215
}

console.log(hWindow, wWindow);

let dotWidth = 100;
let dotHeight = 115.469;
if(wWindow > 640 - scrollbarWidth){
    dotWidth = 130;
    //dotHeight = 147.797;
    //dotHeight = 149.797;
    dotHeight = 112.869;
}else
if(wWindow <= 640 - scrollbarWidth){
    dotWidth = 102;
    //dotHeight = 115.469;
    dotHeight = 88.619;
}
let hdots = Math.round(hWindow/dotHeight); // how many dots fit height
let wdots = Math.floor((wWindow/dotWidth-0.5)*2); // how many dots fit width

if(hdots % 2 == 0){
    wdots = Math.floor((wWindow/dotWidth)*2);
}else{
    wdots = Math.floor((wWindow/dotWidth-0.5)*2);
}

console.log(wdots);
let numDots = hdots * wdots;

wdots2 = wdots;
hdots2 = hdots;

console.log(numDots, hdots, wdots, "numdots, hdots, wdots");
  
let htmlDot = "<div></div>";
document.querySelector('.container').innerHTML = "";
while(numDots>0){
    document.querySelector('.container').innerHTML += htmlDot;
    numDots = numDots - 2;
}
//let importantSave = document.querySelector('.container').innerHTML;
//document.querySelector('.container').innerHTML += htmlDot;
//document.querySelector('.container').innerHTML += htmlDot;
//document.querySelector('.container').innerHTML = importantSave;
let scrollbarWidth2 = window.innerWidth - document.body.clientWidth;
console.log(scrollbarWidth2);
}


function sideHexagons(){
    let scrollbarWidth = window.innerWidth - document.body.clientWidth;
console.log(scrollbarWidth);

let wWindow = window.innerWidth - scrollbarWidth; // browser width
let hWindow = window.innerHeight - 55;

console.log(hWindow, wWindow);

let dotWidth = 100;
let dotHeight = 115.469;
if(wWindow >= 640 + scrollbarWidth){
    dotWidth = 130;
    //dotHeight = 147.797;
    //dotHeight = 149.797;
    dotHeight = 112.869;
}else
if(wWindow < 640 + scrollbarWidth){
    dotWidth = 102;
    //dotHeight = 115.469;
    dotHeight = 88.619;
}
let hdots = Math.round(hWindow/dotHeight); // how many dots fit height
let wdots = Math.floor((wWindow/dotWidth-0.5)*2); // how many dots fit width

if(hdots % 2 == 0){
    wdots = Math.floor((wWindow/dotWidth)*2);
}else{
    wdots = Math.floor((wWindow/dotWidth-0.5)*2);
}

console.log(wdots);
let numDots = hdots * wdots;

wdots2 = wdots;
hdots2 = hdots;

console.log(numDots, hdots, wdots, "numdots, hdots, wdots");
  
let htmlDot = "<div></div>";
document.querySelector('.precontainer').innerHTML = "";
let numDots2 = numDots;
while(numDots>0){
    document.querySelector('.precontainer').innerHTML += htmlDot;
    numDots = numDots - 2;
}

let htmlDot2 = "<div></div>";
document.querySelector('.aftercontainer').innerHTML = "";
while(numDots2>0){
    document.querySelector('.aftercontainer').innerHTML += htmlDot2;
    numDots2 = numDots2 - 2;
}
//let importantSave = document.querySelector('.container').innerHTML;
//document.querySelector('.container').innerHTML += htmlDot;
//document.querySelector('.container').innerHTML += htmlDot;
//document.querySelector('.container').innerHTML = importantSave;
let scrollbarWidth2 = window.innerWidth - document.body.clientWidth;
console.log(scrollbarWidth2);
}


function setGamesInHexagon(){
    let c = 1;
    for (let i = 1; i < spellen.length+1; i++) {
        if(spellen[i-1].genres.includes(genresSearched[0])||spellen[i-1].genres.includes(genresSearched[1])||spellen[i-1].genres.includes(genresSearched[2])||spellen[i-1].genres.includes(genresSearched[3])){
        console.log(spellen[i-1]);
        console.log(i-1);
        document.querySelector(`.container :nth-child(${c})`).innerHTML += `<a href="${spellen[i-1].buy}"><img src="${spellen[i-1].thumb}" alt="${spellen[i-1].name}"></a>`
        c = c + 1;
        }
    }
    console.log(genresSearched,"This is in setgames");
}


Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});


function searchGame(){
    genresSearched = [document.querySelector("#centersearch").value.toLowerCase().capitalize()];
    console.log(document.querySelector("#centersearch").value);
    console.log(genresSearched);
    checkSrollbarAndReloadIt();
    setGamesInHexagon();
}
function searchGame2ElectricBoogaloo(){
    checkSrollbarAndReloadIt();
    setGamesInHexagon();
}

createPage();
checkSrollbarAndReloadIt();
setGamesInHexagon();

const babaBtn = document.querySelector('#bababooey');
babaBtn.addEventListener('click', searchGame);
const searchEnter = document.querySelector('#centersearch');
searchEnter.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {searchGame()};
});
const actionize = document.getElementById("genreAction");
actionize.addEventListener('click', genreChangeAction);
function genreChangeAction(){genresSearched = ["Action"]; searchGame2ElectricBoogaloo();};
const platformize = document.getElementById("genrePlatform");
platformize.addEventListener('click', genreChangePlatform);
function genreChangePlatform(){genresSearched = ["Platformer"]; searchGame2ElectricBoogaloo();};
const adventurize = document.getElementById("genreAdventure");
adventurize.addEventListener('click', genreChangeAdventure);
function genreChangeAdventure(){genresSearched = ["Adventure"]; searchGame2ElectricBoogaloo();};