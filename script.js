document.addEventListener('DOMContentLoaded', function() {

    // --- Animation générale des sections ---
    const sectionsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optionnel: ne l'anime qu'une fois
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.15 // Déclenche quand 15% de la section est visible
    });

    sectionsToAnimate.forEach(section => {
        sectionObserver.observe(section);
    });


    // --- Animation spécifique pour l'équipe (membre par membre) ---
    const teamMembers = document.querySelectorAll('.team-member');

    // 1. Appliquer les classes initiales pour la direction de l'animation
    teamMembers.forEach((member, index) => {
        // Alterne entre gauche (index pair) et droite (index impair)
        if (index % 2 === 0) {
            member.classList.add('from-left');
        } else {
            member.classList.add('from-right');
        }
    });

    // 2. Observer chaque membre
    const teamObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.2 // Déclenche un peu plus tard pour un effet décalé
    });

    teamMembers.forEach(member => {
        teamObserver.observe(member);
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
