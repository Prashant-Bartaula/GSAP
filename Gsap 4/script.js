document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector(".menu-icon").addEventListener("click", () => {
        console.log('i ran')
        document.querySelector(".menu-icon").classList.toggle("menu-active");   
    });
});