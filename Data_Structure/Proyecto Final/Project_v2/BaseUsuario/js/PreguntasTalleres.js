

import { showMessage } from "./Mensajes.js";


   


let numeroTaller=1;
var contador=0;
var puntuacion=0;
var NumeroPregunta=0;
var contador1=0;
var T=1;
document.getElementById("Taller1R").onclick = function() { cambioTaller(11)};
document.getElementById("Taller2R").onclick = function() { cambioTaller(12)};

document.getElementById("Taller1").onclick = function() { cambioTaller(1)};
document.getElementById("Taller2").onclick = function() { cambioTaller(2)};
document.getElementById("Taller3").onclick = function() { cambioTaller(3)};
document.getElementById("Taller4").onclick = function() { cambioTaller(4)};
document.getElementById("Taller5").onclick = function() { cambioTaller(5)};
document.getElementById("Taller6").onclick = function() { cambioTaller(6)};
document.getElementById("Taller7").onclick = function() { cambioTaller(7)};
document.getElementById("Taller8").onclick = function() { cambioTaller(8)};

document.getElementById("siguiente").onclick = function() {T=siguiente()};

document.getElementById("0").onclick = function() {RespuestaCorrecta(0,T)};
document.getElementById("1").onclick = function() {RespuestaCorrecta(1,T)};
document.getElementById("2").onclick = function() {RespuestaCorrecta(2,T)};
document.getElementById("3").onclick = function() {RespuestaCorrecta(3,T)};

 function cambioTaller(a){
    contador=0;
    puntuacion=0;
    contador1=0;
    numeroTaller=a;
    NumeroPregunta=0;
    
    T=siguiente();    
                     }



function siguiente() {

    if(contador==contador1 & NumeroPregunta!=10) { 
    contador1++;  
    
 

    for (let u=0;u<4;u++)
    { let hola = document.getElementById(u);
      hola.classList.remove("ColorRespuestaCorrecta");
      hola.classList.remove("ColorRespuestaIncorrecta");                                
    }


           
           NumeroPregunta++;     

           
         
        


       return organizar(NumeroPregunta,numeroTaller);
                                                }else if(NumeroPregunta!=10){ 
                                                  showMessage("Responda la pregunta Antes de Seguir","error" );return organizar(NumeroPregunta,numeroTaller);
                                                  }else {  showMessage("se termino el examen su puntuacion fue:"+puntuacion, )  }
 
                     }


function organizar(NumeroPregunta,numeroTaller){
   
                var contexto = document.querySelector("#contexto");
                var tarea = document.querySelector("#tarea");
                var opcionA = document.querySelector("#A");
                var opcionB = document.querySelector("#B");
                var opcionC = document.querySelector("#C");
                var opcionD = document.querySelector("#D");
              let respuesta=Math.floor(Math.random(1)* 4); 
              let  j= `${NumeroPregunta}`;
              let  i= "../Imagenescontexto/taller"+numeroTaller+"/"+j+"Contexto"+".jpg";
              let  ii= "../Imagenescontexto/taller"+numeroTaller+"/"+j+"Tarea"+".png";
              let  A= "../Imagenescontexto/taller"+numeroTaller+"/"+j+"A"+".png";
              let  B= "../Imagenescontexto/taller"+numeroTaller+"/"+j+"B"+".png";
              let  C= "../Imagenescontexto/taller"+numeroTaller+"/"+j+"C"+".png";
              let  D= "../Imagenescontexto/taller"+numeroTaller+"/"+j+"Drespuesta"+".png";
             
                 contexto.setAttribute("src", i);
                 tarea.setAttribute("src", ii);
                 
               
                switch (respuesta)
                {
                case 0:
                             opcionA.setAttribute("src", D);
                             opcionB.setAttribute("src", B);
                             opcionC.setAttribute("src", C);
                             opcionD.setAttribute("src", A);
                              
                break;
                case 1:
                              opcionA.setAttribute("src", B);
                              opcionB.setAttribute("src", D);
                              opcionC.setAttribute("src", C);              
                              opcionD.setAttribute("src", A);
                               
                break;
                case 2:
                              opcionA.setAttribute("src", B);
                              opcionB.setAttribute("src", C);
                              opcionC.setAttribute("src", D);
                              opcionD.setAttribute("src", A);
                              
                break;
                case 3:
                              opcionA.setAttribute("src", C);
                              opcionB.setAttribute("src", B);
                              opcionC.setAttribute("src", A);
                              opcionD.setAttribute("src", D);
                               
                break;
                        
             
                        }
                return respuesta;
                }


function RespuestaCorrecta(R,respuesta){ 
                    contador++;
                     
    if(contador==contador1) {                
                     if (R == respuesta) {
                     puntuacion++;
                     if(contador==10) {
    
                      showMessage("se termino el examen su puntuacion fue:"+puntuacion, )
                         //     const  IDD2=document.getElementById('puntuacion');
                        //      console.log(IDD2.dataset.i); 
                         //     modificar(puntuacion,IDD2.dataset.i);    
                              
                
                       }  


                     let punt= document.getElementById("puntuacion").innerHTML="puntuaciòn:"+" "+`${puntuacion}`;
                    
                     let hola = document.getElementById(R);
                     hola.classList.add("ColorRespuestaCorrecta");
                    
                                } else {
                                    let hola = document.getElementById(R);
                                    let hola2 = document.getElementById(T);
                                    hola.classList.add("ColorRespuestaIncorrecta");
                                    hola2.classList.add("ColorRespuestaCorrecta");
                                    if(contador==10) {
    
                                      showMessage("se termino el examen su puntuacion fue:"+puntuacion, )
                                   //  const  IDD2=document.getElementById('puntuacion');
                                     //         console.log(IDD2.dataset.i); 
                                             // modificar(puntuacion,IDD2.dataset.i);    
                                              
                                
                                       }



                                       }
                 
                     
                                     
                            }else {
                              showMessage("No se puede Volver a Contestar") ;
                                            contador--;
                
                                           } 

                                        }

                                        

                                          
                                

                                    