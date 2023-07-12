// Ligne sous le menu au scroll
window.addEventListener("scroll", shade);

function shade() {
    if (window.scrollY>10){
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


function sendEmail(){
    Email.send({
        Host : process.env.HOST,
        Username : process.env.USERNAME,
        Password : process.env.PASSWORD,
        To : process.env.TO,
        From : document.getElementById('email').value,
        Subject : "Contact from Portfolio",
        Body : document.getElementById('message').value
    }).then(
      message => alert("Message sent successfully !")
    );
}