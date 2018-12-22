
function app() {

    //Funcion para hacer el Smooth Scroll
    document.querySelectorAll('a[href~="#"]').forEach(enlace => { //Por cada link con el href y el #
        const url = new URL(enlace.href); //Creo el objeto url con el enlace
        enlace.addEventListener('click', () => { //En cada click detectado
            document.getElementById(url.hash.substr(1)).scrollIntoView({behavior: 'smooth'}); //Nos movemos al ID
        });
    });


}




document.addEventListener('DOMContentLoaded', app)


