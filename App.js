// // // // let FirstName = " My User What Can i Do Bro And Sis ";

// // // // alert(FirstName);

// // // // let FirstName4= "Hello ";
// // // // let FirstName5= "Umair";
// // // // let FirstName6= FirstName4+FirstName5; // Strings concatenation

// // // // console.log(FirstName6);

// // // // // // number+number= addition
// // // // // // number+string= concatenetion
// // // // // // string+string= concatenetion
// // // // // // string + number= concatenation

// let FirstName1= "50 ";
// let FirstName2= 56;
// let FirstName3= FirstName1+FirstName2; // addition

// console.log(FirstName3);

// let  data= "Umair";
// let data2= data.includes("umair");
// console.log(data2)
// // // // // // Math Operator = + - * / %

// let  data= "11";
// let data2= 2;
// // console.log(  parseInt (data)+data2);
// console.log(data % data2);

// // // // let UserFavNum= prompt("What is your Fav No");
// // // // console.log(+UserFavNum+10); 

// // // // let UserName= prompt("What is your name Yr");
// // // // console.log("Helow Dear"+UserName);

// let randomenum= Math.random();
// randomenum=randomenum*10;
// console.log(randomenum*10);

// let randomNumber= Math.random();
// // randomNumber=randomNumber*100;
// randomNumber*=10;
// let roundNum= Math.round(randomNumber)
// console.log(roundNum);

// // // //comparison Operator;
// // // //==, ===
// // // // console.log(5==="5");
// // // // !=, !==;
// // // // console.log(5!== 6)
// // // // <,> <=, >=
// // // // console.log(5<=5);
// let num1= 6;
// let  num2= 6;
// console.log(num1>=num2 );
// // // //  let UserAge= 19;
// // // //  let UserAge1=10;
// // // //  console.log(UserAge>=18);

// // // // if (UserAge2<18) {
// // // //     console.log("Sorry your not Eligible For CNIN");
// // // // } uMAIR cODE/

// let UserAge2= +prompt("Pleae Enter Your Age");
// // if (UserAge2>=18) {
// //     console.log ("You Eligible for CNIC");
// // } else{
// //     console.log("Sorry your not Eligible For CNIN")
// // } if (UserAge2>=50){
// //     console.log("Senior Citizan")
// }

// // // let UserFavNum3= +prompt("Enter Your Number");
// // // let ComputerNum = Math.round(Math.random()*10);

// // // if (UserFavNum3 === ComputerNum) {
// // //     console.log("You Won" + ComputerNum);
// // // } else{
// // //     console.log("you Lose" + ComputerNum );
// // // }

// let UserInput= prompt ("Even Or Odd");
// let ComputerNum1=Math.round(Math.random()*10);
// if (ComputerNum1 % 2 === 0 && UserInput === "Even" ) {
//     console.log("You Win" + ComputerNum1);
//     } else if (ComputerNum1 % 2 !== 0 && UserInput === "Odd") {
//         console.log("You Win"+ ComputerNum1)
//     }    
//     else{
//         console.log("You Lose!"+ ComputerNum1);
//     }

// let UserInput1 = prompt("Even Or Odd");
// let ComputerNum2 = Math.round(Math.random()*10);
// let EvenOrOdd = (ComputerNum2 % 2 === 0);
// if (EvenOrOdd && UserInput1 === "Even") {
//     console.log("You WIn =!" + ComputerNum2);
// } else if (!EvenOrOdd && UserInput1 === "Odd") {
//     console.log("You Win!" + ComputerNum2 ) 
// } else {
//     console.log("You Lose!" + ComputerNum2);
// }

// // // Initialisation
// // // Condition
// // // Increment

// for (let s = 1;s<=10;s++) {
//     console.log("18 X " + s + " = " + 18*s )

// }

// let table=18
// for (let i = 1;i<=10;i++ ) {
//     console.log( table + " X " + i + " = " + table*i  )

// }

// let UserFavtable = prompt("Enter Your Fav Table Num");
//  for (let s=1;s<=10;s++ ) {
//     console.log ( UserFavtable + " X " + s + " = " + UserFavtable*s  )

//   }


// function greet (studen) {  // parameter
//            console.log("Hellow " + studen ) 
// }
//  greet("Umair"); // arguments
//  greet("Nabeel"); 

// function Empolyee (FileNo) {
//     return ("Working on file no " + FileNo )

// } 
// // let Data= Empolyee (1);
// let data0= Empolyee (10);
// console.log( Data  + data0);

// function NewEmpoly (FileNo1) {
//     return ("Im Working on File No" + FileNo1 )

// }
//     let Data1 = NewEmpoly (5);
//     let Data4 = NewEmpoly (15);
//     console.log(Data1);






// function add (Num , Num3 ) {
//     return Num + Num3

// }
// let result= add (5,12);
// console.log(result);


// // // Resursion

// function WriteData(Num,Times) { 
// document.write(Num);
//       if (Times > 0) {
//         WriteData(Num,Times-1)

//       }  
// }
// WriteData(" 'Hi Umair' " ,12)


// function Factorial (num10){
//     if (num10 > 1 ) {
//         return num10 * Factorial(num10-1)

//     } else return 1

// }   
// // let data= Factorial(4)
// // console.log(data) 
// console.log(Factorial(5))
// 10*9*8*7*6*5*4*3*2*1

// function Factorial (num0) {
//     if (num0 > 1) {
//         return num0* Factorial (num0-1)

//     }return 1
// }
// console.log(Factorial(4));


// // // closures => Scopes 
// // // Globle Scopes =>  Whole File
// // // Local Scopes =>  inside function

// function closures(def) {
// // def = local scopes
//      return function (ghi) {                       // anonymous funtion
//         console.log(def + ghi)
//     }
// }
// let inerfunction = closures(100);
// let inerfunction2 = closures(210);
// inerfunction(99);
// inerfunction2(10);

// function testClosures (xyz) {
//     return function (mno) {
//         console.log(xyz + mno)

//     }

// }
// let testinerfuction=testClosures (100);
// let testinerfuction0=testClosures (200);
// testinerfuction(10);
// testinerfuction0(100);




// function Newclosures(abc) {
//     return function (efg) {
//         console.log(abc + efg)

//     }
// }
// let inerfunction4= Newclosures (09);
// let inerfunction3= Newclosures (121);
// inerfunction4 (101);
// inerfunction3 (99);  


// function SaveUrl (Url) {
//     return  function () {
//         fetch(Url)
//       .then(response => response.json())
//       .then(json => console.log(json))
//     }

//     }
//     // save url
//     let makerequest = SaveUrl("https://jsonplaceholder.typicode.com/todos")
//     // request attempt
//     makerequest();
//     makerequest();

// Arry

// let month = [ "Jan","Feb","mar","April" ]
// console.log(month);

// let month = ["Jan", "Feb", "mar", "April"];

// let Store = prompt("Store Yes Or Not");
// if ( Store === "Yes"  ) {
// month.push("May")
// }

// console.log(month);

// let month = ["Jan", "Feb", "mar", "April"];
// month.shift();
// month.unshift("Janu");


// console.log(month);

// let month = ["Jan", "Feb", "mar", "April"];
// month.pop();
// month.push("May");
// console.log(month);

// let month = ["Jan", "Feb","Dec","March", "April"];
// month.splice(2,1,"hELLOW");

// console.log(month);

// let month = ["Jan", "Feb","Dec","March", "April"];
// let NewArry=month.slice(0,1);

// console.log(month);
// console.log(NewArry)

// let Arry=["Umair","Nabeel","Zain"];
// Arry.forEach(function(val,indux,){
//       console.log(indux,val);  
// // }) 
// let NewArry=["One","Two","Three" ]
// NewArry.forEach(function(val,indux){
//             console.log(val,indux)
// })

// long code
// let Arry=[9,10,8,3,5,4,7,2];
// let filterdArry=Arry.filter(function(val){
//     if(val % 2 === 0 ){
//         return true;   
//     } else {
//         return false;
//     } 
// }) 

// console.log(filterdArry,Arry)

// let arry=[9,10,8,3,5,4,7,2,71, 72, 73, 74, 75,  81, 82, 83, 84, 85, 91, 92, 93, 94, 95]
// let filterdArry=arry.filter(function(value) {
//     return value % 2 === 0;
// } )

// console.log(filterdArry,arry)



// Short code
// let Arry=[9,10,8,3,5,4,7,2,71, 72, 73, 74, 75,  81, 82, 83, 84, 85, 91, 92, 93, 94, 95];
// let filterdArry=Arry.filter(function(val){
//     return val % 2 ===0;
// }) 

// console.log(filterdArry,Arry)

// ary.sort


// let Arry = [1, 9, 10, 8, 3, 5, 4, 7, 2, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85, 91, 92, 93, 94, 95];
// let sortdata = Arry.sort(function (a, b) {
//     if (a > b) {
//         return 1;
//     } else {
//         return -1;
//     }
// });console.log(sortdata);

// reduce arry

// let Arry = [1, 9, 10, 8, 3, 5, 4, 7, 2, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85, 91, 92, 93, 94, 95];

// let ReducedData=Arry.reduce(function(previous,curruntval){
//     return previous + curruntval

// },0);console.log(ReducedData,Arry);



// let Arry = ["Umair","nabeel","Zain"];

// let ReducedData=Arry.reduce(function(previous,curruntval){
//     return previous + " " + curruntval

// },"");console.log(ReducedData,);

// let Arryy = [1, 9, 10, 8, 3, 5, 4, 7, 2, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85, 91, 92, 93, 94, 95];
// let forEachData=0
// Arryy.forEach( function(val){
//      return forEachData = forEachData + val

// } ); console.log(forEachData);

// let Arry = ["Umair","nabeel","Zain"];
// let forEachcheck=""

// Arry.forEach(function(val){
//     return forEachcheck = forEachcheck + " " + val

// }); console.log(forEachcheck);

// let Arryy = ["Umiar"," Pata nhi"];
// let checkreduce= Arryy.reduce(function(prev , curv){
//     return prev + "" + curv 
// },"")
// console.log(checkreduce);

// let Arryy = ["1"," 16102"];
// let checkforeach="" 
// Arryy.forEach(function(curv){
//     return  checkforeach = checkforeach + "" + curv
// })

// console.log(checkforeach)


// object 

// let MySelf = {
//  Name: "Umair",
//  CNIC: 4220169257911,
//  EysColor:"Black",
//  Canyouspeakeenglis: false,
//  speak: function(sentence){
//     console.log(sentence + this.Name)
// }

// }; MySelf.speak("Hi I'm " )
// //  console.log(MySelf);


// let You = {
//     Name: "Nabeel",
//     CNIC: 42201602257911,
//     EysColor:"Black",
//     Canyouspeakeenglis: false,
//     speak:function(OneLineForME){

//         console.log(OneLineForME+ this.Name);
//     }


//    }; You.speak("Hellow Dear ")

// let student1 = {
//     Name: "Umair",
//     Rollno: 555,
//     Teacher: "ALi and Ishaq",
//     Canyouspeakeenglish: false,
//     Classs: "Javasrip and Web and App dev"

// }
// let student2 = {
//     Name: "nabeel",
//     Rollno: 556,
//     Teacher: "ALi",
//     Canyouspeakeenglish: false,
//     Classs: "Javasrip "

// }
// let Studentpreviousdata = localStorage.getItem("Studentsdata");
// let studentsdata = Studentpreviousdata ? JSON.parse(Studentpreviousdata) : [];
// function providestudentdata() {
//     let std = {

//         Name: prompt("What is your Name "),
//         Rollno: +prompt("What is your Roll No "),
//         Teachername: prompt("What is your Teacher Name "),
//         Canyouspeakeenglish: prompt("True And False"),
//         Classs: prompt("What is your CLass Name"),
//     }
//     studentsdata.push(std);
//     console.log(studentsdata);
//     let stringify = JSON.stringify(studentsdata)
//     localStorage.setItem("Studentsdata", stringify);
//  }


// let olddata=localStorage.getItem("student1");
// let student1=  olddata ? JSON.parse(olddata):[];
// function studentsdata10(){
//   let stud={
// Name: prompt("What is Your Name"),
// RollNo:+prompt("What is Your Roll No"),
// Teacher: prompt("What is Your teacher Name"),
// Classs: prompt("What is your Class you take"),
// };  
//   student1.push(stud);
//   console.log(student1);
//   let stringify=JSON.stringify(student1)
//   localStorage.setItem("student1",stringify);


// }; 


// let arr = [2, 3, 5, 7]

// arr.map(function(element, index, array){
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     return element;
// }, 80);

// DOM The Document Object Model (DOM)


// let MyPara= document.getElementById("My-Para");
// MyPara.innerText="Hellow My Dear Student And Client"



// let MyPara=document.querySelector("#My-Para");
// MyPara.innerHTML=" <b>  <b/>";
// MyPara.style.backgroundColor="black";
// MyPara.style.color="wHITE";

// setInterval(function(){
//     if(MyPara.style.display === "none"){
//         MyPara.style.display="block";
//     } else{
//         MyPara.style.display="none";
// }
// },1000);

// let NewPara=document.querySelector("#New-Para");
// NewPara.innerHTML=" <b> Pakistan will be the Best  <b/>";
// NewPara.style.backgroundColor="black";
// NewPara.style.color="wHITE";
// NewPara.style.width="100%"

// setInterval(function() {
// let width = NewPara.style.width;
// if(width === "100%" ) {
// NewPara.style.width="10%"
// } else{
//     width = +width.replace("%","");
//     NewPara.style.width= width+ 10 + "%";
// } 

// },500);

// let MyPara= document.getElementById("My-Para");
// MyPara.innerHTML="Be A Billioner Insha Allah"
// setInterval(function(){
// let color1= Math.floor(Math.random() * 167250).toString(16);
// let color2= Math.round(Math.random() * 160050);
// MyPara.style.backgroundColor="#"+ color1;
// MyPara.style.color="#"+ color2;
// console.log(color1,color2)


// },500)

// const date = new Date();

// // console.log(date.getDate());

// const month =["jan","Feb","march","April","May","June"]
// console.log(date.getDate());
// console.log(month[date.getMonth()]);
// console.log(date.getFullYear());




// const doomdays= new Date();
// doomdays.setDate(02);
// doomdays.setMonth(4);
// doomdays.setFullYear(2030);
// doomdays.setHours(9);
// doomdays.setMinutes(35);
// doomdays.setSeconds(20);

// const date = new Date();


// let diff=doomdays.getTime()-date.getTime();

// console.log(date.getTime(),doomdays.getTime());

// console.log((diff/(1000*60*60*24*365.25)).toFixed(1));

const hourElem = document.getElementById("hour");
const minElem = document.getElementById("min");
const secElem = document.getElementById("sec");
const amPmElem = document.getElementById("amPm");


setInterval(function () {
    const date = new Date();
    let hour = date.getHours();
    let amPm = "Am";
    if ( hour > 11 ) {
        amPm = "Pm";
     if (hour > 12) {
        hour -= 12; 
     } }

    hourElem.innerText = hour;
    minElem.innerText = date.getMinutes();
    secElem.innerText = date.getSeconds();
    amPm.innerText = amPm;
}, 1000);
