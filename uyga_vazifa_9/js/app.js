//>>>>>>>>>>>>>>>>>>>>>>>masala - 1

// const product = {
//     nomi: "kubik-rubik",
//     miqdori: 1000,
//     narxi: 50000,
//     productInfo (){
//         console.log(`nomi: ${this.nomi}, miqdori: ${this.miqdori}, narxi: ${this.narxi}`);
//     },
//     setPrice (price){
//         this.narxi = price;
//     },
// }
// product.productInfo()
// product.setPrice(25400)
// product.productInfo();

// const tovar = {...product}
// tovar.setPrice(123456)
// product.productInfo()
// tovar.productInfo()


//>>>>>>>>>>>>>>>>>>>>>>>>masala - 2
// const doira = {
//     radius: +prompt("radiusni kiriting>>>"),
//     PI: 3.14,
//     getYuzi () {
//         console.log(this.PI*this.radius**2);
//     }
// }
// doira.getYuzi()

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 3

// function InvertKeyValue (obj){
//     const yangiObj = {}
//     for (const key in obj) {
//         yangiObj[obj[key]]=key
//     }
//     console.log(yangiObj);
// }
// InvertKeyValue({red: "qizil", green: "yashil", blue: "ko'k"})





//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> QO'SHIMCHA MASALA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>> MASALA - 1
// Berilgan ikkita massivni obyekt shaklida birlashtiring. Birinchi massiv kalitlar, ikkinchi massiv esa qiymatlar bo‘lsin.
// Natija: { name: "Ali", age: 25, country: "Uzbekistan" }

// const keys = ["name", "age", "country"];
// const values = ["Ali", 25, "Uzbekistan"];

// const natija={}
// for (let i = 0; i<keys.length; i++){
//     natija[keys[i]] = values[i]
// }
// console.log(natija);
