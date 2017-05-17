var close=document.getElementById('closeAlert');
var alert=document.getElementById('alert');
function cerrar(event){
  alert.style.display="none";
}

close.onclick=cerrar;
