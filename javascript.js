document.getElementById("form").addEventListener("submit", function(e) {
    

    alert("Sua mensagem foi enviada com sucesso!");

    this.reset();   // limpa o formularioo

    
});document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const id = this.getAttribute('href');
        const section = document.querySelector(id);

        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});