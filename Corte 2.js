// alert ("Here is come te sun");

document.write("Escuela de Artes y Letras");

console.log("Martes 13");

let name = "Ruge.Gabo" ;

let name2 = prompt("Escriba su nombre, por favor :)");

let age = Number (prompt ("Escriba su edad, por favor"));

let par = "";

let mayor="";

if((age%2)==0)
{
    par = "Su edad es par";
} else
{
    par = "Su edad es impar";
}

if((age>=22))
{
mayor=" Usted es mayor de 22 ";
}else
{
    mayor="Usted es menor de 22"
}

alert("Hola Gobernador " + name + " Su edad en 10 años sera de "+(age+10)+" Hace 5 años era de "+(age-5)+" El triple de su edad es "+(age*3)+" La mitad de su edad es " +(age/2) + " " +par+ mayor);

document.getElementById("Cuadro1").innerHTML=name;

