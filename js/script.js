//Js for the menu button
const navTrigger = document.querySelector('.nav-trigger');
navTrigger.addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.toggle('is-active');
}, false);



//////js for my portfolio slideout boxes
//This is going to open my portfolio peices based off the data attribute I sent for each peice. 
function myScript(x){
    const selected_portfolio= x.getAttribute('data-type');
    console.log(selected_portfolio);
    
    document.querySelector('body').className="freeze";
    document.querySelector('.portfolio-overlay').className +=" portfolio-overlay-visable";
    document.querySelector(`.portfolio-piece.${selected_portfolio}`).className += " slide-in";
    document.querySelector('.portfolio-close').className += " is-visible";
}
//This is going to close the portfolio peices 
document.querySelector('.portfolio-overlay, .portfolio-close is-visible').addEventListener('click', closePortfolioSelection);
document.querySelector('.portfolio-close').addEventListener('click', closePortfolioSelection);
function closePortfolioSelection(){
    document.querySelector('body').classList.remove("freeze");
    document.querySelector('.portfolio-overlay').classList.remove("portfolio-overlay-visable");
    document.querySelector('.portfolio-piece.slide-in').classList.remove("slide-in");
    document.querySelector('.portfolio-close').classList.remove("is-visible");
};
//this is closing the light box
document.querySelector('.lightBox-close').addEventListener('click', closeLightBox);
document.querySelector('.lightBoxWrapper').addEventListener('click', closeLightBox);
function closeLightBox(){
    document.querySelector('.lightBox-close').classList.remove("is-visible");
    document.querySelector('.lightBoxWrapper').classList.remove("showLightBox");
};


document.addEventListener('keydown', logKey);
function logKey(e) {
    //console.log(e);
    if (e.key == "Escape") {
        const lightBoxIsOpen = document.querySelector('div.lightBoxWrapper').classList.contains("showLightBox");
        const onlyPortfolioIsOpen = document.querySelector('.portfolio-overlay').classList.contains("portfolio-overlay-visable");
        if (lightBoxIsOpen === true) {
            closeLightBox();
        }if(onlyPortfolioIsOpen === true && lightBoxIsOpen === false){
            closePortfolioSelection();
        }else{};
    };
};

////All my portfolio peices info. Hope soon to transfer this info into a headless cms platform
const portP =[{
    portfolio_id : "0",
    portfolio_title : "4moms - Shopify",
    portfolio_imageUrl : "img/tpfCapture.jpg",
    portfolio_githubUrl: "http://www.tapolcifoundation.org/",
    portfolio_url : "http://www.tapolcifoundation.org/",
    portfolio_copy : "For the Tapolci Foundation website, I worked with a team and was responsible for all the front-end related tasks. I made sure the website was fully responsive and took care of other things like typography, creating custom graphics, and taking the photographs that were shown on the website.",
    portfolio_talent : ["talent4", "talent5","talent6"],
    portfolio_screenShots : {
        screenShot: "img/old4momsDesktop.jpg",
        screenShot2: "img/old4momsDesktop.jpg",
        screenShot3: "img/old4momsDesktop.jpg",
        screenShot4: "img/old4momsDesktop.jpg"

    }
},{
    portfolio_id : "1",
    portfolio_title : "4moms - BigComm",
    portfolio_imageUrl : "img/battersboxScreenGrab.JPG",
    portfolio_githubUrl: "",
    portfolio_url : "http://thebattersbox.letsreedesign.com/",
    portfolio_copy : "The Batters Box is a fictitious restaurant that I came up with. I first developed the website statically then converted it over to a WordPress platform. This website is my playground for WordPress development, whenever I learn something new about WordPress this will be the place where I try it out. Right now this website use plugins such as ACF, contact form 7, icegram, and The Events Calendar.",
    portfolio_talent : ["talent14", "talent15","talent16"],
    portfolio_screenShots : {
        screenShot: "img/svgicons/logo.svg"

    }
},{
    portfolio_id : "2",
    portfolio_title : "Javascript Apps",
    portfolio_imageUrl : "img/goingDeeperScreenGrab.jpg",
    portfolio_githubUrl: "",
    portfolio_url : "https://goingdeeperconference.letsreedesign.com/",
    portfolio_copy : "This project needed a quick turn-a-around time of two weeks, due to the event quickly approaching. So with a short timeline, I used webflow to allow me to produce a website demo within a day. After I got the go-ahead form the demo, I worked on completing the static website. Phase two of this project was converting the static website into a WordPress website. With the use of Advanced Custom Fields, I gave my client complete control of all their content, on the website.",
    portfolio_talent : ["talent24", "talent25","talent26"],
    portfolio_screenShots : {
        screenShot: "img/svgicons/logo.svg",
        screenShot2: "img/goingDeeperScreenGrab.jpg"

    }
},{
    portfolio_id : "3",
    portfolio_title : "The Batters Box",
    portfolio_imageUrl : "img/goingDeeperScreenGrab.jpg",
    portfolio_githubUrl: "",
    portfolio_url : "https://goingdeeperconference.letsreedesign.com/",
    portfolio_copy : "This project needed a quick turn-a-around time of two weeks, due to the event quickly approaching. So with a short timeline, I used webflow to allow me to produce a website demo within a day. After I got the go-ahead form the demo, I worked on completing the static website. Phase two of this project was converting the static website into a WordPress website. With the use of Advanced Custom Fields, I gave my client complete control of all their content, on the website.",
    portfolio_talent : ["talent34", "talent35","talent36"],
    portfolio_screenShots : {
        screenShot: "img/svgicons/logo.svg",
        screenShot2: "img/goingDeeperScreenGrab.jpg"

    }
},{
    portfolio_id : "4",
    portfolio_title : "Going Deeper",
    portfolio_imageUrl : "img/battersboxScreenGrab.JPG",
    portfolio_githubUrl: "",
    portfolio_url : "http://thebattersbox.letsreedesign.com/",
    portfolio_copy : "The Batters Box is a fictitious restaurant that I came up with. I first developed the website statically then converted it over to a WordPress platform. This website is my playground for WordPress development, whenever I learn something new about WordPress this will be the place where I try it out. Right now this website use plugins such as ACF, contact form 7, icegram, and The Events Calendar.",
    portfolio_talent : ["talent44", "talent45","talent46"],
    portfolio_screenShots : {
        screenShot: "img/svgicons/logo.svg",
        screenShot2: "img/goingDeeperScreenGrab.jpg"

    }             
}];

console.log(portP[1].portfolio_hasurl);


//////js that is displaying my portfolio cards
const porfolioCards = portP.map(x =>
`<li data-type="portfolio-${x.portfolio_id}" onclick="myScript(this);">
    <a data-type="portfolio-${x.portfolio_id}">
        <div class="portPeicePreview" style="background-image: url(../${x.portfolio_imageUrl});">
            <div class="portPeiceTitle">
                <h3>${x.portfolio_title}</h3>
                <button data-type="member-${x.portfolio_id}" onclick="myScript(this);">More Info</button>
            </div>
        </div>
    </a>
</li>`).join('');
document.querySelector('#portPPP').innerHTML= porfolioCards;


function lightBox(lightboxImage){
    console.log("this is the lightbox function");
    console.log(lightboxImage);
    let imgURL = lightboxImage.getAttribute('data-src');
    const lightBoxWrapper = document.querySelector('.lightBoxWrapper');
    const theLightBox = document.querySelector('.lightBox');
    theLightBox.innerHTML= `
    <img src="${imgURL}">
    `;
    lightBoxWrapper.classList.add("showLightBox");
    document.querySelector('.lightBox-close').classList.add("is-visible");



};




//////js that is filling out the info for the portfolio slide-out boxes
const porfolioBios = portP.map(function (x){
const talentList = x.portfolio_talent;
//Mapping through the talent list array
const talentListMapped = talentList.map(talent => `<p>${talent}</p>`).join('');
// Storeing the object values inside the portfolio_screenShots in this const
const screenShotList = Object.values(x.portfolio_screenShots);
const screenShotImages = screenShotList.map( imgURL => `
<div onclick="lightBox(this);" data-src="${imgURL}" class="screenshotOverlayContents">
    <div class="screenshotOverlay"></div>
    <img class="screenshotImage"  src="${imgURL}">
    <div class="screenshotContent fadeIn-bottom">
        <img class="screenshotOverlayImage" src="img/svgicons/006-cv-white.png">
        <p>Click To View More</p>
    </div>
</div>`).join('');

return `
<div class="portfolio-piece portfolio-${x.portfolio_id}">
    <div class="portfolio-piece-content">
        <div class="portfolio-content">
            <h2>
                ${x.portfolio_title}
            </h2>
            <p>
                ${x.portfolio_copy}
            </p>
        </div>
        <div class="talentSection">
            <h3>
                Talent Showcased:
            </h3>
            <div>
                ${talentListMapped}
            </div>
        </div>
        <div class="linkSection">
            <button href="${x.portfolio_url}" target="_blank" class="button urlBtn text-center">
                Launch Site
            </a>
            <button href="${x.portfolio_githubUrl}" target="_blank" class="button githubBtn text-center">
                View Code
            </a>
        </div>
        <div class="portfolioImages">
            ${screenShotImages}
        </div>
    </div>
</div>
` 
}).join('');
document.querySelector('#portfolioBios').innerHTML= porfolioBios;
portP.map( function (x){
    const portfolioNumber = x.portfolio_id;
    const p = portfolioNumber.toString();
    if(x.portfolio_url == false){
        const linkBtns = document.getElementsByClassName("urlBtn")[p];
        linkBtns.classList.add("nolink");
     };
     if(x.portfolio_githubUrl == false){
        const linkBtns = document.getElementsByClassName("githubBtn")[p];
        linkBtns.classList.add("nolink");
     };
});


//////js for the stick nav on scroll
//Intersection Observer
let nav = document.querySelector('.navbar');
let hero = document.querySelector('.heroBackgroundImage');
const navHandler = (entries) => {
    console.log(entries)
    if (!entries[0].isIntersecting) {
        nav.classList.add('navbar-sticky')
    } else {
        nav.classList.remove('navbar-sticky')
    }
}
const observer = new window.IntersectionObserver(navHandler)
// this is watching the hero banner
observer.observe(hero)

 

window.addEventListener('scroll', function(e){
    const scrolled = window.pageYOffset;
    const fname = document.querySelector('.fristName');
    fname.style.transform = `translate3d(${scrolled * 0.5}px, 0px , 0px )`;
    const lname = document.querySelector('.lastName');
    lname.style.transform = `translate3d(-${scrolled * 0.5}px, 0px , 0px )`;
    const title = document.querySelector('.mytitle');
    title.style.transform = `translate3d(0px , -${scrolled * 0.75}px, 0px )`;
    const logo = document.querySelector('.standAlonelogo');
    logo.style.transform = `translate3d(0px, ${scrolled * 1.25}px, 0px )`;
});











//const form = document.getElementById('form');
const formSub = document.getElementById('formSubmit');
const name = document.getElementById('name_form');
const email = document.getElementById('email_form');
const message = document.getElementById('message_form');
formSub.addEventListener('click', function (e){
     e.preventDefault();
     checkInputs();
 });

//Im thinking there should be a better way to write this. 
document.querySelector('#name_form').addEventListener('keydown', clearError);
document.querySelector('#email_form').addEventListener('keydown', clearError);


function charCount(x){
    const textLength = x.value.length;
    document.querySelector('#numberOfChar').innerText=textLength;
    if(textLength > 140){
        setErrorMessage(message, 'Your message is to long.')
    }else{
        message.parentElement.classList.remove('error');
    }
};


function checkInputs() {
    event.preventDefault();
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim(); 

if(nameValue === ""){
    setErrorMessage(name, 'name can not be blank')
    name.value="";
};
if(emailValue === ""){
    setErrorMessage(email, 'email can not be blank')
    email.value="";
}else if (!isEmail(emailValue)) {
    setErrorMessage(email, 'email must be valid')
};
if(messageValue === ""){
    setErrorMessage(message, 'name can not be blank')
    name.value="";
};
};



















function setErrorMessage(input, message) {
    const formOption = input.parentElement;
    const small = formOption.querySelector('small');
    formOption.className = 'formOption error';
    small.innerText = message;
}

function clearError() {
    //console.log('this is this');
    //console.log(this.parentElement);
    const partentHasErrorClass = this.parentElement.getAttribute('class');
    if(partentHasErrorClass == 'formOption error'){
     const errorField = document.querySelector('.formOption.error');
     errorField.classList.remove('error');
     console.log('this is the keydown functionm');
    }
     
 };

 function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}






