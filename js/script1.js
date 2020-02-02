


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



document.querySelector('.navbar-toggle').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('showNav');
});
