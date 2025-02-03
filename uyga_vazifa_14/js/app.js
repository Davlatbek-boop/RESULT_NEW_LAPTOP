
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 1
// class Product {
//   static count = 0;
//   static totalPrice = 0;
//   constructor(name, price) {
//     Product.count++;
//     this.id = Product.count;
//     this.name = name;
//     this.price = price;
//     Product.totalPrice += price;
//   }
//   static productCount() {
//     return Product.count;
//   }
//   static TotalPrice() {
//     return Product.totalPrice;
//   }
// }

// class CareProduct extends Product {
//   constructor(name, price, warrantyPeriod) {
//     super(name, price);
//     this.warrantyPeriod = warrantyPeriod;
//     switch (warrantyPeriod) {
//       case 5:
//         this.price = this.price - this.price * 0.1;
//         break;
//       case 4:
//         this.price = this.price - this.price * 0.2;
//         break;
//       case 3:
//         this.price = this.price - this.price * 0.3;
//         break;
//       case 2:
//         this.price = this.price - this.price * 0.4;
//         break;
//       case 1:
//         this.price = this.price - this.price * 0.5;
//         break;
//       default:
//         this.price = this.price;
//         break;
//     }
//   }
//   TotalPrice (){
//     return this.price
//   }
// }

// const mah1 = new CareProduct("sut", 11570, 5);
// const mah2 = new CareProduct("qatiq", 10000, 4);
// const mah3 = new CareProduct("chakki", 25000, 3);
// const mah4 = new CareProduct("zardob", 5000, 2);
// const mah5 = new CareProduct("ayron", 13000, 1);
// const mah6 = new CareProduct("qaymoq", 16000, 5);
// const mah7 = new CareProduct("tvorog", 15000, 4);
// const mah8 = new CareProduct("slivki", 28000, 10);
// const mah9 = new CareProduct("prostovasha", 22000, 2);
// console.log(Product.productCount());
// console.log(Product.TotalPrice());
// console.log(mah9.TotalPrice());



//>>>>>>>>>>>>>>>>>>>masala - 2
// class Point {
//     constructor( x, y){
//         this.x= x;
//         this.y= y;
//     }
//     static distance (obj1, obj2){
//         return Math.sqrt(Math.pow((obj2.x - obj1.x),2) + Math.pow((obj2.y - obj1.y),2));
//     }
// }

// let p1 = new Point(5, 5);
// let p2 = new Point(9, 8);
// console.log(Point.distance(p1, p2));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 3
// class Universitet {
//     constructor (name){
//         this.name = name
//         this.departments = []
//     }
//     addDepartment(departmentName){
//         this.departments.push(departmentName)
//     }
//     removeDepartment(departmentName){
//             const index = this.departments.indexOf(departmentName);
//             if (index !== -1){
//                 this.departments.splice(index, 1);
//                 console.log(`${departmentName}- department o'chirildi`);
//             }
//         else{
//             console.log(`${departmentName}- Bunday department mavjud emas`);
//         }
//     }
//     showDepartment(){
//         return this.departments.find((item) => {
//             console.log(item);
//         })
//     }
// }
// const object = new Universitet("Milliy Universitet")
// object.addDepartment("IT texnologiyalar")
// object.addDepartment("Biologiya");
// object.addDepartment("Kimyo");
// object.addDepartment("Matematika");
// object.addDepartment("Falsafa");

// object.removeDepartment("Biologiya");
// object.removeDepartment("Falsafa");
// object.removeDepartment("Yagona")
// object.showDepartment()
