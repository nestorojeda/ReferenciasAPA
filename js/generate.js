let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
const yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd
}
if(mm<10){
    mm='0'+mm
}

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("dateInput").setAttribute("max", today);



function generateBookReference() {
    let author = document.forms["apaFormBook"]["authorInput"].value;
    let title = document.forms["apaFormBook"]["titleInput"].value;
    let city = document.forms["apaFormBook"]["cityInput"].value;
    let year = document.forms["apaFormBook"]["yearInput"].value;
    let page = document.forms["apaFormBook"]["pageInput"].value;

    let firstName = author.split(' ').slice(0, -1).join(' ');
    let lastName = author.split(' ').slice(-1).join(' ');

    document.getElementById("outputReference").innerHTML = lastName + " " + firstName.charAt(0) + ". " + "(" + year + ") " +"<i>"+title+"</i>";


}


function generateWebReference() {
    let author = document.forms["apaFormWeb"]["authorInput"].value;
    let title = document.forms["apaFormWeb"]["titleInput"].value;
    let date = new Date(document.forms["apaFormWeb"]["dateInput"].value);
    let url = document.forms["apaFormWeb"]["urlInput"].value;
    let type = document.forms["apaFormWeb"]["typeInput"].value;

    let firstName = author.split(' ').slice(0, -1).join(' ');
    let lastName = author.split(' ').slice(-1).join(' ');

    document.getElementById("outputReference").innerHTML = lastName + ", " + firstName.charAt(0) + ". " + "(" + dateConversor(date) + ") " +title + " ["+ type +"] Recuperado de " + url;
}

function dateConversor(date){
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if(month === 0) month = "enero";
    if(month === 1) month = "febrero";
    if(month === 2) month = "marzo";
    if(month === 3) month = "abril";
    if(month === 4) month = "mayo";
    if(month === 5) month = "junio";
    if(month === 6) month = "julio";
    if(month === 7) month = "agosto";
    if(month === 8) month = "septiembre";
    if(month === 9) month = "octubre";
    if(month === 10) month = "noviembre";
    if(month === 11) month = "diciembre";

    return day + " de " +  month + " de " + year;

}



