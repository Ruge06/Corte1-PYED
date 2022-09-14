function validar()
{
    let chetBoxP= document.getElementById("p").checked;
    let chetBoxQ= document.getElementById("q").checked;
    console.log(chetBoxP);
    console.log(chetBoxQ);

    let resultado="p and q es: " + (chetBoxP&&chetBoxQ)+"<br>";

    resultado=resultado+"p or q es: " + (chetBoxP||chetBoxQ)+"<br>";
    
    resultado=resultado+"Negación de p es: " + (!chetBoxP)+"<br>";
    
    resultado=resultado+"Negación de q es: " + (!chetBoxQ)+"<br>";

    document.getElementById("mensaje").innerHTML=resultado;

}