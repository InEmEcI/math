

let min = 1;
let max = 5; 
let predel = 10;



function ot1do10(){  // должна вснавлять эти значания и уже с ними выполнять все остальные действия
  let min = 1;
  let max = 5; 
  let predel = 10;
};



function ot1do20(){  // должна вснавлять эти значания и уже с ними выполнять все остальные действия
  let min = 1;
  let max = 10; 
  let predel = 20;
  return min, max, predel;
};


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
    document.getElementById('numberA').innerHTML = a;               
};  

function insertNumberB(){   
    document.getElementById('numberB').innerHTML = b;           
};

function insertNumberZminus(){  
   document.getElementById('numberZ').innerHTML = z;               
};  

 function insertNumberYminus(){  
   document.getElementById('numberY').innerHTML = y;           
};

/* ----------------------------------------*/


function changeBackgroundColorToGreen1(){
  document.getElementById('urovnenie1').style.background = 'green';
};

function changeBackgroundColorToRed1(){
  document.getElementById('urovnenie1').style.background = 'red';
};

function changeBackgroundColorToGreen2(){
  document.getElementById('urovnenie2').style.background = 'green';
};

function changeBackgroundColorToRed2(){
  document.getElementById('urovnenie2').style.background = 'red';
};

/* ----------------------------------------*/


let c = a + b; //правильный результат сложения 
Number(c);

function testPlus(){
  let d = document.getElementById('testPlus').value;
  Number(d); //введённый ответ сложения
    
  if (c == d)
    {
      changeBackgroundColorToGreen1();
      victorySound();    
    } else {
            changeBackgroundColorToRed1();
            wrongSound();
          };
    };


// правильный результат вычитания
let x = z - y;
Number(x); 

 /*
 это переменные для вычитания
 let y = getRandomInt(min, max);  // от 1 до 5
 let z = getRandomInt(max, predel); // от 5 до 10
*/


function victorySound(){  
  audio = new Audio(); // Создаём новый элемент Audio    
  audio.src = './sounds/victory.mp3'; // Путь к звуковому файлу
  audio.play();  
};

function wrongSound(){  
  audio = new Audio(); // Создаём новый элемент Audio    
  audio.src = './sounds/wrong.mp3'; // Путь к звуковому файлу
  audio.play();  
};


function testMinus(){
      let d = document.getElementById('testMinus').value;
      Number(d); // введённый результат вычитания
        
      if (x == d)
        {
          changeBackgroundColorToGreen2();  
          victorySound();        
        } else {
                changeBackgroundColorToRed2();                
                wrongSound();                
              };
        };


let rgb1 = document.getElementById('urovnenie1');        
let rgb2 = document.getElementById('urovnenie2');        

function setRandomColor1() {
   let letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)];
    }
    rgb1.style.borderColor = color;
};

function setRandomColor2() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
     color = color + letters[Math.floor(Math.random() * 16)];
   }
   rgb2.style.borderColor = color;
};





