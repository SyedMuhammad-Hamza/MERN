/*
//print
//alert("salam");
console.log("salam");
console.error("error");

//var(global so don't use),let(block scoped, can reassign),const(block scoped, cant reassigned)
const a=5;
console.log(a);

//datatypes:
//primitive: directly assigned to memory-> string,number,boolean,null,undefined
console.log(typeof a);
const y=undefined;let z;//both mean same

//concatenation
const s1="abc";const s2="def";
console.log('Concatenation: '+s1+s2);
//template string
console.log(`concatenation: ${s1}${s2}`);
console.log(s1.length);
console.log(s1.substring(0,2).toUpperCase());

//split string as array wrt char
console.log(s1.split(''));
//split string as array wrt comma
let s3="apple, banana, carrot";
console.log(s3.split(', '));

//array
const n=[1,2,3,'s'];
n.push(4);
n.unshift(0);
n.pop()
console.log(n);
console.log(n.indexOf('s'))

//object literals->key value pairs
const person={
    name:'Hamza',
    age:22,
    hobbies:['read Quran', 'tutoring'],
    address:{
        street:'abc',
        block:11
    }
}
console.log(person,person.name,person.address.block,person.hobbies[0])
const {p_name, p_age, address:{street}} = person;
console.log(p_name)
person.email='abc@gmail'


//array of objects
const todos=[
    {
        id:1,
        name:'Hamza'
    },
    {
        id:2,
        name:'Ali'
    },
    {
        id:3,
        name:'Rehan'
    }
]
console.log(todos[2].name);

//Convert into JSON
const todoJson = JSON.stringify(todos);
console.log(todoJson);


//for loop
for(let i=0;i<10;i++){}
//while loop
let i=0;
while(i<8){console.log(`${i}`);i++}

//loop through array of objects
for(let todo of todos)
{
    console.log(todo.name);
}

//foreach
todos.forEach(function(todo){
    console.log(todo.name);
});

//map, return an array
const todoText = todos.map(function(todo){
   return todo.name;
});
console.log(todoText);

//filter, return an array
const todoText1 = todos.filter(function(todo){
    return todo.name === 'Ali';
 });
 console.log(todoText1);

//filter an dmap combined
const todoText2 = todos.filter(function(todo){
    return todo.name === 'Ali';
 }).map(function(todo){
    return todo.id
 })
 console.log(todoText2);

//conditions
const x='10';
if(x==10)//doesn't match data types
{console.log('yes')}

if(x==='10')//matches data types
{console.log('yes')}


const v=10;
const b= x > 9 ? 'blue' : 14;

//functiion
function f1(n1,n2){
    console.log(n1+n2);
}
f1(2,3)

//arrow function
const f2 = (n1,n2)=>{
    console.log(n1+n2);
}
f2(2,3)

const f3 = (n1,n2)=> n1+n2
console.log(f3(2,3));

const f4 = (n1,n2)=>{ return n1+n2}
console.log(f4(2,3));

const f5 = n1=> n1+4
console.log(f5(2));

todos.forEach((todo)=>console.log(todo))

//OOP
function p(name,age)
{
    this.name=name;
    this.age=age;
    // this.getage = function(){
    //     return this.age;
    // }
}
//alternate getage
p.prototype.getage= function(){
    return this.age;
}

const p1 = new p('Hamza',1);
console.log(p1.getage())

//Class
class c{
    constructor(name,age){
        this.name=name;
    this.age=age;
    }
    getage = function(){
     return this.age;
    }
}
const c1 = new c('Hamza',4);
console.log(c1.getage())
*/


//DOM
// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
 btn.style.background = 'red';


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
//const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

































