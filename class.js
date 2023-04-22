class Movie {
    constructor(name, desc, rating, ratingImg, img, imgBanner, age){
        this.name = name
        this.desc = desc
        this.rating = rating
        this.ratingImg = ratingImg
        this.img = img
        this.imgBanner = imgBanner
        this.age = age
    }

    htmlBanner(){
        return `<div style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${this.imgBanner});;" class="header">
        <div class="navbardiv">
            <ul class="navbar">
                <li><img class="iconmenu" src="outline_menu_white_48dp.png" alt=""></li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Kids</li>
            </ul>
            <img class="iconmenu" src="outline_person_outline_white_48dp.png" alt="">
        </div>
        <div id="banner" class="description">
        <div class="nombreyrat">
            <h1>${this.name}</h1>
            <h3>(${this.rating} Ratings)</h3>
        </div>
        <p>${this.desc}</p>
        <div class="playnsave">
            <button class="buttonplay"> <img src="baseline_play_arrow_white_48dp.png" alt=""> Play</button>
            <button class="buttonsave"> <img src="baseline_bookmark_border_white_48dp.png" alt=""> Save</button>
            <h3>${this.age}</h3>
        </div>
        </div>
        `
    }

    htmlMovie(){
        return `
        <div class="imgitem">
            <img src="${this.img}" alt="">
        </div>
        <div class="bottomtext">
            <div class="stars">
                <p>Ratings</p>
                ${ratingImg}
            </div>
            <div class="bookmark">
                <img src="baseline_bookmark_border_white_48dp.png" alt="">
            </div>
        </div>
        `
    }
}
