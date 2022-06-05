
const min = 1;
const max = 5; 
const predel = 10;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  };

// это переменные для сложения  
  let a = getRandomInt(min, max); // от 1 до 5
  let b = getRandomInt(min, max);  // от 1 до 5
  let d = getRandomInt(max, predel); // от 5 до 10

 // это переменные для вычитания
  let y = getRandomInt(min, max);  // от 1 до 5
  let z = getRandomInt(max, predel); // от 5 до 10
  
function insertNumberA(){   
    document.getElementById('min').innerHTML = a;               
};  

function insertNumberB(){   
    document.getElementById('max').innerHTML = b;           
};

function insertNumberZminus(){  
   document.getElementById('numberZ').innerHTML = z;               
};  

 function insertNumberYminus(){  
   document.getElementById('numberY').innerHTML = y;           
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

/* --- НУЖНО ЧТОБЫ ДЛЯ ОТРИЦИНИЯ БЫЛИ ОТДЕЛЬНЫЕ ПЕРЕМЕННЫЕ --- */
// на данный момент он берёт вторую цифру из уровнения сложения!

// правильныый результат вычитания
let x = z - y; // (z = getRandomInt(max, predel); // от 5 до 10)
Number(x);

 /*
 это переменные для вычитания
 let y = getRandomInt(min, max);  // от 1 до 5
 let z = getRandomInt(max, predel); // от 5 до 10
*/


function testMinus(){
      let d = document.getElementById('testMinus').value;
      Number(d); // введённый результат вычитания
        
      if (x == d)
        {
        alert('ПРАВИЛЬНО');
        } else {
                alert('НЕ правильно');
              };
        };



   

    
