document.getElementById("subbtn").onclick = function () {
  let temp;

  if (document.getElementById("cButton").checked) {
    temp = document.getElementById("TEXTBOX").value;
    temp = Number(temp);
    temp = toCelcius(temp);
    document.getElementById("tempLable").innerHTML = temp + "°c";
  } 
  else if (document.getElementById("fButton").checked) {
    temp = document.getElementById("TEXTBOX").value;
    temp = Number(temp);
    temp = toFahrenheite(temp);
    document.getElementById("tempLable").innerHTML = temp + "°f";

  }
  else{
    document.getElementById("tempLable").innerHTML = "select a unit";
  }
}

function toCelcius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheite(temp) {
  return temp * 9 / 5 + 32;
}
