console.log(/\d{2} \d{3} [A-Z]{3}/.test("01 123 ABC"));// yuridik chaxslar
console.log(/\d{2} [A-Z]{1} \d{3} [A-Z]{2}/.test("01 A 123 BC"));// jismoniy shaxslar
console.log(/[A-Z]{3} \d{3}/.test("PAA 000")); // Prezident devoni
console.log(/[A-Z]{3} \d{2}-\d{2}/.test("CMD 12-34"));// chet davlatlar diplomatik vakolatxonalari
console.log(/[A-Z]{1} \d{5}/.test("D 012345"));// corijiy davlatlar elchiconalari
console.log(/[A-Z]{2} \d{4}/.test("UN 1234"));//BMT va unga tegishli xalqaro tuzilmalar
console.log(/[A-Z]{1} \d{6}/.test("T 012345"));// Xorijiy davlatdar diplomatik
console.log(/\d{2} [A-Z]{1} \d{6}/.test("10 T 012345"));// Xalqaro nodavlat tashkilotlar, birlashmalar, banklar, firmalar
console.log(/[A-Z]{1} \d{6} \d{2}/.test("T 012345 10"));// yo'l harakatida vaqtincha qatnashish uchun beriladigan raqam


