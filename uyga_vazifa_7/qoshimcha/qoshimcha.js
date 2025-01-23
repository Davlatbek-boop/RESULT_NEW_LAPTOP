// >>>>>>>>>>>>>masala-1
// Fibonachchi qatorini hosil qiling. Foydalanuvchi nechta son kerakligini kiritadi, dastur shuncha sonni chiqaradi.

// let son = +prompt("son kiriting");
// let f1 = 1;
// let f2 = 1;
// for (let i = 1; i<=son; i++){
//     console.log(f1);
//     let f3 = f1 + f2;
//     f1 = f2;
//     f2 = f3;
// }

//>>>>>>>>>>>>>>masala-2
//Foydalanuvchi 0 kiritguncha sonlar kiritadi. Ushbu sonlarning yig'indisini hisoblaydigan dastur yozing.

// let summ = 0;
// let son;
// do{
//     son = +prompt("son kiriting");
//     summ += son;
// }while(son != 0);
// console.log(`Yig'indi = ${summ}`)


// >>>>>>>>>>>>>>masala-3
// Foydalanuvchi sonlar kiritadi va 0 kiritgach dastur to'xtaydi. Siz shu kiritilgan sonlar ichidagi eng kattasini topuvchi dastur yozing.

// let max = 0;
// let son;
// do{
//     son = +prompt("son kiriting");
//     if (max < son){
//         max = son;
//     }
// }while(son != 0);
// console.log(`Eng katta son = ${max}`)

//>>>>>>>>>>>>>>>>>>>>masala-4
//Foydalanuvchi biror musbat butun son kiritadi. Siz shu sonni teskari yozadigan dastur yozing.

// let son = +prompt("son kiriting>>>");
// let teskari = 0;
// do{
//     teskari = teskari * 10 + son % 10 
//     son = Math.floor(son / 10);
// }while(son > 0)

// console.log(teskari);


//>>>>>>>>>>>>>>>>>>>>masala - 5
//Foydalanuvchidan soat kiritishni so'rang (0-24). Agar soat 9 dan 18 gacha bo'lsa, "Ish vaqti", aks holda "Dam olish vaqti" deb chiqaring.

// let soat = +prompt("soatni kiriting>>(0-24)");
// switch (true) {
//     case soat >= 9 && soat <= 18:console.log("Ish vaqti");break;
//     case soat >= 0 && soat <= 24:console.log("Dam olish vaqti");break;
//     default:console.log("Bunday soat yo'q!!!");
//      break;
// }

// >>>>>>>>>>>>>>>>>>>masala - 6
//1 dan 100 gacha bo'lgan barcha sonlarning kubini hisoblab, natijasi 100 dan kam bo'lganlarini ekranga chiqaring.

// for (let i = 1; i < 100; i++){
//     if (Math.pow(i,3) < 100){
//         console.log(Math.pow(i, 3));
//     }
//     else{
//         break;
//     }
// }

//>>>>>>>>>>>>>>>>>>masala - 7
//Foydalanuvchi ismini so'rang va uni teskari yozib chiqaring.

// let ism = prompt("Ismingizni kiriting>>>");
// let tes = ism.split("").reverse("").join("");
// console.log(tes);