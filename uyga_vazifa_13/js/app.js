// >>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 1

// let bosh = prompt("ishning boshlanishini kiriting").split(":");
// let tug = prompt("ishning tugash vaqtini kiriting").split(":");
// if (Number(bosh[0]) > Number(tug[0]) || Number(bosh[0]) == Number(tug[0]) && Number(bosh[1]) - Number(tug[1]) > 0) {
//   console.log(
//     "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas"
//   );
// } else {
//   console.log(
//     `${Number(tug[0]) - Number(bosh[0])} soat ${
//       Number(tug[1]) - Number(bosh[1])
//     } daqiqa`
//   );
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala -2

// let bankKuni = prompt("kunni kiriting")
// let i = 1;
// let count = 0
// let kun
// while (count < bankKuni) {
//     let sana = `2025-01-${i}`;
//     let date = new Date(sana);
//     let form = String(date).split(" ");
//     if (form[0] != "Sat" && form[0] != "Sun") {
//         count ++;
//         kun = date
//     }
//     i ++;
// }
// console.log(kun);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 3

// function findCommonPairs(obj1, obj2) {
//   let common = {};

//   for (let key in obj1) {
//     if (obj2.hasOwnProperty(key)) {
//       if (
//         typeof obj1[key] === "object" &&
//         typeof obj2[key] === "object" &&
//         !Array.isArray(obj1[key]) &&
//         !Array.isArray(obj2[key])
//       ) {
//         let nestedCommon = findCommonPairs(obj1[key], obj2[key]);
//         if (Object.keys(nestedCommon).length > 0) {
//           common[key] = nestedCommon;
//         }
//       } else if (obj1[key] === obj2[key]) {
//         common[key] = obj1[key];
//       }
//     }
//   }
//   return common;
// }
// const jsonData1 = {
//   user: {
//     name: "Ali",
//     age: 25,
//     address: {
//       city: "Tashkent",
//       zip: "100000",
//     },
//   },
//   active: true,
// };

// const jsonData2 = {
//   user: {
//     name: "Ali",
//     age: 30,
//     address: {
//       city: "Tashkent",
//       zip: "200000",
//     },
//   },
//   active: true,
// };

// console.log(findCommonPairs(jsonData1, jsonData2));

