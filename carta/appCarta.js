const envoltura = document.querySelector(".envoltura");
const carta = document.querySelector(".carta")

document.addEventListener("click",(e)=>{
    if (e.target.matches(".sobre") || 
        e.target.matches(".left")||
        e.target.matches(".right")||
        e.target.matches(".corazon")) {
     envoltura.classList.toggle("abierto")

            if (!carta.classList.contains("abierta")) {
                setTimeout(()=>{
                    carta.classList.add("mostrarCarta")

                    setTimeout(()=>{
                        carta.classList.remove("mostrarCarta")
                        carta.classList.add("abierta")
                    },500)
                },1000)
            }
    }
})