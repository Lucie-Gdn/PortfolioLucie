// Ligne sous le menu au scroll
window.addEventListener("scroll", shade);

function shade() {
  if (window.scrollY > 50) {
    let header = document.getElementById("header");
    header.style.boxShadow = "#493d5f77 0px 1px 3px";
  } else {
    header.style.boxShadow = "";
  }
}

// Souligner l'onglet actif du menu

let onglets = document.querySelectorAll(".onglet");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry.target.id, entry.isIntersecting);
      if (entry.isIntersecting) {
        onglets.forEach((onglet) => {
          onglet.classList.remove("active");
          if (entry.target.id === onglet.dataset.nav) {
            onglet.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

let sections = document.querySelectorAll(".section");
sections.forEach((section) => {
  observer.observe(section);
});

// SVG Animation //

let path = document.querySelector("path");
// console.log("path : ", path);
let pathLength = path.getTotalLength();
// console.log("pathLength : ", pathLength);

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  // At what percentage of scroll are we ?
  let scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  // console.log("% scroll : ", scrollPercentage)

  // Avancée du trait
  let drawLength = pathLength * scrollPercentage + 280;
  //dessin envers au scroll up
  path.style.strokeDashoffset = pathLength - drawLength;
});

// SVG Portrait
function drawPortrait() {
  let pathPortrait = document.querySelector(".portrait_dos svg path");
  console.log("pathPortrait : ", pathPortrait);

  let pathPortraitLength = pathPortrait.getTotalLength();
  console.log("pathPortraitlength : ", pathPortraitLength);

  pathPortrait.style.strokeDasharray = pathPortraitLength;
  pathPortrait.style.strokeDashoffset = pathPortraitLength;

  // let scrollPercentageP = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)

  // Avancée du trait
  // A FAIRE : transformer le 2 en variable de compteur qui avance
  let drawLengthP = pathPortraitLength * 2 + 280;
  //dessin envers au scroll up
  pathPortrait.style.strokeDashoffset = pathPortraitLength - drawLengthP;
}
// drawPortrait()

const myTitle = new SplitType("#my-title");

// ANIMATION WELCOME MESSAGE
gsap.to(".char", {
  y: -5,
  stagger: 0.05, // to offset the depart
  delay: 0.2,
  duration: 0.1,
});

// ANIMATION ON SCROLL NEW BACKGROUND GRADIENT

let work_title = document.getElementById("work_title");
let innertext = document.getElementById("innertext");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  work_title.style.clipPath = "circle(" + value + "px at center center)";
  let valueLeft = 100 - value / 5;
  let valueTop = 100 - value / 8;
  work_title.style.background =
    "linear-gradient(180deg, #FF5218 50%, #F0E7EE 100%)";

  console.log("innertext.style.top", valueTop);
  console.log("VALUE", value);
  if (valueTop > 20) {
    innertext.style.left = valueLeft + "%";
    innertext.style.top = valueTop + "%";
  } else if (valueTop < 25) {
    innertext.style.opacity = 1000 - value;
  } else {
    innertext.style.position = "fixed";
  }
});

// une fois que au scroll le background arrive à 100vh alors on reprends la div projets et on fixe le titre en haut de la page
// let root = document.querySelector(":root");
// let portrait = document.getElementById("portrait");
// window.addEventListener("scroll", function () {
//   let coordinates = portrait.getBoundingClientRect();
//   //   console.log(
//   //     "coordinate y : ",
//   //     coordinates.y,
//   //     "coordinate x : ",
//   //     coordinates.x
//   //   );
//   let valueYScroll = window.scrollY;
//   let topcoord = coordinates.y + valueYScroll;
//   var root = document.querySelector(":root");
//   // root.style.setProperty("--coordinateY", topcoord);
//   // root.style.setProperty('--coordinateX', leftcoord)
// });

// ANIMATION PROJECT CARD

// const projects = document.querySelectorAll("section");
// window.onscroll = () => {
//   projects.forEach((project) => {
//     let top = window.scrollY;
//     let offset = project.offsetTop - 100;
//     let height = project.offsetHeight;
//     console.log("top", top, "offset", offset, "height", height);
//     if (top >= offset && top < offset + height) {
//       project.classList.add("show-animate");
//     } else {
//       project.classList.remove("show-animate");
//     }
//   });
// };

// ANIMATION PROJECT ON SCROLL
const projects = document.querySelectorAll(".project");
window.addEventListener("scroll", loadprojects);

function loadprojects() {
  const triggerbottom = (window.innerHeight / 5) * 4;
  projects.forEach((project) => {
    const projectTop = project.getBoundingClientRect().top;

    if (projectTop < triggerbottom) {
      project.classList.add("show");
    }
  });
}
