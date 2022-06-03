
/*
const min = 1;
const max = 20; 
*/

/*
const min = 1;
const max = 30; 
*/

/*
const min = 1;
const max = 40; 
*/

const min = 1;
const max = 10; 


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  };

  let a = getRandomInt(min, max);
  let b = getRandomInt(min, max);    
  
  function insertNumber1(){
    document.getElementById("min").innerHTML= a;           
};  

  function insertNumber2(){
    document.getElementById('max').innerHTML= b;           
};



let c = a + b;
Number(c);
console.log(c);
//alert(c);

function test(){
  let d = document.getElementById('test').value;
  Number(d);
  console.log(d);
  //alert(d); 
};

if (c <= 10){
  alert('МЕНЬШЕ ИЛИ РАВНО 10');
    if (c == d){
      alert('ПРАВИЛЬНО');
        } else if (c != d) {
          alert('НЕ правильно');
        };
  } else if (c > 10){
     while (c < 10){

     };  
  };   

    
