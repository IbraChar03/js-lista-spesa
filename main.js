let listaSpesa=["carne", "pesce", "frutta", "verdura"];
// for(i=0;i<listaSpesa.length;i++){
//     console.log(listaSpesa[i]);
// }


    let i=0
    while(i<listaSpesa.length){
       console.log(listaSpesa[i]);
       i++;
    }
let aggiungi=document.querySelector("button");
aggiungi.addEventListener("click",
function(){
    let lista=document.getElementById("lista").value;
    listaSpesa.push(lista);
     console.log(listaSpesa);
     let stampa=document.getElementById("title").innerHTML=`hai aggiunto ${lista} alla tua lista della spesa, ora la lista completa è ${listaSpesa}`

}

)
 
