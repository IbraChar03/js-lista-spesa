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
     let ul=document.querySelector("ul");
    for(i=0;i<listaSpesa.length;i++){
     let li=document.createElement("li");
     ul.append(li);
     li.append(listaSpesa[i]);

    }
}

)
