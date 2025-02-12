//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 1

// class Avto {
//    constructor(marka, model, year) {
//       this.marka = marka,
//       this.model = model,
//       this.year = year
//    }
// }
// class YengilAvto extends Avto{
//    constructor(marka, model, year){
//       super(marka, model, year)
//    }
// }
// class YukAvto extends Avto {
//   constructor(marka, model, year) {
//     super(marka, model, year);
//   }
// }
// class Garaj{
//    constructor(joylarSoni){
//       this.avtolar = []
//       this.joylarSoni = joylarSoni
//    }
//    joyla(yangiAvto){
//       if (typeof yangiAvto == "object"){
//          if (this.joylarSoni > 0){
//             this.avtolar.push(yangiAvto);
//             this.joylarSoni--;
//             console.log("Avto qo'shildi");
//          }
//          else{
//             console.log("Uzr joy to'ldi");
//          }
//       }
//       else{
//          console.log("Faqat Avtolar qo'shish mumkin");
//       }
//    }
// }

// let garage = new Garaj(2)
// console.log(garage.avtolar);
// garage.joyla(new YengilAvto("Hyundai", "Elantra", 2019));
// console.log(garage.avtolar);
// garage.joyla("Moto")
// garage.joyla(new YukAvto("Kamaz", "Kamaz77", 2000))
// console.log(garage.avtolar);
// garage.joyla(new YengilAvto("GM", "Nexia", 2018))




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala -2

// function odamSoni (arr){
//    let chiqqanlar = 0
//    let tushganlar = 0
//    arr.forEach(element => {
//       chiqqanlar += element[0]
//       tushganlar += element[1]
//    });

   
//     console.log(chiqqanlar - tushganlar);
    
// }
//  odamSoni([
//    [10, 0],
//    [3, 5],
//    [5, 8],
//  ]);

//  odamSoni([
//    [3, 0],
//    [9, 1],
//    [4, 8],
//    [12, 2],
//    [6, 1],
//    [7, 8],
//  ]);
