/*--=========Syed-Ali-Abrar==Front End Web-Developer===========--*/

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL Title & Container*/
sr.reveal('.title',{}); 
sr.reveal('.hdttl',{});

/*SCROLL ABOUT*/
sr.reveal('.ab-img img',{delay: 400}); 
sr.reveal('.ab-prag h3',{delay: 400}); 


/*SCROLL SKILLS*/

sr.reveal('.skl-abttl',{interval: 400}); 
sr.reveal('.skl-list',{delay: 300});

/*--=========Syed-Ali-Abrar==Front End Web-Developer===========--*/