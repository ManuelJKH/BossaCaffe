function Entrar() {
         // Declarar Variables
         var U,C;
         //Recuperar los datos
         U=document.getElementById("Usu").value;
         C=document.getElementById("Con").value;
         //Validar datos
         if (U=="Manuel"&&C=="1234"){
            alert("Usuario y Contraseņa Correctos");
            window.open("Peso marciano.html");
            document.getElementById("Usu").value="";
            document.getElementById("Con").value="";
         }
         else{
            alert("Usuario y Contraseņa Incorrectos")
            document.getElementById("Usu").value="";
            document.getElementById("Con").value="";
         }
}