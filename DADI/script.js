
//inserimento variabili
var JohnnyDado;
var FrankieDado;

JohnnyDado= Math.floor(Math.random()*6+1);
console.log("Johnny lancia il dado ed esce il numero: " + JohnnyDado);

FrankieDado= Math.floor(Math.random()*6+1);
console.log("Frankie lancia il dado ed esce il numero: " + FrankieDado);

//condizioni per la vittoria, vince chi ha il dado più alto, altrimenti parità
if(JohnnyDado > FrankieDado){
    console.log("JOHNNY WINS!");
}
else if(JohnnyDado < FrankieDado){
    console.log("FRANKIE WINS!");
}
else{
    console.log("EX-EQUO!");
}
