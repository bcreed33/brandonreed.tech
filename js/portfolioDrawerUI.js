export function porfolio_Bios(wass){

    console.log(wass);
    console.log('wass');

//////js that is filling out the info for the portfolio slide-out boxes
    const porfolioBios = wass.map(function (x){
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
                <img class="screenshotOverlayImage" src="img/svgicons/002-website.png">
                <p>View More</p>
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
                    <a href="${x.portfolio_url}" target="_blank" class="button urlBtn text-center">
                        Launch Site
                    </a>
                    <a href="${x.portfolio_githubUrl}" target="_blank" class="button githubBtn text-center">
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

        console.log(porfolioBios);
        console.log('porfolioBios');
    };

    
export function portfolio_Pieces(portfolioPieces){
        portfolioPieces.map( function (x){
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

    };
