// // Frequency Counter - sameFrequency

// // Write a function called sameFrequency. Given two positive intergers,
// // find out if the two numbers have the same frequency of digits


// function sameFrequency(int1, int2){
//     //first converting integers to strings
//     let str1= `${int1}`;
//     let str2= `${int2}`;
//     // creating obj to count numbers
//     let obj1 = {};
//     let obj2 = {}
//     //looping over first "num"

//     for (const num of str1) {
//         obj1[num] = (obj1[num] || 0) + 1
//     }
//      for (const num of str2) {
//         obj2[num] = (obj2[num] || 0) + 1
//     }
//     //loop over obj 

//     for (const key in obj1) {
//         if (!(key in obj2)) {
//             return false
            
//         }
//         if(obj2[key] !== obj1[key]){
//             return false
//         }
//     }


//     return true;
// }


function sameFrequency(int1, int2) {
    const int1Arr = Array.from(int1.toString()).map(Number);
    const int2Arr = Array.from(int2.toString()).map(Number);

    if(int1Arr.length !== int2Arr.length) return false

    let refObject = {}
    
    for(var int1Val of int1Arr) {
        refObject[int1Val] = refObject[int1Val] ? refObject[int1Val] += 1 : refObject[int1Val] = 1
    }
    for(var int2Val of int2Arr) {
        if (!refObject[int2Val]) return false
        refObject[int2Val] =- 1
    }  
    return true;
}
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14)) // false
 console.log(sameFrequency(3589578, 5879385)) // true
  console.log(sameFrequency(22, 222)) // true