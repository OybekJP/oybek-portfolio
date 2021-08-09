/*--------Show Menu------ */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  /*when #nav-toggle is clicked change the css property to .show  */
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
    })
  }
} 
showMenu('nav-toggle','nav-menu');

/*--------Remove Menu Mobile------ */
const navLink = document.querySelectorAll('.nav_link');

/*when any links in menu are clicked, hide the menu bar by removing .show class from #nav-menu */
function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*--------Scroll Sections Active Link------ */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
   /*const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })*/
}

/*--------Scroll Reveal------ */
const sr = ScrollReveal({
  origin: 'top',
  distance: '1rem',/*don't px. They created margin-right and open space*/
  duration: 2000,
  reset: true,
})

/*--------Scroll Home------ */
sr.reveal('.home_title', {})
sr.reveal('.home_scroll', {delay:200})
sr.reveal('.home_img', {origin:'right', delay:400})

/*--------Scroll About------ */
sr.reveal('.about_img', {delay:500})
sr.reveal('.about_subtitle', {delay:300})
sr.reveal('.about_profession', {delay:400})
sr.reveal('.about_text', {delay:500})
sr.reveal('.about_social-icon', {delay:500, interval: 200})

/*--------Scroll Skills------ */
sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_name', {distance: '50px', delay: 200, interval: 200})
sr.reveal('.skills_img', {origin:'right', delay:400 })

/*--------Scroll Portfolio------ */
sr.reveal('.portfolio_img', {interval:200})

/*--------Scroll Skills------ */
sr.reveal('.contact_subtitle', {origin:'left' })
sr.reveal('.contact_text', {origin:'left', delay:50 })
sr.reveal('.contact_input', {origin:'right' })
sr.reveal('.contact_button', {origin:'right', delay:50 })