
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala-2

// function zeroArray(arr){
//    let summa = 0
//    let newArr = []
//    for (let i = arr.length-1; i >= 0; i--){
//       let count = 0
//       if (arr[i]==0){
//          break;
//       }
//       newArr.push(arr[i])
//       newArr.forEach( j => {
//          if (j==arr[i]){
//             count ++
//          }
//       })
//       summa += Math.pow(arr[i], count)
//    }
//    return summa
// }
// console.log(zeroArray([1, 2, 3, 4, 0, 2, 4, 6,2,2,6]));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala-3


// async function jsonQuran(suraNumber){
//    const response = await fetch(
//      `https://api.alquran.cloud/v1/surah/${suraNumber}/uz.sodik`  
//    );
//    const dataJson = await response.json()
//    let oyatToplam = ""
//    dataJson.data.ayahs.forEach( oyat => {
//       oyatToplam += oyat.text.replaceAll(/[.()"",-:]/g, "").toLowerCase()
//    });
//    const oyatArray = oyatToplam.split(" ")
//    const oyatMap = new Map()
//    oyatArray.forEach(soz => {
//       let count = 0
//       oyatArray.forEach( soz2 => {
//          if (soz == soz2){
//             count ++
//          }
//       })
//       oyatMap.set(soz, count)
//    })
//    console.log(oyatMap);
// }

// jsonQuran(1)