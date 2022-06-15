// let name = "Yaseen"
// const age = 28;
// const isPensioner = false;
// let occupation;

// console.log(name);
// console.log(age);
// console.log(isPensioner);
// console.log(occupation);

// name = null;
// console.log(name);

// const person ={
//     name:"Yaseen",
//     age: 28,
//     isPensioner: false,
// };
// console.log(person);

// const project = {
//     title:"Project 1",
//     imgURL:"link",
//     description:"Lorem ipsum",
//     technologies:"HTML/CSS/JS",
//     links:{
//     github:"Link",
//     live: "Link",
//     },
// };
// console.log(project.links);

// const numbers = [1,2,3,4,5,5,6];
// numbers[5] =10;
// console.log(numbers);
// console.log(numbers[3]);

// console.table(project)



// // PRIMITIVES
// let name = "Jason"; // String
// let age = 28; // number
// let isPensioner = false; // Boolean
// let canDance; // Undefined
// let awards = null; // Null

// // Reference Types

// // Object
// const person = {
//   name: "Jason",
//   age: 28,
//   isPensioner: false,
// };

// console.log(person);

// Array
// const projects = [
//     {
//       title: "Project 1",
//       imgURL: "https://picsum.photos/200/300?random=1",
//       description: "Lorem ipsum",
//       technologies: "HTML/CSS/JS",
//       links: {
//         github: "Link",
//         live: "Link",
//       },
//     },
//     {
//       title: "Project 2",
//       imgURL: "https://picsum.photos/200/300?random=2",
//       description: "Lorem ipsum",
//       technologies: "HTML/CSS/JS",
//       links: {
//         github: "Link",
//         live: "Link",
//       },
//     },
//     {
//       title: "Project 3",
//       imgURL: "https://picsum.photos/200/300?random=3",
//       description: "Lorem ipsum",
//       technologies: "HTML/CSS/JS",
//       links: {
//         github: "Link",
//         live: "Link",
//       },
//     },
//     {
//       title: "Project 4",
//       imgURL: "https://picsum.photos/200/300?random=4",
//       description: "Lorem ipsum",
//       technologies: "HTML/CSS/JS",
//       links: {
//         github: "Link",
//         live: "Link",
//       },
//     },
//     {
//       title: "Project 5",
//       imgURL: "https://picsum.photos/200/300?random=5",
//       description: "Lorem ipsum",
//       technologies: "HTML/CSS/JS",
//       links: {
//         github: "Link",
//         live: "Link",
//       },
//     },
//     {
//       title: "Project 6",
//       imgURL: "https://picsum.photos/200/300?random=6",
//       description: "Lorem ipsum",
//       technologies: "HTML/CSS/JS",
//       links: {
//         github: "Link",
//         live: "Link",
//       },
//     },
//   ];
  
//   const projectContainer = document.getElementById("projects");
  
//   projects.forEach((project) => {
//     projectContainer.innerHTML += `
//       <h3>${project.title}</h3>
//       <img src=${project.imgURL} />
//     `;
//   });

// let age = 18;
// let salary = 5000;
// let bonus =500;
// if ((age >= 18) &&(salary >=5000)){
//     salary +=bonus;
//     // salary = salary + bonus;
//     console.log('Your salary:R'.concat(salary));
// }
// else{
//     console.log('Please try again later');
// }
  
// if(age >= 18) {
//     if(salary >= 5000) {
//         salary += bonus;
//         console.log('Salary R:'.concat(salary));
//     }
//     else{
//         console.log('Your salary is less than R5000.');
//     }
// }
// else{
//     console.log('You are not qualified')
// }

// let items = ['Banana','Mango','Orange','Laptop','Mouse','Keyboard'];
// let ul = document.getElementById('items');
// // items.forEach(display);
// items.forEach((e)=>{
//     ul.innerHTML += `
//         <li>${e}</li>
//     `;
// });

// // function display(items){
// //     console.log(items);
// // }
// // /*u can use e or items/
// // function display(e){
// //     console.log(e);
// // }
// /**************************** */
// let people = ['Yaseen','Daniel','Muddathir','Clayton','Mika','Jared','Liam','ikhlaas','Reagan','MoM'];
// /**************************** */
// // console.log(people);
// // console.log(people[people.length -1]);
// // console.log(people[people.length /2]);

// // or
// /***************************/
// console.log(people);
// let=lastName = people[people.length - 1];
// let=middleNmae = people[people.length /2 - 1];
// console.log(lastName);
// console.log(middleNmae);
// /************************* */
// let data = 'Hello There\nMy name is Joel\nand \'am\' a software developer';
// console.log(data);
// /*************************** */
// sentence ='I love manga and manhwa';
// console.log(sentence[0]);
// /**************************** */
// console.log('Length:'.concat(sentence.length));
// /*************************** */
// console.log("slice(start, end): ");
// /**************************** */
// sentence = 'I love programming';
// console.log(sentence);
// console.log('Length: '.concat(sentence.length));
// console.log("slice(start, end): ");
// console.log(sentence.slice(0, 6));
// console.log("substring(start, end): ");
// console.log(sentence.substring(2, 6));
// console.log("substr(s, e)");
// console.log(sentence.substr(0, 1));
// // replace() return a new string
// console.log(sentence.replace('love', 'do not hate'));
// console.log('toUppCase(): '.toUpperCase(sentence));
// console.log('toLowerCase(): '.toLowerCase(sentence));
// console.log('trim(): '.concat(sentence.trim() ) );
// console.log('charAt(3): '.concat(sentence.charAt(3) ) );
// console.log("split()");
// console.log(sentence.split(" "));
// /*************************** */
// let salary = 40834.87;
// console.log(typeof salary);
// /************************* */
// let marks = 80;
// switch(marks) {
//     case 100:
//         console.log("A+");
//     break;
//     case 98:
//     case 97:
//     case 85:
//         console.log("B+");
//     break;
//     case 75:
//         console.log("Distinction");
//     break;
//     case 50:
//         console.log("Pass");
//     break;
//     case 49:
//         console.log("Fail");
//     break;
//     default:
//         console.log("Out of range");
//     // case ((marks >=50)) && ((marks <= 99)):
//     // console.log('B+');
//     // break;
// }
// /*************** **************/
// function myFunction() {
//     console.log('wassup');
//     document.getElementById('output').innerHTML = '<img src="https://picsum.photos/200/300?random=1">';
// }
// // myFunction();
// function alertMessage(name){
//     alert('Hello' + name);
// }

// /**************************** */
// function addition(numb1, numb2) {
//     console.log(numb1 + numb2);
// }
// addition(5, 3);
// /**************************** */

// // isFinite(value)
// console.log(isFinite(7));
// console.log(isFinite(-14));
// console.log(isFinite(45.4));
// console.log(isFinite("45.4"));
// console.log(isFinite("abc"));
// /**************************** */
// console.log(eval("8+4"));
// /**************************** */
// // Prompt()and eval
// let numb1 = prompt("Numb1: ");
// let numb2 = prompt("Numb2: ");
// let operator = "*";
// console.log(eval(numb1+operator+numb2));
// /************************* */
// /**************************************************** */
// /*output*/
// let firstname = 'yaseen';
// let lastname = 'jattiem';
// console.log(`My fullname is ${firstname} ${lastname}`); 
// /**************************************************** */
// /*switch is better than if statement*/

// let name1 = 'Joel';
// switch(name1){
//     case 'yaseen':
//         console.log('Your name is yaseen');
//     break;
//     case 'Joel':
//         console.log(`Your name is ${Joel}`);
//     break;
// }
// /************************** */

// let displayName = (firstname) => {
//     document.write(`<br>${firstname}`);
// }

// displayName('Yaseen');
// displayName('Your name');

// for(let i=0;i<5;i++){
//     console.log(i);
// }
/************************************ */
// let cnt =0;
// while(cnt < 5){
//     console.log(cnt);
//     cnt ++;
// }
/*********************************** */

// let numbers = [9,3,5,4,6,12,45];
// for(let i=0; i<numbers.length;i++){
//     if(numbers[i] % 2 == 0){
//         console.log(numbers[i]);
// }
// }
 /*modulas check for remainder meaning /2 for 9/ 2.*/   
/************************************* */
/*loops
-for
-while
-do..while
-forEach
-for in =>object
*/
/**************************************** */
//breal,continue//
// let numbers = [9,3,2,6,10,11,14];
// for(let i=0; i<numbers.length;i++){
//     console.log(numbers[i]);
//     if(numbers[i] == 6){  
//         break;
//     }  
// }
/**************************************** */
// let numbers = [9,3,2,6,10,11,14];
// for(let i=0; i<numbers.length;i++){
//     if(numbers[i] == 6){  
//         continue;
//     }
//     console.log(numbers[i]);  
// }
/***************************************** */
//do while//
// let firstnames = [
//     'Yaseen','Jared','Muddathir','Batman','MyMom'
// ]
// let cnt = 0;
// do{
//     console.log(firstnames[cnt]);
//     cnt ++;
// }
// while (cnt < firstnames.length);
/************************************************** */
//forEach//
// array.forEach(element => {
    
// });

// let firstNames = [
// 'Yaseen','Jared','Muddathir','Batman','MyMom'
// ]
// firstNames.forEach((name) => {
//     console.log(name);
// });
/*************************************************** */
//forEach//
// let firstNames = [
// 'Yaseen','Jared','Muddathir','Batman','MyMom'
// ]
// let wrapper = document.getElementById('students');
// firstNames.forEach((item) =>{
//     wrapper.innerHTML += `<li><strong>${item}</strong></li>`
// })

// let list = document.getElementById('students');
// firstNames.forEach((item) =>{
//     list.innerHTML +=  `<li>${1}:${item}</li>`
// })
/****************************************************** */
// let personDetail = {
//     name:'Yaseen',
//     surname: 'Jattiem'
// };

// for(let p in personDetail) {
//     console.log(`${p} => ${personDetail[p]}`);
// }
/****************************************************** */
// function smartPeople() {
//     let ul = document.getElementById("list");
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode("Four"));
//     ul.appendChild(li);
//   }
// //   let ul = document.createElement('ul');
// //   console.log('ul');
//   console.log(smartPeople('li'));

// //   let firstname = 'yaseen';
// //   console.log(firstname);
// /************************************* */
// function multiplication(numb1,numb2){
//     return numb1 * numb2;
// }
// /**************************************** */

// console.log(multiplication(3));

/*
The default data type in JS is any,
in case you haven't assigned a value.
*/
// Variables
// let btnDisplay = document.querySelector('#display');
// let yourVar;
// // Example 1
// function display() {
//     document.getElementById('content').innerHTML = '<strong>Hello There</strong>';
// }
// // Example 2: Passing an argument or
// // parameter
// function displayWithArg(arg) {
//     document.getElementById('content').innerText = `Hello There ${arg}`;
// }
// // Example 3 -> default argument
// function addition(numb1, numb2 = 2) {
//     document.getElementById('content').innerText = `Sum is ${numb1 + numb2}`;
// }
// // AddEventListeners to each buttons
// btnDisplay.addEventListener('click', display);
// //
// let smartPeople = ['yaseen','jared','muddathir','meagen','liam']

// let ul = document.createElement('ul');

// document.getElementById('names').appendChild(ul);

// smartPeople.forEach((people)=>{
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.innerHTML += people;
// });

//Objects basics
// const person = {
//     firstName:['Peter','Yaseen','Batman'],
//     lastName:'Henk',
//     age:30,
//     calculateSalary: (hrs,rate)=> {
//         return hrs * rate;
//     }
// };
// console.log(`Name: ${person.firstName}
// Surname: ${person.lastName}
// Age: ${person.age}
// Salary: R${person.calculateSalary(50,650)}`);

//Checking if  KEY DOES exist
// if (person.hasOwnProperty('age')) {
//     console.log(person.age);
// }else{
//     console.warn('Key is not found');
// };
/****************************************** */
//create an image tag
// const angryBirds = document.createElement('img');
// document.body.appendChild(angryBirds);

// //Call the fetch function
// fetch('../images/angry-birds (1).png').
// then(res => {
//     return res.blob();
// }).
// then(image => {
//     //We have to convert it to the original format
//     angryBirds.src = URL.createObjectURL(image);
// }).
// catch(e => {
//     console.log(e.message);
// })

//OR
//async
// async function display() {
//     let res = await fetch('../images/angry-birds (1).png');
//     let image = await res.blob();
//     angryBirds.src = URL.createObjectURL(image);
// }
// display().catch(e =>{
//     console.error('Please try again')
// })
//OR
// async function getData() {
//     let collections = await fetch('https://randomuser.me/api?results=3');
//     let data = collections.json();
//     return data;
// }
// //JSON
// //Display
// async function displayData(){
//     let data = await getData();
//     data.results.forEach(item => {
//         // console.log(item);
//         console.log(`${item['name'].title} - ${item['name'].first}`);
//     });
// };
// displayData();


// let html = ''
// // let result
// async function getData() {
//     let collections =
//     await fetch('https://randomuser.me/api?results=3');
//     let data = collections.json();
//     return data;
// }
// // Display
// async function displayData() {
//     let data = await getData();
//     data.results.forEach(item => {
//         // console.log(item);
//         // console.log(
//         // `${item['name'].title} - ${item['name'].first}`);

////////////////////////////////////////
// Objects basics
// const person = {
//     firstName:['Peter','Yaseen','Batman'],
//     lastName:'Henk',
//     age:30,
//     calculateSalary: (hrs,rate)=> {
//         return hrs * rate;
//     }
// };
// console.log(`Name: ${person.firstName}
// Surname: ${person.lastName}
// Age: ${person.age}
// Salary: R${person.calculateSalary(50,650)}`);

// // Checking if  KEY DOES exist
// if (person.hasOwnProperty('age')) {
//     console.log(person.age);
// }else{
//     console.warn('Key is not found');
// };
/************************************* */
//Factory function
//first letter uppercase for Employee()
// function Employee(name,surname,company) {
//     return {
//         name:name,
//         surname:surname,
//         Company:company,
//         display: ()=> {
//             document.write(`
//             <br>Name: ${name}<br>
//             Surname: ${surname}<br>
//             Company Name: ${company}<br>`);
//         }
//     };
// };
// let empl1 = Employee('Joel','Mukanya','Life Choices');
// let empl2 = Employee('Yaseen','Jattiem','Life Choices');
// //Disply all info
// empl1.display();
// empl2.display();
// empl1.display();
// empl2.display();
// empl1.display();
// empl2.display();
// empl1.display();
// empl2.display();
// empl1.display();
/************************************* */
// 1. Write a function that accepts three parameters: name, hours, and rate.
// 2. Please return an object with two properties.
// name and salary.
// salary, should be a function that will return a person's salary.
// 3. Create two objects with the below examples:
// - employee1: Name: Peter, Salary: 40 * 500
// - employee2: Name: Samuel, Salary: 80 * 300
// function Practice(names,hours,rate,){
//     return{
//         names:names,
//         salary: ()=>{
//             return hours * rate;
//         },
//         display: ()=> {
//             document.write(`
//             <br>Name: ${names}<br>
//             Salary: ${hours * rate}<br>`);
//         }
//     };

// };
// let prac = Practice('Yaseen',40,500);
// prac.display();
// let prac2 = Practice('Liam',80,300);
// prac2.display();
// const salary = {
//     Salary: (hours,rate)=> {
//         return hours * rate;
//     }
// };
// console.log(`
// Salary: R${salary.Salary(40,500)}`);
/********************************* */
//Constructor function 
// function Shop (name,address) {
//     this.name = 'DJ',
//     this.address = '27 Strand Street CBD'
// }
//Create an object
// const shop1 = new Shop('DJ','27 Strand Street CBD');
// console.log(`Name: ${shop1.name}
// Address: ${shop1.address}`);
// console.log('========');
// const shop2 = new Shop('Edgars','CBD');
// console.log(`Name: ${shop2.name}
// Address: ${shop2.address}`);
/*********************************** */
// let data = 32;
// console.log(data);
// console.log(typeof data);
// data = 'Joel';
// console.log(data);
// console.log(typeof data);
// data = true;
// console.log(data);
// console.log(typeof data);
/*************************** */
// let firstName = 'Joel';
// firstName[0] = 'M';
// console.log(firstName);

// let names =['joel','hannah','kagiso'];
// console.log(names);
// names[0] ='Godwin';
// console.log(names);
/*************************** */
// let employee = {... person};
// console.log(person);
// employee['salary'] = 40000;
// console.log(employee);
// console.log(person);

// const data = {
//     name: 'John',
//     surname: 'Mike',
//     age: 19
// };
// console.log('Original data: ')
// console.log(data);
// // Spread operator {...}
// console.log('Copy 1: ');
// const employee1 = {... data};
// console.log(employee1);
/******************************************** */

// const person = `{
//     "name": "Joe",
//     "surname": "Jeff",
//     "age": "30"
// }`;

// const prs = JSON.parse(person);

// document.write( prs.name+ `, ` + prs.surname + `, ` + prs.age);
/************************************************ */

//Object.assign//

// let about = { name: 'Yaseen',surname:'Jattiem',age: '18'};
// console.log(about);
// let aboutclone = Object.assign({}, about);
// aboutclone['salary'] =4000;
// console.log(aboutclone);

//OR//
/************************************************ */
// JSON.parse
// const person = `{
//     "name": "Yoh",
//     "surname": "Mama",
//     "age": "30"
// }`;

// const jason = JSON.parse(person);
// console.log(jason);

// document.write( jason.name+`,<br>`+jason.surname+`,<br>`+jason.age+`.`);

// const clone = structuredClone(jason);
// clone['salary'] = 400;
// console.log(clone);

// document.write( `<br><br>`+clone.name+`;`+clone.surname+`;`+clone.age+`;`+clone.salary+`.`);
// /*********************************************** */
// /*structureClone() example*/

// const person1 = { name: 'Joshé', surname: 'Theys', age: 20 };
// const clonePerson = structuredClone(person1);
// clonePerson['salary'] = 2000;
// console.log(person1);
// console.log(clonePerson);
// console.log('========================================');
// /******************************************* */
// let data = [9,8,4,'me'];
// console.log(data);
// /****************************** */
// let myitems = [4,6,1,'amanda',90,'joel'];
// myitems[0]=10;
// console.log(myitems);
// /******************************************** */
// // let firstName = 'Joel'
// // let listOfChars = firstName.split('');
// // console.log(listOfChars);
// let sentence = 'My mom';
// console.log(sentence);
// console.log(sentence.replace('mom','dad'));
/**********************************************************************/
//.convert seconds to minute.//
let totalSeconds = 120;

//get number of full minutes
let minutes = Math.floor(totalSeconds / 60);

//get remainder of seconds
let seconds = totalSeconds % 60;

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

//format as MM:SS
let result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
console.log(result);
/*************************************************** */
//.convert minutes to seconds.//
const answer = {
    calculateseconds: (second,minute)=> {
        return second * minute;
    },
    calculateminutes: (minute,second)=> {
        return minute / second
    }
};
console.log(`Answer: ${answer.calculateseconds(1200,60)} seconds.`);
/**********************************************************************/
//areaOfTriangle: Calculate the triangle area = 1/2 * base * height
const areaOfTriangle = {
    calculateAreaOfTriangle: (num,base,height)=> {
        return num * base * height;
    }
};
console.log(`Answer: ${1/2 * 12 *23} is area of triange.`);
/*********************************************************************/

