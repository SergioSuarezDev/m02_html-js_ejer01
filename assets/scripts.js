
//Inicio de la App 
 document.addEventListener('DOMContentLoaded', app)

function app() {
    
    window.scrollTo(0, 0); //Que inicie siempre con el scroll arriba

    //Selectores para la gestión del menu
    let menu = document.querySelector('.menu');
    let menuMobile = document.querySelector('.menuMobile');
    let menutop = menu.offsetTop;
    let iconoMobile = document.getElementById('iconMenu');
    let iconoMobile = document.getElementById('iconMenu');

    //Select para la opcion de "otros" en el select del formulario
    let select = document.querySelector('select[name="selector"]');

    //Event para fijar el menu arriba y el ancho (menu)
    window.addEventListener('scroll', fixMenu);

    //Click en el icono del menu Mobile
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


    //Cuando cambie el menu si esta seleccionado el "otro" creamos un input nuevo
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


    //Cuando se envie el formulario, hago todas las validaciones
    //Ya se que se peuden hacer con el pattern, pero por si acaso
    //las valido todas de nuevo aqui tambien
    document.querySelector('form').addEventListener('submit', evento => {

        //Selectores para los elementos del form
        let emailV = document.querySelector('input[name="email"]');
        let tlfV = document.querySelector('input[name="telefono"]');
        let palabras  = document.getElementById("textComment").value; 
        let numeroP = palabras.split(' ');
        let errorSpan = document.querySelector('.error');

        //Error para mas de 150 palabras en textarea
        if(numeroP.length > 150) {
            evento.preventDefault();
            errorSpan.innerHTML = 'Error, no se permiten mas de 150 palabras, por favor revise el contenido.';
            return
         }

         //Error para el email no valido
         if(!validaEmail(emailV.value)){
             errorSpan.innerHTML = 'Error en email, por favor revise el contenido.';
             evento.preventDefault();
             return
         }

         //Error para el telefono no valido
         if(!validaNumero(tlfV.value)){
            errorSpan.innerHTML = 'Error en el telefono, por favor revise el contenido.';
            evento.preventDefault();
            return
        }

        //Si llegamos hasta aqui todo es correcto
        errorSpan.innerHTML = ''; //Borro el error si lo hubiese
        evento.preventDefault(); //No lo enviamos, no hay nada en el servidor que pueda hacerlo

    });

        //validamos el email tambien por js
    function validaEmail(email) {
        let reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return reg.test(email);
    }

        //Validamos el tlf tambien por js
    function validaNumero(numero) {
        let reg = /[0-9]{9}/;
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






