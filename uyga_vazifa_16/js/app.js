//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 1

// const users = ["OybekKayumov", "monkeytypegame", "Davlatbek-booop", "SamandarTurdiyev"];
// async function getUsers(names) {
//   try {
//     const urlAddress = `https://api.github.com/users/`;
//     const requests = names.map(async (user) => {
//       const res = await fetch(urlAddress + user)
//       if (!res.ok){
//          return null
//       }else{
//          return await res.json()
//       }
//     });
//     const results = await Promise.all(requests);
//     console.log(results);
//   } catch (error) {
//     console.log(error);
//     return null
//   }
// }
// getUsers(users);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 1 (2-usul)

// const users = [
//   "OybekKayumov",
//   "monkeytypegame",
//   "Davlatbek-booop",
//   "SamandarTurdiyev",
// ];
// const urlAddress = `https://api.github.com/users/`;

// async function getUsers(names) {
//   try {
//    let objects=[]
//    for (let name of names){
//       const request = await fetch(urlAddress+name);
//       if (!request.ok){
//          objects.push(null)
//          continue
//       }
//       objects.push(await request.json())
//    }
//    console.log(objects);
//   } catch (error) {
//    console.log(error);
//   }
// }
// getUsers(users)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 2

async function getUserID(id) {
  try {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const request2 = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const data = await request.json();
    const data2 = await request2.json();
    const {
      name,
      address: { city },
      company: { name: companyName },
    } = data;
    //  console.log(data2);
    const person = document.getElementById("user");
    person.innerHTML += "Name:  " + name + "<br>";
    person.innerHTML += "City:" + city + "<br>";
    person.innerHTML += "Company:" + companyName + "<br>";
    //  console.log("Name:", name);
    //  console.log("City:", city);
    //  console.log("Company:", companyName);
    const personTitle = document.getElementById("title");
    let ul = "<ol>";
    //  console.log("titlelar:");
    for (let item of data2) {
      const { title } = item;
      ul += `<li>${title}</li>`;
    }
    ul += "</ol>";
    personTitle.innerHTML = ul;
  } catch (error) {
    console.log(error);
  }
}

let son = +prompt("User id ni kiriting>>>");
getUserID(son);
