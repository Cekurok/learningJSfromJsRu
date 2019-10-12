// // 'aaabbccdda' => '3a2b2c2d1a';
// let str = 'aaabbccdda'
// function fn (s){
//     return ''
// }
// fn(str) // '3a2b2c2d1a'
"use strict";

// function str(string1) {
//     //let arr1 = string1.split("");
//     let i = 1;
//     let oneChar = string1[0];
//
//     let stringOut = [];
//     for (let j = 1; j < string1.length +1; j++){
//         if (oneChar === string1[j]){
//             i++;
//         } else {
//
//             stringOut.push(i);
//             stringOut.push(oneChar);
//             oneChar = string1[j];
//             i = 1;
//         }
//     }
//     return stringOut.join("");
//
//
// }

function str(stringTo) {
    let i = 1;
    let oneChar = stringTo[0];
    let stringOut = "";
    for (let char of stringTo) {
        if (oneChar === char) {
            i++;
        } else {
            stringOut += i + oneChar;
            oneChar = char;
            i = 1;
        }

    }
    return stringOut;
}
let word = 'aaabbccdda';

console.log(str(word));
