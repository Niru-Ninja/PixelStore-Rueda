const chars = ["\\","|","/", "-"];
let index = 0;

setInterval(function (){
  let text = document.getElementById("Loader");
  if(text !== null){
    text.innerHTML = "Cargando... " + chars[index++];
    index = chars.length === index ? 0 : index;
  }
}, 125);