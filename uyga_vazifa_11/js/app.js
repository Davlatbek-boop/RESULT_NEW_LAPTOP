//>>>>>>>>>>>>>>>>>>>>>>>>>>>> >>> masala-1

// function difference (arr1, arr2){
//     arr1 = arr1.flat(10)
//     arr2 = arr2.flat(10)
//     const jam = arr1.concat(arr2);
//     jam.sort((a,b) => a - b)

//     const natija = []
//     jam.forEach(element => {
//         if (natija.indexOf(element) == -1){
//             natija.push(element);
//         }
//     });
//     return natija
// }
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

// >>>>>>>>>>>>>>>>> >>>>>>>>>>> >>> masala-2

// function move(array, fromIndex, toIndex) {
//     if (fromIndex < 0 && toIndex < 0){
//         let a = array[array.length + toIndex];
//         array[array.length + toIndex] = array[array.length + fromIndex]
//         array[array.length + fromIndex] = a
//         return array;
//     }
//     else if (fromIndex < 0) {
//         let a = array[toIndex];
//         array[toIndex] = array[array.length + fromIndex];
//         array[array.length + fromIndex] = a;
//         return array;
//     }
//     else if (toIndex < 0) {
//         let a = array[array.length + toIndex];
//         array[array.length + toIndex] = array[fromIndex];
//         array[fromIndex] = a;
//         return array;
//     }
//     else {
//       let a = array[toIndex];
//       array[toIndex] = array[fromIndex];
//       array[fromIndex] = a;
//     }
//     return array;
// }
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// console.log(move([10, 20, 30, 40, 50], -1, -2));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>> >>> masala-3

// function noyob (array){
//     let result = [];
//     array.forEach(element => {
//         if (result.indexOf(element) == -1){
//             result.push(element)
//         }
//     });
//     return result
// }
// console.log(noyob([1, 2, 2, 3, 4, 4, 5]));
// console.log(noyob([1, 2, 3, 4, 5]));
// console.log(noyob([1, -2, -2, 3, 4, -5, -6, -5 ]));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>> >>> masala-4

function teskari(matn) {
    const spl = matn.split(" ")
    spl.sort((a, b) => b.length - a.length);
    return spl
}
console.log(
  teskari(
    "Berilgan matn ichidagi barcha so'zlarni uzunligi bo'yicha teskari tartibda tartiblab chiqaring."
  )
);
 