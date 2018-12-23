
//Inicio de la App 
 document.addEventListener('DOMContentLoaded', app)

function app() {
    
    window.scrollTo(0, 0);

    let menu = document.querySelector('.menu');
    let menuMobile = document.querySelector('.menuMobile');
    let menutop = menu.offsetTop;
    let iconoMobile = document.getElementById('iconMenu');

    iconoMobile.onclick = function() {

      if (menu.classList.contains('MenuMobile')) {
        // Si estamos en el menu mobile
        // De esta manera enciendo/apago el menu  
        if (menu.classList.contains('encendido')) { 
            menu.classList.add('apagado');
            menu.classList.remove('encendido');

        } else  { 
            menu.classList.remove('apagado');
            menu.classList.add('encendido');
        }

      } else {
         // Si no tiene el menu mobile
        menu.classList.add('MenuMobile');
        menu.style.display = 'initial';
        menu.classList.remove('fixed');
        menu.classList.add('encendido');

        const listItemsMenu = document.querySelectorAll('.menu li');
        for (let i = 0; i < listItemsMenu.length; i++) {
            listItemsMenu[i].style.display = 'block';
        }
      }
    };

    let select = document.querySelector('select[name="selector"]');
    select.addEventListener('change',function(e){
       if (e.target.value == "otro") {
            let br = document.createElement("br");
            let input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Cuentame entonces como me has conocido..."
            select.parentNode.insertBefore(br, select.nextSibling);
            br.parentNode.insertBefore(input, br.nextSibling);
        }
        
    });


    //Event para fijar el menu arriba y el ancho (menu)
    window.addEventListener('scroll', fixMenu);
    document.querySelector('form').addEventListener('submit', evento => {

        let emailV = document.querySelector('input[name="email"]');
        let tlfV = document.querySelector('input[name="telefono"]');
        let palabras  = document.getElementById("textComment").value; 
        let numeroP = palabras.split(' ');

        if(numeroP.length > 150) {
            alert("No se pemiten mas de 150 palabras");
            evento.preventDefault();
            return
         }

         if(!validaEmail(emailV.value)){
             alert("Email no válido");
             evento.preventDefault();
             return
         }

         if(!validaNumero(tlfV.value)){
            alert("Numero no válido");
            evento.preventDefault();
            return
        }

        //Si llegamos hasta aqui todo es correo
        alert("Correo enviado");
        evento.preventDefault();

        });

        //validamos el email
        function validaEmail(email) {
            let reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return reg.test(email);
        }

        //Validamos el tlf
        function validaNumero(numero) {
            let reg = /^\d+$/;
            return reg.test(numero);
          }

    //Funcion para fijar el menu arriba (Ojo si tiene el menu mobile no lo hago)
    function fixMenu(e) {
		if(window.scrollY >= menutop) {
            if (!menu.classList.contains('MenuMobile')) {
                    menu.classList.add('fixed');
            }
		} else {
			menu.classList.remove('fixed');
		}
	}
    

    //Funcion para hacer el Smooth Scroll
    document.querySelectorAll('a[href~="#"]').forEach(enlace => { //Por cada link con el href y el #
            const url = new URL(enlace.href); //Creo el objeto url con el enlace
            enlace.addEventListener('click', () => { //En cada click detectado
               if (url.hash.length > 0) { //Si tiene 1 o mas caracter despues del #
                    document.getElementById(url.hash.substr(1)).scrollIntoView({behavior: 'smooth'}); //Nos movemos al ID
                }
            });
    });


}






