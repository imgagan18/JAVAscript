const mylabel=document.getElementById("mylabel");

update();

function update(){
   let date=new Date();
   mylabel.innerHTML= formatTime(date);

     function formatTime(date){
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
        let amorpm=date.getam

        return `${hours}:${minutes}:${seconds}`
     }
}