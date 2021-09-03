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

/*--------Scroll Reveal------ */
const sr = ScrollReveal({
  origin: 'top',
  distance: '1rem',/*don't use px. They created margin-right and open space*/
  duration: 1000,
  reset: true,
})

/*--------Scroll Home------ */
sr.reveal('.home_title', {})
sr.reveal('.home_scroll', {delay:200})
sr.reveal('.home_img', {origin:'right', delay:400})

/*--------Scroll About------ */
sr.reveal('.about_img', {delay:100})
sr.reveal('.about_subtitle', {delay:100})
sr.reveal('.about_profession', {delay:200})
sr.reveal('.about_text', {delay:200})
sr.reveal('.about_social-icon', {delay:200, interval: 200})

/*--------Scroll Skills------ */
sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_name', {distance: '20px', delay: 100, interval: 50})
sr.reveal('.skills_img', {origin:'right', delay:100 })

/*--------Scroll Portfolio------ */
sr.reveal('.portfolio_img', {interval:100})

/*--------Scroll Skills------ */
sr.reveal('.contact_subtitle', {origin:'left' })
sr.reveal('.contact_text', {origin:'left', delay:50 })
sr.reveal('.contact_input', {origin:'right' })
sr.reveal('.contact_button', {origin:'right', delay:50 })


/*--------Dark mode------ */
