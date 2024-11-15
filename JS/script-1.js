
const btnActivado = document.querySelectorAll('.detalle');

for (let e of btnActivado) {
    e.addEventListener("click", function guardarclick(e){

         localStorage.setItem("cargar", e.currentTarget.dataset.info);
         
         window.location.href = "modelo_detalles.html";
    })
}






