// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 1
// const users = new Map();

// const user1 = new Map();
// const user2 = new Map();
// const user3 = new Map();

// user1.set("tel", ["+998933572546"]);
// user2.set("tel", ["+998912345668"]);
// user3.set("tel", ["+998931234566"]);

// users.set("Muhammad Yusuf", user1);
// users.set("Alisher Navoiy", user2);
// users.set("Amir Temur", user3);

// function createNumber(name, number){
//     if (number == undefined){
//         return "Iltimos raqamni kiriting"
//     }
//     if (users.has(name)){
//         const user = users.get(name)
//         const raqam = user.get("tel")
//         raqam.push(number)
//         return users
//     }
//     else{
//         return "bunday foydalanuvchi mavjud emas";
//     }
// }
// // console.log(createNumber("Amir Temur", "+99998999999"));

// function changeNumber(name, lastNumber, newNumber){
//     if (users.has(name)) {
//       const user = users.get(name);
//       const raqam = user.get("tel");
//         raqam[(raqam.indexOf(lastNumber))] = newNumber
//       return users;
//     } else {
//       return "bunday foydalanuvchi mavjud emas";
//     }
// }
// console.log(changeNumber("Amir Temur", "+998931234566","+9876543219111"))

// function deleteNumber(name, lastNumber) {
//   if (users.has(name)) {
//     const user = users.get(name);
//     let raqam = user.get("tel");
//     delete raqam[raqam.indexOf(lastNumber)]
//     return users;
//   } else {
//     return "bunday foydalanuvchi mavjud emas";
//   }
// }
// console.log(deleteNumber("Amir Temur", "+9876543219111"));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 2

// const input = [
//   ["IP=192.23.30.40 message='Hello&derps.' user=destroyer"],
//   ["IP=192.23.30.41 message='Hello&yall.' user=destroyer"],
//   ["IP=192.23.30.40 message='Hello&hi.' user=destroyer"],
//   ["IP=192.23.30.42 message='Hello&Dudes.' user=destroyer"],
// ];

// function maap(input) {
//   const newMap = new Map();

//   for (let j of input) {
//     arr = String(j).split(" ");
//     const map = new Map();
//     for (let i of arr) {
//       const item = String(i).split("=");
//       map.set(item[0], item[1]);
//     }
//     newMap.set(count, map);
//     count++;
//   }
//   const userIPCount = new Map();

//   for (const [, subMap] of newMap) {
//     const user = subMap.get("user");
//     const ip = subMap.get("IP");

//     if (user && ip) {
//       if (!userIPCount.has(user)) {
//         userIPCount.set(user, new Map()); 
//       }
//       const ipCount = userIPCount.get(user);
//       ipCount.set(ip, (ipCount.get(ip) || 0) + 1);
//     }
//   }
//   userIPCount.forEach((ipMap, user) => {
//     console.log(`User: ${user}`);
//     ipMap.forEach((count, ip) => {
//       console.log(`  ${ip} => ${count}`);
//     });
//   });
// }
// maap(input);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 3
// function deleteNumber(name, lastNumber) {
//   if (users.has(name)) {
//     const user = users.get(name);
//     let raqam = user.get("tel");
//     delete raqam[raqam.indexOf(lastNumber)]
//     return users;
//   } else {
//     return "bunday foydalanuvchi mavjud emas";
//   }
// }
// console.log(deleteNumber("Amir Temur", "+9876543219111"));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 2

const input = [
  ["192.168.0.11 peter 33"],
  ["10.10.17.33 alex 12"],
  ["10.10.17.35 peter 30"],
  ["10.10.17.34 peter 120"],
  ["10.10.17.34 peter 120"],
  ["212.50.118.81 alex 46"],
  ["212.50.118.81 alex 4"],
];

function tartib(input) {
  const userIPCount = new Map();

  input.forEach(([entry]) => {
    const [ip, user] = entry.split(" ");

    if (!userIPCount.has(user)) {
      userIPCount.set(user, new Map());
    }

    const ipCount = userIPCount.get(user);
    ipCount.set(ip, (ipCount.get(ip) || 0) + 1);
  });

  // Natijani chiqarish
  userIPCount.forEach((ipMap, user) => {
    console.log(`User: ${user}`);
    ipMap.forEach((count, ip) => {
      console.log(`  ${ip} => ${count}`);
    });
  });
}

tartib(input)

