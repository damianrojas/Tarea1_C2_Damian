

 

var arreglo_salida= [];
 function Cambio_de_Base(){
     
    var entrada = document.getElementById("arreglo_entrada").value;
    var arreglo= entrada.split(" ");
    console.log(arreglo);
     arreglo.forEach((element) => {                     ////// ForEach que realiza las operaciones a cada elementro del arreglo de entrada 
        var cociente= element;
        var i= 2;
        var base;
        var salida = "";
        var Residuo = 0;
        var num_entrada = element;
      for (; i < num_entrada; i++) {                           //Este for invrementa la base desde 2 hasta que sea igual al numero de la entrada  ------  i = la base 

            element=num_entrada;                                
            Residuo = 0;
            salida = "";                                           //// Se pone en blanco la cadena de salida despues de cada iteración 
            cociente = num_entrada;                              /// se toma el valor del elemento para realizar las divisiones sucesivas 
            base= i;                                             //// Se establece el valor de la base = 2
          ////// Base en la cual el numero se hace palindromo

          for(let j=0; cociente >= base;j++){                   //Este for construye la cadena de caracteres y realiza las operaciones matematicas para evaluar si el numero es palindromo con el cambio de base 
              
            cociente= Math.trunc(element/base);                 //// División sucesiva tomando unicamente la parte entera
            Residuo=element%base;                               //// Se toma el residuo de la operacion para realizar el cambio de base 
            if (cociente < base) {
                salida = cociente.toString() +Residuo.toString()+ salida.toString();
            }
            else{
                salida = Residuo.toString()+ salida.toString();
                element= cociente;
            }
          }
          //Validacion de si el numero es palindromo
              const salida_invertida = salida.split("").reverse().join("");             //// Se invierte la cadena de salida
            if(salida_invertida==salida){
                console.log(base);
                arreglo_salida.push(base);
                //console.log(salida_invertida);
                //console.log(salida);
                num_entrada=i;   
            }
            ////// validacion numero sin palindromo
          /*if((salida_invertida!== salida) && (base = num_entrada)){
              console.log("sin base palindroma")
          }*/   
      }
     });
     document.getElementById("out").innerHTML = "Resultado: "+ arreglo_salida;
     arreglo_salida.length=0;
 }
