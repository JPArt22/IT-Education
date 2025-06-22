var i=0;
var a=0;
var numero=-1;
var jj="";
var jjj="";
var ii =61;
var iii=62;
var y=250;
var intervalo123=0;
var intervalo=0;
var TamañoLetra=document.getElementById("TamañoLetra1");
var Palabras=document.getElementById("PalabrasLeidas1");
var Palabras2=document.getElementById("Palabras3");
var VelocidadLectura=document.getElementById("VelocidadLectura1");
document.getElementById("InicioLecturaContextual").onclick = function() {InicioLectura()};
var str =document.getElementById("historia").innerHTML;
var c = str.split(' ');
let elemento1= document.getElementById("Cuento54").innerHTML=str;


VelocidadLectura.oninput=() => {

   Palabras2.innerHTML=VelocidadLectura.value+"Palabras/min";
   y = 59964/VelocidadLectura.value;
   
        }





TamañoLetra.oninput= ()=> {

  Palabras.innerHTML="Tamaño De letra:"+TamañoLetra.value;
  document.getElementById("Cuento54").style.fontSize = TamañoLetra.value+"px";
  document.getElementById("LectuC").style.fontSize = TamañoLetra.value+"px";
                          }
             
             

function  InicioLectura (){
  ocultar();
  iii=c.length-1;
  ii=61;

   const interva=setInterval(()=>{
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
     document.getElementById("cronometro1").innerHTML = "Tiempo:"+" "+ ii+ "segundos";
     document.getElementById("Cuento54").innerHTML=str;
              } else {   
   clearInterval(intervalo);
   
         }
                           },1000) 



                           intervalo123=setInterval(()=>{
                            let pa=60;
                            if(pa!=0) {  
                               pa--;
                                document.getElementById("Cuento54").innerHTML=jjj;
                                       }
                            else {   
                            clearInterval(intervalo123);
                            
                                  }
                                                      },1400)



 
   /*************************************************************************/    }


   function pasar() {
      numero=numero+1;
      jj=jj+" "+c[numero];
     
      document.getElementById("CantidadPalabrasLeidas1").innerHTML="Palabras Leidas: "+`${numero+1}`;
      document.getElementById("LectuC").innerHTML=jj;
    
                      }  


  function ocultar(){
  

  for(let as=0;as<=c.length;as++){
 
    let respuesta12=Math.floor(Math.random(1)* 4); 
    
    if(respuesta12==0  ){
      jjj=jjj+" "+`<span class="Invi">${c[as]}</span>`;
      }else {
          jjj=jjj+" "+c[as];

      }             }

                    }





  document.getElementById("CerrarLecturaContextual").onclick=()=>{
    
    ii =0;
    iii=0;
    numero=-1;
    jj="";
    jjj="";
    document.getElementById("CantidadPalabrasLeidas1").innerHTML="Palabras Leidas: "+`${numero+1}`;
                      document.getElementById("LectuC").innerHTML=jj;
                       document.getElementById("cronometro1").innerHTML = "Tiempo:"+" "+ ii+ "segundos";
                       document.getElementById("Cuento54").innerHTML=str;
                        clearInterval(intervalo123);
                        clearInterval(intervalo);
                                                  };