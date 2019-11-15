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

    var author = document.forms["apaFormBook"]["authorInput"].value;
    var title = document.forms["apaFormBook"]["titleInput"].value;
    var date = document.forms["apaFormBook"]["dateInput"].value;
    var url = document.forms["apaFormBook"]["urlInput"].value;

    var firstName = author.split(' ').slice(0, -1).join(' ');
    var lastName = author.split(' ').slice(-1).join(' ');

    document.getElementById("outputReference").innerHTML = lastName + ", " + firstName.charAt(0) + ". " + "(" + date + ") " +title + " [¿Que es?] Recuperado de " + url;

}



