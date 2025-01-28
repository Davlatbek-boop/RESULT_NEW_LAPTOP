
//>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 1
// function truncate(str, maxlength) {
//     if (str.length <= maxlength){
//         console.log(str);
//     }
//     else{
//         console.log(str.slice(0,maxlength) + "...");
//     }
// }
// truncate("Salom Najot ta'lim", 17)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 2

// function select(s1, s2) {
//     let a = ""
//     for (let i = 0; i < s1.length; i++){
//         if (!s2.includes(s1[i])){
//             a += s1[i]
//         }
//     }
//     for (let i = 0; i < s2.length; i++) {
//       if (!s1.includes(s2[i])) {
//         a += s2[i];
//       }
//     }
//     return a
// }
// console.log(select("Salom", "Kalom"));



//>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 3

// const sanash = (str) =>{
//     let result = ""
//     for (let i of str){
//         let count = 0
//         for (let j of str){
//             if (i == j){
//                 count ++;
//             }
//         }
//         if (!result.includes(i) && i != " "){
//             result += i + "*".repeat(count) + ","
//         }
//     }
//     return result
// }
// console.log(sanash("NAJOT TA'LIM"));



