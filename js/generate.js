function generateBookReference() {

    document.getElementsByName("outputReference").innerHTML = "hola";

    var author = document.forms["apaFormBook"]["authorInput"].value;
    var title = document.forms["apaFormBook"]["titleInput"].value;
    var city = document.forms["apaFormBook"]["cityInput"].value;
    var year = document.forms["apaFormBook"]["yearInput"].value;
    var page = document.forms["apaFormBook"]["pageInput"].value;

    var firstName = author.split(' ').slice(0, -1).join(' ');
    var lastName = author.split(' ').slice(-1).join(' ');

    document.getElementById("outputReference").innerHTML = lastName + " " + firstName.charAt(0) + ". " + "(" + year + ") " +"<i>"+title+"</i>";


}


function generateWebReference() {

    document.getElementsByName("outputReference").innerHTML = "hola";

    var author = document.forms["apaFormWeb"]["authorInput"].value;
    var title = document.forms["apaFormWeb"]["titleInput"].value;
    var date = new Date(document.forms["apaFormWeb"]["dateInput"].value);
    var url = document.forms["apaFormWeb"]["urlInput"].value;

    var firstName = author.split(' ').slice(0, -1).join(' ');
    var lastName = author.split(' ').slice(-1).join(' ');

    document.getElementById("outputReference").innerHTML = lastName + ", " + firstName.charAt(0) + ". " + "(" + dateConversor(date) + ") " +title + " [¿Que es?] Recuperado de " + url;

}

function dateConversor(date){
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    if(month === 1) month = "enero";
    if(month === 2) month = "febrero";
    if(month === 3) month = "marzo";
    if(month === 4) month = "abril";
    if(month === 5) month = "mayo";
    if(month === 6) month = "junio";
    if(month === 7) month = "julio";
    if(month === 8) month = "agosto";
    if(month === 9) month = "septiembre";
    if(month === 10) month = "octubre";
    if(month === 11) month = "noviembre";
    if(month === 12) month = "diciembre";

    return day + " de " +  month + " de " + year;





}



