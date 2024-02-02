document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section-2');

    function checkScroll() {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight * 0.75 && position > -screenHeight * 0.75) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load
});

document.addEventListener('DOMContentLoaded', function(){
    const projects=document.querySelectorAll('.project');
    projects.forEach(project=>{
        project.addEventListener('mouseenter', function(){
            this.classList.add('hovered');
        });
        
        project.addEventListener('mouseleave', function(){
            this.classList.remove('hovered');
        });
    });
});