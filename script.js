// Ligne sous le menu au scroll
window.addEventListener("scroll", shade);

function shade() {
    if (window.scrollY>50){
    let header =document.getElementById('header');
    header.style.boxShadow = "#493d5f77 0px 1px 3px";
    } else {
    header.style.boxShadow = "";
    }
};

// Souligner l'onglet actif du menu 

let onglets = document.querySelectorAll('.onglet')

const observer= new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
      console.log (entry.target.id, entry.isIntersecting) 
        if (entry.isIntersecting){
        onglets.forEach(onglet => {
            onglet.classList.remove('active')
            if(entry.target.id === onglet.dataset.nav){
                onglet.classList.add('active')
            }
        });}
    }); 
},{
    threshold:0.5
})

let sections= document.querySelectorAll('.section')
sections.forEach( section => {
    observer.observe(section);
    });




    // SVG Animation //

let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength 
path.style.strokeDashoffset = pathLength

window.addEventListener('scroll', () => {
    // At what percentage of scroll are we ?
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
    // console.log("% scroll : ", scrollPercentage)
    
    // Avancée du trait 
    let drawLength = pathLength * scrollPercentage + 280
    //dessin envers au scroll up
    path.style.strokeDashoffset = pathLength - drawLength
})


// SVG Portrait
function drawPortrait(){

let pathPortrait = document.getElementById('#pathPortrait')
let pathPortraitLength = pathPortrait.getTotalLength()

pathPortrait.style.strokeDasharray = pathPortraitLength + ' ' + pathPortraitLength
pathPortrait.style.strokeDashoffset = pathPortraitLength

let scrollPercentageP = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
    
    // Avancée du trait 
    let drawLength = pathPortraitLength * scrollPercentageP + 280
    //dessin envers au scroll up
    pathPortrait.style.strokeDashoffset = pathPortraitLength - drawLength


}
drawPortrait()