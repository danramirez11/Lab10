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
        return `<div class="listcataloge-div">
        <div class="imgitem">
            <img src="${this.img}" alt="">
        </div>
        <div class="bottomtext">
            <div class="stars">
                <p>Ratings</p>
                ${this.ratingImg}
            </div>
            <div class="bookmark">
                <img src="baseline_bookmark_border_white_48dp.png" alt="">
            </div>
        </div>
        </div>
        `
    }
}

const strangerThings = new Movie ("Stranger Things", 
"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
"4.8", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_27/2921486/190703-stranger-things-season-3-ac-751p.jpg",
"14+")

const heartstopper = new Movie ("Heartstopper",
"Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love.",
"4.9", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://resizing.flixster.com/9RkRsNGeamxues_B3XajjI28Q90=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vZTE3N2VkNjEtMDlmYi00MGRlLTliYTEtMmIxMTM1OTU2ZThjLmpwZw==",
"https://tv-fanatic-res.cloudinary.com/iu/s--ndFA-6L0--/f_auto,q_auto/v1650911369/heartstopper-cover-wide",
"14+")

const chainsawman = new Movie ("Chainsawman", 
"Following a betrayal, a young man left for the dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils.",
"4.8", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974709939/chainsaw-man-vol-1-9781974709939_hr.jpg",
"https://i0.wp.com/dmtalkies.com/wp-content/uploads/2022/11/Chainsaw-Man-Episodes-1-2-Recap-Ending-Explained-Denji-and-Pochito.jpg",
"14+")

const voltron = new Movie ("Voltron",
"Teenagers transported from Earth become pilots for robotic lions to fight in an intergalactic war. The Paladins of Voltron must learn to work as a team to assemble the robot Voltron and use its power to conquer the Galra Empire.",
"4.7", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://m.media-amazon.com/images/I/71Uyypu+XxL._AC_UF1000,1000_QL80_.jpg",
"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fnetflixlife.com%2Ffiles%2F2018%2F02%2FVLT_PD214_01125821_RGB_F_preview.jpg",
"12+")

const theOwlHouse = new Movie ("The Owl House", 
"When a human girl stumbles upon a portal to another world, she befriends a rebellious witch and a warrior. She soon discovers her dream of becoming a witch and finds herself welcome in a new family.",
"4.9", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://static.wikia.nocookie.net/theowlhouse/images/0/07/The_Owl_House_T2_Poster.jpeg/revision/latest/scale-to-width-down/1200?cb=20210517180233&path-prefix=es",
"https://www.pluggedin.com/wp-content/uploads/2020/04/the-owl-house.jpg", "7+"
)

const avatar = new Movie ("Avatar: The Last Airbender",
"Aang, a 12-year-old boy, must put his childhood aside to impede chaos that the Fire Nation is creating. He embarks on a quest to restore harmony in the nations of Water, Earth and Air.",
"4.9", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://static.wikia.nocookie.net/avatar/images/7/78/ATLA_FCBD_2011_Cover_Page.png/revision/latest/scale-to-width-down/250?cb=20121121094329",
"https://deadline.com/wp-content/uploads/2021/02/Avatar-The-Last-Airbender-Legend-Of-Aang-Nickelodeon-Nick-ATLA-ATLOA-e1655304503771.jpg?crop=0px%2C1px%2C1164px%2C653px&resize=681%2C383", 
"7+")

const shera = new Movie ("She-Ra and the Princesses of Power", 
"Adora finds a magical sword that transforms her into She-Ra, a legendary princess. She then decides to join the rebellion against the Horde to free her planet.",
"4.5", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://m.media-amazon.com/images/M/MV5BNzdiOTJiMWMtYTY0MS00NTUzLWE3OWUtZTc4YzE2YzVmMzdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
"https://static.onecms.io/wp-content/uploads/sites/6/2018/11/catra-she-ra-2000.jpg", "12+"
)

const fullmetal = new Movie ("Fullmetal Alchemist Brotherhood",
"Brothers Edward and Alphonse Elric search for the Philsopher's Stone, hoping to restore their bodies, which were lost when they attempted to use their alchemy skills to resurrect their deceased mother.",
"5.0",  `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://i.pinimg.com/originals/1d/e4/92/1de492589eadf1870a23e4e5b939a8b0.jpg",
"https://media.comicbook.com/2017/01/fmab-223459.jpg", "14+")

const banner = document.getElementById("top")
banner.innerHTML = theOwlHouse.htmlBanner()

const recommend = document.getElementById("recommend")
const trending = document.getElementById("trending")

let movies = [strangerThings, heartstopper, chainsawman, voltron, theOwlHouse, avatar, shera, fullmetal]

for(let i = 0 ; i < movies.length ; i++){
    recommend.innerHTML += movies[i].htmlMovie()
    trending.innerHTML += movies[i].htmlMovie()
}



