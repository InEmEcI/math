
const min = 1;
const max = 5; 
const predel = 10;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  };

  let a = getRandomInt(min, max); // от 1 до 5
  let b = getRandomInt(min, max);  // от 1 до 5
  let d = getRandomInt(max, predel); // от 5 до 10
  
  function insertNumberA(){   
    document.getElementById('min').innerHTML= a;               
};  

  function insertNumberB(){   
    document.getElementById('max').innerHTML= b;           
};




function insertNumberDminus(){
  // document.getElementById("min").innerHTML= ' ';
   document.getElementById('numberD').innerHTML= d;               
};  

 function insertNumberBminus(){
  // document.getElementById('max').innerHTML= ' ';
   document.getElementById('numberB').innerHTML= b;           
};

/* ----------------------------------------*/



let c = a + b; //правильный результат сложения 
Number(c);

function testPlus(){
  let d = document.getElementById('testPlus').value;
  Number(d); //введённый ответ сложения
    
  if (c == d)
    {
    alert('ПРАВИЛЬНО');
    } else {
            alert('НЕ правильно');
          };
    };

/* --- ДОПИСАТЬ ФУНКЦИЮ ПОДСЧЁТА ПРИ МИНУСЕ --- */


// правильныый результат вычитания
let e = d - b; //d = getRandomInt(max, predel); // от 5 до 10
Number(e);


function testMinus(){
      let d = document.getElementById('testMinus').value;
      Number(d); // введённый результат вычитания
        
      if (e == d)
        {
        alert('ПРАВИЛЬНО');
        } else {
                alert('НЕ правильно');
              };
        };



   

    
