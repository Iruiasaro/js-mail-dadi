
// inserimento archivio email
var acceptedEmail = ["fender@yahoo.com", "gibson@yahoo.com", "ibanez@yahoo.com", "taylor@yahoo.com", "takamine@yahoo.com"];

var usersEmail;

var verificaEmail=false;


//input email
usersEmail = prompt("inserire l'email registrata");

//condizioni 

for(var i=0 ;  i < acceptedEmail.length-1;  i++) {
    if( usersEmail === acceptedEmail[i]) {
        verificaEmail=true;
        console.log("L'EMAIL INSERITA E' CORRETTA");
    } 

    if(verificaEmail === false){
        console.log("L'EMAIL INSERITA NON E' PRESENTE ALL'INTERNO DEI NOSTRI ARCHIVI");
    }
}




