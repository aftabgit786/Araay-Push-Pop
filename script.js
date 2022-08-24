let array = [];

function arrayMethod(){
   
    let val = document.getElementById('push').value;
    array.push(val);
    arrayLop();
}

function pop(){
   array.pop();
   arrayLop(); 
}

function arrayLop(){
   document.getElementById("Area").innerHTML ="";
   document.getElementById("push").value ="";

   for(let y = 0; y < array.length; y++){

    let html = `<h1>${y+1}: ${array[y]}</h1>`
    document.getElementById("Area").innerHTML += html;
   }
}