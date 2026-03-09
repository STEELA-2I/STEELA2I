document.addEventListener('DOMContentLoaded', function() {

    // --- Observateur générique pour les animations d'entrée/sortie ---
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si l'élément entre dans le viewport, on ajoute la classe 'visible'
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } 
            // Sinon (il sort), on retire la classe pour réinitialiser l'animation
            else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 // Déclenche quand 10% de l'élément est visible
    });

    // --- Appliquer l'observateur aux sections générales ---
    const sectionsToAnimate = document.querySelectorAll('.animate-on-scroll');
    sectionsToAnimate.forEach(section => {
        animationObserver.observe(section);
    });

    // --- Appliquer l'observateur aux membres de l'équipe ---
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        // Alterne la direction de l'animation
        if (index % 2 === 0) {
            member.classList.add('from-left');
        } else {
            member.classList.add('from-right');
        }
        // Observe chaque membre individuellement
        animationObserver.observe(member);
    });

    // --- Gérer la fermeture du menu burger sur mobile après un clic ---
    const navLinks = document.querySelectorAll('.nav-link');
    const navCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navCollapse);
                bsCollapse.hide();
            }
        });
    });
});


window.addEventListener('DOMContentLoaded', () => {
  // On définit les éléments à traiter (ex: paragraphes et titres)
  const elements = document.querySelectorAll('p, h1, h2, h3, li');

  elements.forEach(el => {
    // La regex cherche : un espace, puis 1 ou 2 lettres, puis un espace
    // On remplace le deuxième espace par \u00A0 (le code Unicode de &nbsp;)
    el.innerHTML = el.innerHTML.replace(/(\s\w{1,2})\s/g, '$1\u00A0');
  });
});