
//Inicio de la App 
 document.addEventListener('DOMContentLoaded', app)

function app() {

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

        
    //Event para fijar el menu arriba
    window.addEventListener('scroll', fixMenu);

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






