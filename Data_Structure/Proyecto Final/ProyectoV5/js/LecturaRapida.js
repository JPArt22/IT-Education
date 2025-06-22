var i=0;
var a=0;
var numero=-1;
var jj="";
var ii =61;
var iii=62;
var y=250;
var intervalo=0;
var interva=0;
var str="";
var c="";
var TamañoLetra=document.getElementById("TamañoLetra");
var Pausar=document.getElementById("Pausar");
var Palabras=document.getElementById("Palabras");
var Palabras2=document.getElementById("Palabras2");
var VelocidadLectura=document.getElementById("VelocidadLectura");
document.getElementById("InicioLectura").onclick = function() {InicioLectura()};




document.getElementById("Osos").onclick = ()=> {
   
  str =document.getElementById("historia").innerHTML;
  c = str.split(' ');
  document.getElementById("Cuento").innerHTML=str;
};
document.getElementById("Ada").onclick = ()=> {
   
  str =document.getElementById("Tomatito").innerHTML;
  c = str.split(' ');
  document.getElementById("Cuento").innerHTML=str;
};
document.getElementById("Leyes").onclick = ()=> {
   
  str =document.getElementById("conversacion").innerHTML;
  c = str.split(' ');
  document.getElementById("Cuento").innerHTML=str;
};
document.getElementById("contex4").onclick = ()=> {
   
  str =document.getElementById("Contexto4").innerHTML;
  c = str.split(' ');
  document.getElementById("Cuento").innerHTML=str;
};






document.getElementById("Pausar").onclick = ()=> {
   
  alert("Pausado");
};

VelocidadLectura.oninput=() => {

   Palabras2.innerHTML=VelocidadLectura.value+"Palabras/min";
   y = 59964/VelocidadLectura.value;
   
                               }





TamañoLetra.oninput= ()=> {

  Palabras.innerHTML="Tamaño De letra:"+TamañoLetra.value;
  document.getElementById("Cuento").style.fontSize = TamañoLetra.value+"px";
  document.getElementById("Cuento2").style.fontSize = TamañoLetra.value+"px";
                          }


function  InicioLectura (){
      iii=c.length-1;
   interva=setInterval(()=>{
       
      if(iii!=0  ){
        iii--;
        pasar();
      }else {
        clearInterval(interva);
            }   },parseInt(y, 10)) 
   /**********************************Funcion de tiempo */
   
   intervalo=setInterval(()=>{
   if(ii!=0) {  
      ii--;
     document.getElementById("cronometro").innerHTML = "Tiempo:"+" "+ ii+ "segundos";
              }
   
   
   
   else {   
   clearInterval(intervalo);
   
         }
                           },1000) 



 
                          }
/*************************************************************************/ 

   function pasar() {
      numero=numero+1;
      jj=jj+" "+c[numero];
      document.getElementById("CantidadPalabrasLeidas").innerHTML="Palabras Leidas: "+`${numero+1}`;
      document.getElementById("Cuento2").innerHTML=jj;
    
                    }  


document.getElementById("CerrarLecturaRapida").onclick=()=>{
  ii =0;
  iii=62;
  numero=-1;
  jj="";
  document.getElementById("CantidadPalabrasLeidas").innerHTML="Palabras Leidas: "+`${numero+1}`;
  document.getElementById("Cuento2").innerHTML=jj;
                     document.getElementById("cronometro").innerHTML = "Tiempo:"+" "+ ii+ "segundos";
                     document.getElementById("Cuento").innerHTML=str;
                      clearInterval(intervalo);
                      clearInterval(interva);
                                                };