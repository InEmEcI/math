

let arr = [10,9,8,7,6,5,4,3,2,1,0];
let N = arr.length;
let j = N - 1;
let i = 0;
let temp;


 for (j; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      };
    };
  };


/*
const config = {
    level: 1,
   
    start: 0,
    step: 10
  }
   
  // Public
  function createAdditionEquation() {
    const left = getRandInBorders()
    const right = getRandInBorders(0, left)
    
    const solution = left + right
   
    const textual = createTextual(
      'a + b',
      [left, right]
    )
   
      return {
          solution,
          textual
      }
  }
   
  function createSubtractionEquation() {
      const left = getRandInBorders()
      const right = getRandInBorders(0, getTopThreshold() - left, true)
   
      const solution = left - right
   
      const textual = createTextual(
      'a - b',
      [left, right]
    )
   
      return {
          solution,
          textual
      } 
  }
   
  // Methods
  function getRandInBorders(offset = 0, slicer = 0, inclusive = false) {
    return rand(config.start + offset, getTopThreshold() - slicer, inclusive)
  }
   
  function getTopThreshold() {
    return config.level * config.step
  }
   
  // Tools
  function createTextual(template, args = []) {
      const map = new Map()
   
      return template.replaceAll(/[a-z]/g, character => {
          if (map.has(character)) return map.get(character)
   
                  if (map.size >= args.length) throw `No replacer for ${character}`
   
          const replacer = args[map.size]
   
          map.set(character, replacer)
   
          return replacer
      })
  }
   
  function rand(from, to, inclusive = false) {
      return from + Math.floor(Math.random() * (to - from + inclusive))
  }
   
  // Usage
   
  console.log(createAdditionEquation())
  console.log(createSubtractionEquation())   

  */







  /* ----------------------------------------------------------------- */

  const store = {
    level: 1,
 
    start: 0,
    step: 10,
 
    get topThreshold() {
        return this.level * this.step
    },
 
    randInThreshold(offset = 0) {
        return rand(this.start + offset, this.topThreshold)
    },
 
    limitedRandInThreshold(limited) {
        return rand(this.start, limited)
    } 
}
 
function createAdditionEquation() {
    const solution = store.randInThreshold(1)
    
    const leftOperand = store.limitedRandInThreshold(solution)
    const rightOperand = solution - leftOperand
 
    const textual = createTextual(
        'a + b',
        [leftOperand, rightOperand]
    )
 
    return {
        solution,
        textual
    }
}
 
function createSubtractionEquation() {
    const solution = store.randInThreshold()
 
    const firstUnknownOperand = store.limitedRandInThreshold(store.topThreshold - solution)
    const secondUnknownOperand = solution + firstUnknownOperand
 
    const leftOperand = Math.max(firstUnknownOperand, secondUnknownOperand)
    const rightOperand = Math.min(firstUnknownOperand, secondUnknownOperand)
    
    const textual = createTextual(
        'a - b',
        [leftOperand, rightOperand]
    )
 
    return {
        solution,
        textual
    }
}
 
// Tools
function rand(from, to, inclusive = true) {
    return from + Math.floor(Math.random() * (to - from + inclusive))
}
 
function createTextual(template, args = []) {
    const map = new Map()
 
    return template.replaceAll(/[a-z]/g, character => {
        if (map.has(character)) return map.get(character)
 
        if (map.size >= args.length) throw `No replacer for ${character}`
 
        const replacer = args[map.size]
 
        map.set(character, replacer)
 
        return replacer
    })
}