  function dualColors(event) {
    let pixelSelected = event.target;
    console.log(pixelSelected);

    if (pixelSelected.style.backgroundColor == "transparent"){
        pixelSelected.style.backgroundColor = "#FF0000"
        

    } else {
        pixelSelected.style.backgroundColor = "transparent"
    }
}


function recarregarAPagina(){
    window.location.reload();
} 