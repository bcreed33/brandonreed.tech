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
    document.querySelector('main').className += " slide-out";
    document.querySelector('.cd-member-bio.'+ selected_portfolio ).className += " slide-in";
    document.querySelector('.cd-member-bio-close').className += " is-visible";
    document.querySelector('main').className += " overflow-hidden";
}
//This is going to close the portfolio peices 
document.querySelector('.cd-overlay, .cd-member-bio-close is-visible').addEventListener('click', function () {
    document.querySelector('main' ).classList.remove("slide-out");
    document.querySelector('.cd-member-bio.slide-in').classList.remove("slide-in");
    document.querySelector('.cd-member-bio-close').classList.remove("is-visible");
});
// This is redundent I know... but im working on it.
document.querySelector('.cd-member-bio-close').addEventListener('click', function () {
    document.querySelector('main' ).classList.remove("slide-out");
    document.querySelector('.cd-member-bio.slide-in').classList.remove("slide-in");
    document.querySelector('.cd-member-bio-close').classList.remove("is-visible");
});


////All my portfolio peices info. Hope soon to transfer this info into a headless cms platform
const portP =[{
    portfolio_id : "0",
    portfolio_title : "4moms",
    portfolio_imageUrl : "img/tpfCapture.jpg",
    portfolio_hasGithub: true,
    portfolio_githubUrl: "",
    portfolio_hasurl : false,
    portfolio_url : "http://www.tapolcifoundation.org/",
    portfolio_copy : "For the Tapolci Foundation website, I worked with a team and was responsible for all the front-end related tasks. I made sure the website was fully responsive and took care of other things like typography, creating custom graphics, and taking the photographs that were shown on the website.",
    portfolio_talent : [{
        portfolio_talent1 : "talent4",
        portfolio_talent2 : "talent5",
        portfolio_talent3 : "talent6"
                        }]
},{
    portfolio_id : "1",
    portfolio_title : "The Batters Box",
    portfolio_imageUrl : "img/battersboxScreenGrab.JPG",
    portfolio_hasGithub: true,
    portfolio_githubUrl: "",
    portfolio_hasurl : true,
    portfolio_url : "http://thebattersbox.letsreedesign.com/",
    portfolio_copy : "The Batters Box is a fictitious restaurant that I came up with. I first developed the website statically then converted it over to a WordPress platform. This website is my playground for WordPress development, whenever I learn something new about WordPress this will be the place where I try it out. Right now this website use plugins such as ACF, contact form 7, icegram, and The Events Calendar.",
    portfolio_talent : [{
        portfolio_talent1 : "talent7",
        portfolio_talent2 : "talent9",
        portfolio_talent3 : "talent8"
                        }]
},{
    portfolio_id : "2",
    portfolio_title : "Going Deeper",
    portfolio_imageUrl : "img/goingDeeperScreenGrab.jpg",
    portfolio_hasGithub: true,
    portfolio_githubUrl: "",
    portfolio_hasurl : false,
    portfolio_url : "https://goingdeeperconference.letsreedesign.com/",
    portfolio_copy : "This project needed a quick turn-a-around time of two weeks, due to the event quickly approaching. So with a short timeline, I used webflow to allow me to produce a website demo within a day. After I got the go-ahead form the demo, I worked on completing the static website. Phase two of this project was converting the static website into a WordPress website. With the use of Advanced Custom Fields, I gave my client complete control of all their content, on the website.",
    portfolio_talent : [{
        portfolio_talent1 : "talent10",
        portfolio_talent2 : "talent12",
        portfolio_talent3 : "talent13"
                        }]
},{
    portfolio_id : "3",
    portfolio_title : "Javascript Apps",
    portfolio_imageUrl : "img/battersboxScreenGrab.JPG",
    portfolio_hasGithub: true,
    portfolio_githubUrl: "",
    portfolio_hasurl : true,
    portfolio_url : "http://thebattersbox.letsreedesign.com/",
    portfolio_copy : "The Batters Box is a fictitious restaurant that I came up with. I first developed the website statically then converted it over to a WordPress platform. This website is my playground for WordPress development, whenever I learn something new about WordPress this will be the place where I try it out. Right now this website use plugins such as ACF, contact form 7, icegram, and The Events Calendar.",
    portfolio_talent : [{
        portfolio_talent1 : "talent7",
        portfolio_talent2 : "talent9",
        portfolio_talent3 : "talent8"
                        }]
}
];

console.log(portP[1].portfolio_hasurl);

//////js that is displaying my portfolio cards
const porfolioCards = portP.map(x =>
`<li>
    <a data-type="member-${x.portfolio_id}">
        <div class="portPeicePreview" style="background-image: url(../${x.portfolio_imageUrl});">
            <div class="portPeiceTitle">
                <h3>${x.portfolio_title}</h3>
                <button data-type="member-${x.portfolio_id}" onclick="myScript(this);">More Info</button>
            </div>
        </div>
    </a>
</li>`);

document.querySelector('#portPP').innerHTML= porfolioCards;



//////js that is filling out the info for the portfolio slide-out boxes
const porfolioBios = portP.map( function (x){
const talentList = x.portfolio_talent
const talentListMapped = talentList.map(x => 
    `${x.portfolio_talent1} <br>
     ${x.portfolio_talent2} <br>
     ${x.portfolio_talent3} <br>
    `);


return `<div class="cd-member-bio member-${x.portfolio_id}">
    <div class="preview">
        <img src="${x.portfolio_imageUrl}" alt="Inspira website screen capture">
    </div>
    <div class="cd-bio-content">
        <h1>${x.portfolio_title}</h1>
        <a href="${x.portfolio_url}" target="_blank" class="button urlBtn text-center">
            Launch Site
        </a>
        <a href="${x.portfolio_githubUrl}" target="_blank" class="button githubBtn text-center">
        View Code
        </a>
        <br>
        <h2>
            Talent Showcased:
        </h2>
        <p>
            ${talentListMapped}
        </p>
        <h2>
            Description:
        </h2>
        <p>
            ${x.portfolio_copy}
        </p>
    </div>
</div>` 
});

document.querySelector('#portfolioBios').innerHTML= porfolioBios;


portP.map( function (x){
    const portfolioNumber = x.portfolio_id;
    const p = portfolioNumber.toString();
    if(x.portfolio_hasurl == false){
        const linkBtns = document.getElementsByClassName("urlBtn")[p];
        linkBtns.classList.add("nolink");
     };
     if(x.portfolio_hasGithub == false){
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