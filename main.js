//How to write a code Editor in javascript
console.log("hi this is js")
console.log(typeof("javascript"))
console.log(typeof(45))
//String Property
myVariable="mathematics"
console.log(myVariable)
console.log(myVariable.length )
//Float
myFloat=42.27
console.log(myFloat)
//Sting Method
console.log(myVariable.charAt(2))
console.log(myVariable.indexOf("mati"));
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.slice(5,8))
console.log(myVariable.toUpperCase())
console.log(myVariable.toLowerCase())
console.log(myVariable.includes("js"))
console.log(myVariable.includes("mat"))
console.log(myVariable.split("e"))
console.log(myVariable.split(""))
//Number
myNumber=42
console.log(myNumber)
console.log(myNumber===myVariable)
console.log(Number("java")+4)
console.log(Number (9+8))
console.log(Number(true))
console.log(Number(false))
myVariable="423.098aaa"
myFloat=42.0
//isInteger
console.log(Number.isInteger(myVariable))
//parseFloat
console.log(Number.parseFloat(myVariable))
console.log(Number.parseFloat(myVariable).toFixed(3))
console.log(Number.parseFloat(myFloat))
//parseInt
console.log(Number.parseInt(myVariable))
console.log(Number.parseInt(myFloat))
//Number.isNaN
console.log(Number.isNaN(42))
console.log(Number.isNaN("Dhuddu"))
//isNaN
console.log(isNaN(42))
console.log(isNaN("Dhuddu"))
//math properties
console.log(Math.PI)
console.log(Math.trunc(Math.PI))
console.log(Math.round(4.4))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.8))
console.log(Math.pow(5,7))
console.log(Math.min(2,5,6,9,7,12,15))
console.log(Math.max(2,5,6,9,7,12,15))
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.log(45))
console.log(Math.floor(Math.random()*10)+1)
console.log(Math.floor(Math.random()*100)+1)
//Code challange
myVariable="javascript"
console.log("javascript".charAt((Math.random()*10)+1))
console.log("javascript".charAt((Math.floor(Math.random()*10)+1)))
console.log("javascript".charAt((Math.ceil(Math.random()*10)+1)))
console.log(myVariable.charAt((Math.random()*myVariable.length)))//best Method
//If Statement
let customerIsBanned=false;
let viewer="javascript Full Course In YouTube";
let reply;
let finance=false;
if(customerIsBanned){
    reply='Sorry';
}
else if (viewer && finance) {
    reply=`Watch ${viewer} and finance content`;
}
else if (viewer) {
    reply=`Watch ${viewer}`;
}
else {
    reply='Sorry I Am still working'
}
console.log(reply); 
//if Statement
let testScore=90;
let grade;
let collegeStudent=true;
if(testScore>=90){
    grade="A";
}else if(testScore>=80){
    grade="B";
}else if(testScore>=70){
    grade="C";
}else if(testScore>=60){
    grade="D;"
}
else {
    if(collegeStudent){
        grade="RA";
    }else{
        grade="F";
    }
}
console.log(grade); 

//switch Statement-1
switch (2) {   //expressions or values
    case 1:
        console.log(1);
        //run code
        break;
    case 2:
        console.log(2);
        //run different  code
        break;
    default:
        console.log("No Match");
}
//switch Statement-2
switch (Math.floor(Math.random()*4)) {   //expressions or values
    case 1:
        console.log(1);
        //run code
        break;
    case 2:
        console.log(2);
        //run different  code
        break;
    default:
        console.log("No Match");
}
//switch Statement-3
let player="rock";
let computer="scissors"
switch (player) {   //expressions or values
    case computer:
        console.log("Tie");
        //run code
        break;
    case "rock":
    if(computer=="scissors"){
        console.log("player Win");
    }
    else{
        console.log("computer Win");
    }
        //run different  code
        break;
    default:
        console.log("No Tie");
}

//switch Statement-4
let playerName="palani";
let computerName="kumar";
switch (playerName) {   //expressions or values
    case "computer":
        console.log("Match");
        //run code
        break;

    case "palani":
    if(computerName==="kumar"){//playerName & computerName are not Match
        console.log("playerName");
    }
    else{
        console.log("computerName");//
    }
        //run different  code
        break;
    default:
        console.log("No Match");
}

 //Ternary Operator-1
 let subScriber="subScribed";
 let response=subScriber?"Welcome":"Kindly subScribe";
 console.log(response);
 //Ternary Operator-2
 let examScore = 90;
 let mark = examScore > 89 ? "A"
 : examScore > 79 ? "B"
 : examScore > 69 ? "c"
 : "D"
 console.log(mark);

//Code challange-2
 let players="paper";
 let computers="scissors";
 let result=
     players===computers?"Tie"
     :players==="paper" && computers === "rock"?"computers Win!"
     :players==="paper" && computers === "scissors"?"computers Win!" 
     :players==="scissors" && computers === "rock"?"computers Win!"
     :"players win";
     console.log(result);
//user input ex-1
/*let myBoolean=alert("Ell Makka")//undefined message
console.log(myBoolean);
//ex-2
let myboolean=confirm("Hlo Nanba")//true or false message
console.log(myboolean);
//ex-3
let my=prompt("Enter your Name");//ok kududa name print aagum
console.log(my);
//ex-4
let My=prompt("Enter your Name:");//cancel kududa null print aagum
console.log(My ?? "you didn't Enter your name");//yes or no nallum 
//ex-5                               //entha conition tha print aagum
let Mmy=prompt("Enter your Name:");         
if(Mmy)
{console.log(Mmy ?? "You didn't Enter your name");}
else{
    console.log("You didn't Enter your name");
}
//console.log(Mmy.length);//space irutha space ya count pannum 
console.log(Mmy.trim().length);//space iruthalum letter length mattum print pannum
*/
//Interactive Game
//Loops
//While Loop 
let i=0;
while(i<5){
    console.log(i);
    i=i+1;
}

//DO While Loop
let a=50;
do{
    console.log(a);
    a=a+10;
}while(a<90);

//For Loop
for(i=0;i<=10;i++)
{
    console.log(i);
}

//For Loop
let name="java";
for(let i=0;i<=name.length;i++)
{
    console.log(name.charAt(i));
}

 //For Loop      //Nested Loop
 let n="ja";
 for(let i=0;i<=n.length;i++)
 {
    for(let j=0;j<=n.length;j++) 
    {
        console.log(i,j);
    } 
 }

 //Contiue
 let text='';
 for(i=0;i<=10;i++){
 if(i==3){
   continue;//3 ya thavara metti ellam print aagum
 }
     text=text+i;
 }
 console.log(text);

 //Break 
 let t='';
 for(i=0;i<=5;i++){
 if(i==3){
   break;//3 ku munatti break aagum
 }
     t=t+i;
 }
 console.log(t);

//function  eg--1
function sum(num1,num2){
     return num1+num2;
}
console.log(sum(10,7));
console.log("palanikumar0508@gmail.com"
.slice(0,"palanikumar0508@gmail.com".indexOf("@")));

email="palanikumar0508@gmail.com"
console.log(email.slice(0,email.indexOf("@")));

//function eg---2
function getUserNameFromEmail(email){
    return(email.slice(0,email.indexOf("@")));//Call function 
}
console.log(getUserNameFromEmail("palanikumar0508@gmail.com"));
console.log(getUserNameFromEmail("palani0508@gmail.com".toUpperCase()));

//function eg---3
function toProperCase(Name){  //const toProperCase=Function(name){}
    // Another Methods       //const toProperCase=(name)=>{}
     return Name.charAt(0).toUpperCase()+Name.slice(1).toLowerCase();
}
console.log(toProperCase("javaSCRIPT"));

//Scope------>Var, Let, Const
//Var                 //Var vanthu 2015 ku munatti use pannathu
var x=23
var x=53
console.log(x)
//let
let X=45
 X=89   //rendu vathi Let la X declare panna mudiyathu
console.log(X);  // y=89    console.log (X,y) vachi panni kalam
//const
const Y=43
//Y=78   //entha mathiri pannalum const la marathu appadi change pannanum
console.log(Y)     //na let vachi use pannikalam

//Global Scope
var A=1;
let b=2;
const c=3;

//Local Scope  //Block Scope
{
    let b=4;
 console.log(b);
} 

//Local Scope   //Function Scope
function myfun(){
    const c=5; 
    console.log(c);  //local Scope irukurathu local scope la mattum 
{          //tha print aagum overall  la print aagathu

    let b=4;
     console.log(b);
} 
}

myfun()
console.log(c)  //overall Print Statement

//Arrays

const myArray=[];
myArray[0]="javascript";
myArray[1]="programming";
myArray[2]="952822104";
myArray[3]="880739";

console.log(myArray);
console.log(myArray[1]);
console.log(myArray[myArray.length-1]); //total array kandupithika 
myArray.push("click");//Add new element
console.log(myArray);
myArray.pop();//delect last element
console.log(myArray);
myArray.unshift("click");//Add new element in front
console.log(myArray);
myArray.pop();//delect last element
console.log(myArray);
myArray.shift();//delete the first  element
console.log(myArray);

const Add=myArray.push("java");//push
console.log(myArray);
const ADD=myArray.unshift("program");//unshift
console.log(myArray);
const pop=myArray.pop();//pop
console.log(pop);
const unshift=myArray.shift();//shift
console.log(unshift);
delete myArray[2];//delete the element and declare as empty
console.log(myArray);
//splice array
myArray.splice(2,1);//delete the element in an array
console.log(myArray);
myArray.splice(2,3,"program");
console.log(myArray);
myArray.splice(1,1,"program");//already declare panna element tha 
console.log(myArray);        //delete panni new element assign pannikalam
//slice array
const newArray=myArray.slice(1,3)//slice the new element to store const
console.log(newArray);
const NewArray=myArray.reverse();//reverse the element
console.log(NewArray);
const NEwArray=myArray.join();//join all the array in the string
console.log(NEwArray);
const NEWArray=NEwArray.split(',');//spilt kudutha array ya change pannikalam
console.log(NEWArray);
myArrayA=["learn",456];//////////////
console.log(myArrayA);
const MyArray=myArray.concat(myArrayA);//Add two array 
console.log(MyArray);
const MYArray=myArrayA.concat(myArray);//Add two array 
console.log(MYArray);
const MYARray=[...myArray,...myArrayA];//Sprit operator to add two array
console.log(MYARray);
const MYARRay=[myArray,myArrayA];//Sprit operator illama join panna
console.log(MYARRay);    //oru array kulla enoru array irukum
 
 //Array,2DArray,3DArray
 const TirunelveliA=["Melaseval","Pattamadai","Cheranmahadvei"];
 const TirunelveliB=["Town","veeravanallur"];
 const TamilNaduA=["Tenkasi","Kanniyakumari","Toothukuthi"];
 const TamilNaduB=["Tirchy","Kovai","Madurai"];
 const India=["Goa","West Bengal","Bangalore"];
 
 console.log (TirunelveliA[1],TamilNaduA[0]);
 const Tirunelveli=[TirunelveliA,TirunelveliB];//2D Array
 console.log(Tirunelveli);
 const TamilNadu=[TamilNaduA,TamilNaduB];//2D Array
 console.log(TamilNadu);
 console.log(Tirunelveli[0][2],TamilNadu[0][1]);//2D Array to identify
 const World=[Tirunelveli,TamilNadu,India];
 console.log(World);
 console.log(World[0][0][0]);//3D Array
 console.log(World[0][1][1],[1][0][1]);///////////////

 //Code challange
  
  //Object
  // Object na curly braces kulla key and values irukum
  const myObj={name:"java"};
  console.log(myObj);
  console.log(myObj.name);//ethuna name enna iruko athu mattum print aagum
//Object----->eg 2
  const MyObj={name:"java"};
  const anotherObj={
      subScriber:true,
      no:1000,
      content:{
          earn:"js",
          grow:"stocks"
      },
      subdivision:["Earn","Grow","Give"],
      action: function(){
          //return "Hello Java";
          return`Earn by learning ${this.content.earn}`;
      }
 };
  console.log(anotherObj.subScriber);
  console.log(anotherObj.no);
  console.log(anotherObj.subdivision);
  console.log(anotherObj.subdivision[1]);//object kulla array [1]
  console.log(anotherObj.content);
  console.log(anotherObj.content.grow);
  console.log(anotherObj["subScriber"])//entha mathiri key vales double ""
  console.log(anotherObj["subdivision"])                 // la tha podanum
  console.log(anotherObj.action());//funtion call pannum pothu()tha use pannaum
   
   //Object------>eg 3   //Inheritance
   const vehicle={
       doors:2,
       engine:function(){
           return "speed";
       }
};
console.log(vehicle.engine());
const car= Object.create(vehicle);//inheritance with vehicle
car.wheels=4;
car.engine=function(){return "Speed 75KM/HR"};
console.log(car.engine());
const tesla=Object.create(car);//inheritance with car
tesla.engine=function(){return "Speed 56KM/HR"}
console.log(tesla.doors);
console.log(tesla.engine());

//Object------->eg 4
const movie={
    actor:"kavin",
    music:"Arrr",
    director:"Lokesh",
    producer:"anbu"
};
movie.actress="AJ" ///add new 
delete movie.producer  //delete the funtion
console.log(movie.hasOwnProperty(movie.producer));//True/False
console.log(movie.actor);
console.log(Object.keys(movie));//movie la irukura keys mattum print aagum
console.log(Object.values(movie));//keys la irukura values mattum print aagum
console.log(Object.values(movie.actor))
console.log(Object.keys(movie.actor))
for(let job in movie){ //IN Loop 
    //console.log(movie[job]);
    console.log(`${job},it's ${movie[job]}`)
}
const{music:myFavMusicDirector}=movie;//Destructuring the Object
console.log(myFavMusicDirector);
const{actor,music,director,producer}=movie;
console.log(director);
function sings(Music){return Music};
function Sings({music}){return music};
console.log(sings(movie));
console.log(Sings(movie));

//classes
const myPizza={
    size:"medium",
    crust:"original",
    bake: function(){  //Object
        return console.log(`Baking a ${this.size} ${this.crust} pizza`);
    }
};
myPizza.bake();

//class-->eg 1
class Pizza{
    constructor(){
        this.size="medium";
        this.crust="original";    }
    bake(){// class vanthu Function call panna devailla
        return console.log(`Baking a ${this.size} ${this.crust} pizza`);
    }}
const anotherPizza = new Pizza();
anotherPizza.bake();
console.log(anotherPizza.size);

//class---->eg 2
class PIzza{
    constructor(typePIzza,sizePIzza,crustPIzza){
        this.type=typePIzza;
        this.size=sizePIzza;
        this.crust=crustPIzza;
        //this.toopings="olives"
        this.toopings=[] //more than toopings 
    }                    //irutha entha array la store aagum
    getToopings(){
        return this.toopings; //Getter Method
    }
    setToopings(toopingPizza){  //Setter Method
        //this.toopings=toopingPizza;
        this.toopings.push(toopingPizza);
    }
    bake(){// class vanthu Function call panna devailla
        return console.log(`Baking a ${this.size} ${this.type} ${this.crust}
        pizza with ${this.toopings} `);
    }}
const AnotherPizza = new PIzza("Cheese","Large","original");
AnotherPizza.setToopings("sausage");//use Setter Method
AnotherPizza.setToopings("Egg");
//AnotherPizza.toopings=("sausage"); //entha method use confusion aagum
console.log(AnotherPizza.toopings);
console.log(AnotherPizza.getToopings())
AnotherPizza.bake();

//class---->eg 3  //Parent And Child Method
class PIZza{
    constructor(sizePIZza){
        this.size=sizePIZza;
        this.crust="original";
        //this.toopings="olives"
        this.toopings=[] //more than toopings 
    }                    //irutha entha array la store aagum
    getcrust(){
        return this.crust; //Getter Method
    }
    setToopings(crustPizza){  //Setter Method
        //this.toopings=toopingPizza;
        this.crust=(crustPizza);
    }
}
class specialPizza extends PIZza{  //extends Method
    constructor(sizePIZza){
        super(sizePIZza); //super use panna tha this. use panna mudiyum
        //super vanthu parent la irukara Object use pannikum eg:size,crust
        this.type="Margarita"
    }
    slice(){
        console.log(`our ${this.type} ${this.size} pizza has 8 slices`);
    }
}
const myspecialpizza=new specialPizza("medium");
myspecialpizza.slice();

//class---->eg 4
class pizza{
    crust="original";
    sauce="Tomato";//Private # podu print panna ethutha private
    constructor(sizepizza){
        this.size=sizepizza;
    }
    getcrust(){
        return this.crust;
    }
    setCrust(crustpizza){
        this.crust=crustPizza;
    }
    bake(){
        return console.log(`Baking a ${this.size} ${this.crust}
        ${this.sauce} pizza`);
    }
}
const mypizza=new pizza("Small");
console.log(mypizza.sauce)
mypizza.bake()

//JSON-----Javascript Object Notation
//JSON is useful to send server side program
//serverSide program send panna JSON use panrom
//text format
//to send and recive data in many programming languages
const MYObj={
    name:"Project",
    content:["Hard","Work","Learn"],
    sub:function(){
        console.log("Achive The Goal");
    }
}
console.log(MYObj);
console.log(MYObj.content);
MYObj.sub();
// Next entha Object eppadi JSON Na matturathu
const sendjson=JSON.stringify(MYObj);//stringify ethu tha json format la
console.log(sendjson); //change pannanum json vathu string methos/text format
console.log(sendjson.name);
console.log(typeof MYObj);
console.log(typeof sendjson);

const recivejson=JSON.parse(sendjson); //ethu vanthu JSON format tha OBJECT 
console.log(recivejson);    //tha change pannum
console.log(recivejson.name);
console.log(typeof recivejson);

//Error Handling & Type of ERROR
"use strict";//Do handle reference Error
const variable="MINI JAVASCRIPT PROJECT"//ethula const podalana print aagum
console.log(variable);//aana reference ERROR varum
//object..crect(); //ethula .. irutha athu vanthu syntax ERROR
//Variable="MY PROJECT" //ethu vanthu TYPE ERROR variable thaniya declare 
                        //panna mudiyathu const la panna mudiyum
//TO Handle ERROR in TRY CATCH
"use strict"
const makeError = ()=> {
    try{
       // const name = "JAVA PROJECT";
        //name="FINISHED";
        throw new customError("This is a customError");
    }
    catch(error){
        console.log(error);
         //console.error(error);
         // console.warn(error);
           //console.table(error);
            console.error(error.stack);
             //console.error(error.name);

    }
};
makeError(); 
function customError(message){
    this.message=message;
    this.name="customError";
    this.stack=`${this.name}:${this.message}`;
}

//TO Handle ERROR in TRY CATCH & FINALLY
"use strict"
const MakeError = ()=> {

    let i=0;
    while(i<=5){
    try{
       if(i%2 !=0){
           throw new Error("Odd Number");
       }
       console.log("Even Number")
    }
    catch(error){
           // console.error(error.stack);
            console.error(error.message);
    }
    finally{
        console.log("...finally");//ethu vanthu try la poi run aagum 
    //next finally kulla poi run aagum,illa na try la run aai catch kulla 
    //poi next finalla finally  run aagum 
    i++;
        }
    }
};
MakeError();

//DOM Document Object Model
