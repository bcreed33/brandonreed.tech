//////js for my portfolio slideout boxes
//This is going to open my portfolio peices based off the data attribute I sent for each peice. 

function openPortfolioPiece(x){
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
// script so that the escape key would close the lightbox and portfolio drawer
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
