
document.querySelector("#hblue").addEventListener("click", mblue);
document.querySelector("#hred").addEventListener("click", mred);
document.querySelector("#hgreen").addEventListener("click", mgreen);

function mblue() {
  var kolh2 = document.querySelectorAll("h2");
  for (i = 0; i < kolh2.length; i++) kolh2[i].style.color = "blue";
}
function mred() {
  var kolkoteretclass = document.querySelectorAll(".koteretclass");
  for (i = 0; i < kolkoteretclass.length; i++)
    kolkoteretclass[i].style.color = "red";
}
function mgreen() {
  var kolkoteretid = document.querySelectorAll("#koteretid");
  for (i = 0; i < kolkoteretid.length; i++)
    kolkoteretid[i].style.color = "green";
}
