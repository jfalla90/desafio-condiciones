imagen = document.querySelector("#imagen");

imagen.style.border = `none`;

imagen.addEventListener('click' , function(){
    if( imagen.style.border === `none`){
        imagen.style.border = "2px solid red";
        document.getElementById("msjImagen").innerHTML = "Aplicaste border";
    } else{
        imagen.style.border = "none";
        document.getElementById("msjImagen").innerHTML = "Quitaste border";
    }
});

