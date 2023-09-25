const pixels = document.querySelectorAll(".option");
const colors = ["white", "orange", "red"];

pixels.forEach((pixel, index) => {
    let state = 0;  // Estado inicial
    pixel.style.backgroundColor = colors[state];
    
    pixel.addEventListener("click", () => {
        state = (state + 1) % colors.length;
        pixel.style.backgroundColor = colors[state];
    });
});

function recarregarAPagina(){
    window.location.reload();
} 
