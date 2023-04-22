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

    htmlMovie(id){
        return `<li>
        <div class="${id}" class="imgitem">
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
        </li>`
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

let banner = document.getElementById("top")
banner.innerHTML = strangerThings.htmlBanner()

let movies = [strangerThings, theOwlHouse, voltron, heartstopper, chainsawman]

let recommend = document.getElementById("recommend")




