const mylabel =document.getElementById("mylabel");

update();

function update(){

    let date= new Date();
    mylabel.innerHTML=FormatTime(date);

   function FormatTime(date){
     let hours=date.getHours();
     let minute=date.getMinutes();
     let seconds=date.getSeconds();

     return `${hours}:${minute}:${seconds}`;
   }
}