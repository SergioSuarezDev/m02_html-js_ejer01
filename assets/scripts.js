
//Inicio de la App 
 document.addEventListener('DOMContentLoaded', app)


function app() {

	var menu = document.querySelector('.menu');
	var menutop = menu.offsetTop;
		
    window.addEventListener('scroll', fixMenu);
    
    //Funcion para fijar el menu arriba
    function fixMenu(e) {
		if(window.scrollY >= menutop) {
			menu.classList.add('fixed');
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






