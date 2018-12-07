console.log(document);
console.dir(document);

// var simplifiedDocument = {
//     children: [
//         {
//             tag: "html",
//             children: [
//                 {
//                     tag: "head"
//                 },
//                 {
//                     tag: "body"
//                 }
//             ]
//         }
//     ]
// }

// simplifiedDocument.children[0].children[1]

var sean = document.getElementById("seanDiv");
sean.innerHTML = "I just changed this text"
sean.style.backgroundColor = "red"

sean.innerHTML += `
    <img src="https://placehold.it/200x200">
`

var response = Number(prompt("I am a prompt"))

// var newImage = document.createElement("img");
// newImage.src = "https://placehold.it/300x300"
// document.getElementById("seanDiv").appendChild(newImage)
console.log(sean)
console.log(response)