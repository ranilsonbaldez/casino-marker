const pixels = document.querySelectorAll(".option");
const colors = ["white", "orange"];
const pixelsStates = Array.from({ length: pixels.length }, () => 0);

pixels.forEach((pixel, index) => {
    pixel.style.backgroundColor = colors[pixelsStates[index]];
    
    pixel.addEventListener("click", () => {
        pixelsStates[index] = (pixelsStates[index] + 1) % colors.length;
        pixel.style.backgroundColor = colors[pixelsStates[index]];
    });
});

function recarregarAPagina(){
    window.location.reload();
} 
