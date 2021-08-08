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
showMenu('nav-toggle', 'nav-menu')

/*--------Remove Menu Mobile------ */
const navLink = document.querySelectorAll('.nav-link');

/*when any links in menu are clicked hide the menu bar by removing .show class from #nav-menu */
const linkAction = ()=>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*--------Scroll Sections Active Link------ */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}


/*--------Show Menu------ */
/*--------Show Menu------ */
/*--------Show Menu------ */
/*--------Show Menu------ */