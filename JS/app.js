

        
    let swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        speed: 900,
        coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
        },
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: false,
        },
    });





    // Seccion de contacto 
    
    document.getElementById ("btnEnviar").addEventListener("click", function(){
        let strCorreo = document.getElementById ("idInCe").value;
        let strNombre = document.getElementById ("idInNom").value;
        let strMensaje = document.getElementById ("idInMen").value;

        if (strCorreo != "" && strNombre != "" && strMensaje != "") {

            let datos ={
                c: strCorreo,
                n: strNombre,
                m: strMensaje
            };

            axios.post("/api/contacto", datos)
            .then(function(response){
                document.getElementById ("idInCe").value="";
                document.getElementById ("idInNom").value="";
                document.getElementById ("idInMen").value="";
                alert("Su mensaje fue enviado");
            }).catch(function(error){
                console.log(error);
            });

        }else {
            alert ("Por completar todos los datos");
        }
    });