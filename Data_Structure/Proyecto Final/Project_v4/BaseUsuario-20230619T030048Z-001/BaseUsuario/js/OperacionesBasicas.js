import { showMessage } from "./Mensajes.js";
var dificultad=1;
var Operando1=1;
var operacion=0;
var Operando2=1;
var ii=1;
var PuntuacionesO=0;
var dificultad=document.getElementById("Dificultad");
var siguienteOperacion=document.getElementById("siguienteOperacion");
var RespuestaUsuario=document.getElementById("RespuestaUsuario");
var intervalo=0;


document.getElementById("InicioOperaciones").onclick = ()=> { 
    PuntuacionesO==0;
    document.getElementById("puntuaciono").innerHTML = "Puntos=0" ;
    intervalo=setInterval(()=>{
        if(ii!=0) {  
          ii++;
    document.getElementById("tiempoOperaciones").innerHTML = "Tiempo:"+" "+ ii+ "segundos";

                   } else {   
        clearInterval(intervalo);
        
              }
                    },1000) 

                                                           }

var Suma=document.getElementById("Suma").onclick = ()=> {
    document.getElementById("puntuaciono").innerHTML = "Puntos=0" ;
    operacion=1;
    ii=1;
    if (ii==1){document.getElementById("tiempoOperaciones").innerHTML = "Tiempo:"+" "+"0 "+ "segundos";}
    PuntuacionesO=0;
    document.getElementById("Operandos").innerHTML="Escoger Dificultad";
    dificultad.oninput=() => {
        Operando1=Math.floor(Math.random()* 999*dificultad.value)+1;
        Operando2=Math.floor(Math.random() *999*dificultad.value)+1;
         document.getElementById("Operandos").innerHTML = Operando1+" "+"+" +" "+Operando2 ;
                              }
                        
                              




                                                        };  
 
                                                        
var Resta=document.getElementById("Resta").onclick = ()=> {
         document.getElementById("puntuaciono").innerHTML = "Puntos=0" ;
                operacion=2;
                ii=1;
                if (ii==1){document.getElementById("tiempoOperaciones").innerHTML = "Tiempo:"+" "+"0 "+ "segundos";}
                    PuntuacionesO=0;
                    document.getElementById("Operandos").innerHTML="Escoger Dificultad";                                    
                        dificultad.oninput=() => {
                Operando1=Math.floor(Math.random()* 999*dificultad.value)+1;
                    Operando2=Math.floor(Math.random() *999*dificultad.value)+1;
                document.getElementById("Operandos").innerHTML = Operando1+" "+"-"+" "+Operando2 ;
                                                                                      }
                                                        
           
                                                        
                                                      
                                                        
                                                        };

                                                        
 
var Multiplicacion=document.getElementById("Multiplicacion").onclick = ()=> {
                                                               document.getElementById("puntuaciono").innerHTML = "Puntos=0" ;
                                                                   operacion=3;
                                                                   ii=1;
                                                                   if (ii==1){document.getElementById("tiempoOperaciones").innerHTML = "Tiempo:"+" "+"0 "+ "segundos";}
                                                                       PuntuacionesO=0;
                                                                       document.getElementById("Operandos").innerHTML="Escoger Dificultad";                                    
                                                                           dificultad.oninput=() => {
                                                                   Operando1=Math.floor(Math.random()* 999*dificultad.value)+1;
                                                                       Operando2=Math.floor(Math.random() *999*dificultad.value)+1;
                                                                   document.getElementById("Operandos").innerHTML = `${Operando1} X ${Operando2}` ;
                                                                                                                                    }
                                                                                                           
                                                                                                                                    
                                                                     
                                                                                                           
                                                                                                         
                                                                                                           
                                                                             };                                                


                                                        

                                                        

siguienteOperacion.onclick = ()=> {
     let a =RespuestaUsuario.value;
    
  if(operacion==1) {
    if(Operando1+Operando2==a){
        PuntuacionesO++;
        document.getElementById("puntuaciono").innerHTML = "Puntos:"+`${PuntuacionesO} ` ;
        document.getElementById("RespuestaUsuario").value = " " ;
        showMessage("Respuesta Correcta", )
         Operando1=Math.floor(Math.random()* 999*dificultad.value)+1;
         Operando2=Math.floor(Math.random() *999*dificultad.value)+1;
         document.getElementById("Operandos").innerHTML = `${Operando1} + ${Operando2}` ;
                       }else {
                        showMessage("Respuesta Incorrecta intentar Nuevamente","red" )
                        document.getElementById("RespuestaUsuario").value = " " ;
                             }                     
                 }
               if(operacion==2) {
                    if(Operando1-Operando2==a){
                        PuntuacionesO++;
                        document.getElementById("puntuaciono").innerHTML = "Puntos:"+`${PuntuacionesO} ` ;
                        document.getElementById("RespuestaUsuario").value = " " ;
                        showMessage("Respuesta Correcta", )
                         Operando1=Math.floor(Math.random()* 999*dificultad.value/100)+1;
                         Operando2=Math.floor(Math.random() *999*dificultad.value/100)+1;
                         document.getElementById("Operandos").innerHTML = `${Operando1} - ${Operando2}` ;
                                       }else {
                                        showMessage("Respuesta Incorrecta intentar Nuevamente","red" )
                                        document.getElementById("RespuestaUsuario").value = " " ;
                                             }                     
                                 }

                                 if(operacion==3) {
                                    if(Operando1*Operando2==a){
                                        PuntuacionesO++;
                                        document.getElementById("puntuaciono").innerHTML = "Puntos:"+`${PuntuacionesO} ` ;
                                        document.getElementById("RespuestaUsuario").value = " " ;
                                        showMessage("Respuesta Correcta", )
                                         Operando1=Math.floor(Math.random()* 999*dificultad.value/100)+1;
                                         Operando2=Math.floor(Math.random() *999*dificultad.value/100)+1;
                                         document.getElementById("Operandos").innerHTML = `${Operando1} X ${Operando2}` ;
                                                       }else {
                                                        showMessage("Respuesta Incorrecta intentar Nuevamente","red" )
                                                        document.getElementById("RespuestaUsuario").value = " " ;
                                                             }                     
                                                 }


                                                 if(PuntuacionesO==3 & ii<=60 & dificultad.value==1000){ 
                                                    showMessage("Superaste el nivel!!! Felicitaciones Manejas la operación", );
                                                     
                                                }


                                        };



                                    




document.getElementById("cerrar").onclick=()=>{
                      ii=1;    
                      PuntuacionesO==0;
                    clearInterval(intervalo);
                
                                              };