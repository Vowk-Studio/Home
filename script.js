document.addEventListener('DOMContentLoaded', function() {
    // Cambiar entre tipos de desarrollo (CMS vs Custom)
    const devOptions = document.querySelectorAll('.dev-option');
    const planGroups = document.querySelectorAll('.plan-group');
    
    devOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remover clase active de todas las opciones
            devOptions.forEach(opt => opt.classList.remove('active'));
            
            // Añadir clase active a la opción seleccionada
            this.classList.add('active');
            
            // Obtener el tipo de desarrollo seleccionado
            const devType = this.dataset.option;
            
            // Mostrar solo los planes correspondientes
            planGroups.forEach(group => {
                group.classList.remove('active');
                if (group.dataset.devType === devType) {
                    group.classList.add('active');
                }
            });
        });
    });
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Efecto hover mejorado para tarjetas
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Mostrar solo los planes CMS al cargar la página
    document.querySelector('.plan-group[data-dev-type="cms"]').classList.add('active');
});