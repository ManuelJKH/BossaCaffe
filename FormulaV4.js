	
function MercurioF(){
                        //Declarar variables
           		var Mrc;
                        //Valores
                        Mrc=3.70
                        //Realizar
                        document.getElementById("GPlnt").value=Mrc
                        
}
function VenusF(){
                        //Declarar variables
           		var Ven;
                        //Valores
                        Ven=8.87
                        //Realizar
                        document.getElementById("GPlnt").value=Ven
}
function MarteF(){
                        //Declarar variables
           		var Mrt;
                        //Valores
                        Mrt=3.71
                        //Realizar
                        document.getElementById("GPlnt").value=Mrt
}
function JupiterF(){
                        //Declarar variables
           		var Jptr;
                        //Valores
                        Jptr=23.12
                        //Realizar
                        document.getElementById("GPlnt").value=Jptr
}
function SaturnoF(){
                        //Declarar variables
           		var Urn;
                        //Valores
                        Urn=8.69
                        //Realizar
                        document.getElementById("GPlnt").value=Urn
}
function UranoF(){
                        //Declarar variables
           		var Nptn;
                        //Valores
                        Nptn=11
                        //Realizar
                        document.getElementById("GPlnt").value=Pltn
}
function NeptunoF(){
                        //Declarar variables
           		var Pltn;
                        //Valores
                        Pltn=.81
                        //Realizar
                        document.getElementById("GPlnt").value=Pltn
}

         function Formula(){
           		//Declarar variables
           		var p,m,g;
           		//recuperar los valores
           		m=parseInt(document.getElementById("Ms").value);
           		g=parseInt(document.getElementById("GPlnt").value);
           		//Realizar la operacion
           		p=(m*g)/8.7;
           		//Mostrar el resultado
           		document.getElementById("Pso").value=p
}


           	function Nuevo(){
           		document.getElementById("Ms").value="";
           		document.getElementById("GPlnt").value="";
           		document.getElementById("Pso").value="";


           	}
