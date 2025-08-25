// ////DOM Document Object Model

// const view1 = document.getElementById("view1");
// console.log(view1);

// const view2=document.querySelector("#view2");//#=ID Name
// console.log(view2)//querySelector is common

// //view1.style.display="flex";
// //view2.style.display="none";

// const views = document.getElementsByClassName("view1")
// console.log(views);

// const sameViews = document.querySelectorAll(".view")
// console.log(sameViews);//querySelector nu potha NodalList nu varum

// const divs = document.querySelectorAll("div")
// console.log(divs);

// const samedivs = view1.getElementsByTagName("div")
// console.log(samedivs);//getElementById/Tag nu potha HTMLCOLLECTION NU VARUM

// const Evendivs = document.querySelectorAll("div:nth-of-type(2n)");
//                     //nth-of-type(2*natural no)-->for css code
// console.log(Evendivs);

// Evendivs[3].style.backgroundColor="purple";

// for(i=0;i<Evendivs.length;i++){
//    Evendivs[i].style.width="150px";
//    Evendivs[i].style.backgroundColor="green";
// }

// /*const navText=document.querySelector("navh1");
// console.log(navText);
// navText.textContent ="Hello World";*/

// const navBar=document.querySelector("nav");
// navBar.innerHTML='<h1>JavaScript</h1> <p>Project</p>'
// console.log(navBar);
// navBar.style.justifyContent="flex-start"
// navBar.style.justifyContent="flex-end"
// navBar.style.justifyContent="space-evenly"

// console.log(Evendivs[1]);
// console.log(Evendivs[0].parentElement);
// console.log(Evendivs[0].parentElement.children);
// console.log(Evendivs[0].parentElement.childNodes);
// console.log(Evendivs[0].parentElement.hasChildNodes());
// console.log(Evendivs[0].parentElement.lastChild);
// console.log(Evendivs[0].parentElement.lastElementChild);
// console.log(Evendivs[0].parentElement.firstChild);
// console.log(Evendivs[0].parentElement.firstElementChild);
// console.log(Evendivs[0].nextSibling);
// console.log(Evendivs[0].nextElementSibling);
// console.log(Evendivs[0].nextElementSibling.nextSibling);
// console.log(Evendivs[0].previousSibling);
// console.log(Evendivs[0].previousElementSibling);

// view1.style.display="flex";
// view2.style.display="flex";
// view2.style.flexDirection="";
// view2.style.flexDWrap="wrap";
// view2.style.margin="10px";

// console.log(view2.lastChild);
// console.log(view2.lastElementChild);
// //view2.lastElementChild.remove();

// while(view2.lastChild){
//     view2.lastChild.remove();
// }
// const createDiv=(parent,iter) => {
// const newDiv=document.createElement("div");
// //newDiv.textContent="JavaScript";
// newDiv.textContent=iter;
// newDiv.style.width="100px";
// newDiv.style.height="100px";
// newDiv.style.margin="10px";
// newDiv.style.backgroundColor="lavender";
// newDiv.style.color="black";
// newDiv.style.display="flex";
// newDiv.style.justifyContent="center";
// newDiv.style.alignItems="center";

// newDiv.style.margin="50px";
// newDiv.style.borderRadius="10px";
// newDiv.style.fontSize="20px";
// newDiv.style.fontWeight="bold";
// newDiv.style.boxShadow="0 0 10px red";
// //view2.append(newDiv);
// parent.append(newDiv);
// }
// for(let i=1;i<13;i++){
//     createDiv(view2,i);
// }

// //DOM Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2"); //#=ID Name
console.log(view2); //querySelector is common

//view1.style.display="flex";
//view2.style.display="flex";

const views = document.getElementsByClassName("view"); // corrected class name
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews); //querySelector nu potha NodalList nu varum

const divs = document.querySelectorAll("div");
console.log(divs);

const samedivs = view1.getElementsByTagName("div");
console.log(samedivs); //getElementById/Tag nu potha HTMLCOLLECTION NU VARUM

const Evendivs = document.querySelectorAll("div:nth-of-type(2n)");
//nth-of-type(2*natural no)-->for css code
console.log(Evendivs);

Evendivs[3].style.backgroundColor = "purple";

for (let i = 0; i < Evendivs.length; i++) { // added let
    Evendivs[i].style.width = "150px";
    Evendivs[i].style.backgroundColor = "green";
}

/*const navText=document.querySelector("navh1");
console.log(navText);
navText.textContent ="Hello World";*/

const navBar = document.querySelector("nav");
navBar.innerHTML = '<h1>JavaScript</h1> <p>Project</p>';
console.log(navBar);
// Only keep one justifyContent value
navBar.style.justifyContent = "space-evenly";

console.log(Evendivs[1]);
console.log(Evendivs[0].parentElement);
console.log(Evendivs[0].parentElement.children);
console.log(Evendivs[0].parentElement.childNodes);
console.log(Evendivs[0].parentElement.hasChildNodes());
console.log(Evendivs[0].parentElement.lastChild);
console.log(Evendivs[0].parentElement.lastElementChild);
console.log(Evendivs[0].parentElement.firstChild);
console.log(Evendivs[0].parentElement.firstElementChild);
console.log(Evendivs[0].nextSibling);
console.log(Evendivs[0].nextElementSibling);
console.log(Evendivs[0].nextElementSibling.nextSibling);
console.log(Evendivs[0].previousSibling);
console.log(Evendivs[0].previousElementSibling);

view1.style.display = "flex";
view2.style.display = "flex";
view2.style.flexDirection = "";
view2.style.flexWrap = "wrap"; // corrected property name
view2.style.margin = "10px";

console.log(view2.lastChild);
console.log(view2.lastElementChild);
//view2.lastElementChild.remove();

while (view2.lastChild) {
    view2.lastChild.remove();
}
const createDiv = (parent, iter) => {
    const newDiv = document.createElement("div");
    //newDiv.textContent="JavaScript";
    newDiv.textContent = iter;
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.backgroundColor = "lavender";
    newDiv.style.color = "black";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";

    newDiv.style.margin = "50px";
    newDiv.style.borderRadius = "10px";
    newDiv.style.fontSize = "20px";
    newDiv.style.fontWeight = "bold";
    newDiv.style.boxShadow = "0 0 10px red";
    //view2.append(newDiv);
    parent.append(newDiv);
};
for (let i = 1; i < 13; i++) {
    createDiv(view2, i);
}


