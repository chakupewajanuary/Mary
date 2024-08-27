alert("hello");
console.log("hellow world");

const todos=[
    {
        id:1,
        text:'meet with boss',
        iscompleted:true
    },
    {
        id:2,
        text:'meet with teacher',
        iscompleted:false
    },

{
    id:3,
    text:'meet with dentist',
    iscompleted:true
},
];
//json send data to the serve 
const todojson=JSON.stringify(todos);
console.log(todojson);
//for loop
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text); 
}
//function as above for loop
for(let todo of todos){
    console.log(todo.id);
}

/*couple of array loop(forEach, map-create new array in the array,
filter-create new array based on a condition)
*/
//forEach
todos.forEach(function(tai){
    console.log(tai.iscompleted);  
});
//for map
 const todotext= todos.map(function(tai){
    return tai.text;
});
console.log(todotext);
//filter
const todoiscompleted= todos.filter(function(tai){
    return tai.iscompleted===true;
});
console.log(todoiscompleted);

//combined filter and map 
const todocompleted= todos.filter(function(tai){
    return tai.iscompleted===true;
}).map(function(tai){
    return tai.id;
})
console.log(todocompleted);

// function

const add=(num1,num2)=>num1+num2;
console.log(add(4,4));
//or
function addnum(numb1,numb2){
    return numb1+numb2;
}
console.log(addnum());
todos.forEach((ty)=>console.log(ty));


// constructive function
function person(firstname , lastname, dob){
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob=dob;
}
//object instantate
const person1= new person("jau","mwani","2024-03-14");
console.log(person1);
const {firstname,lastname}=person1
console.log(firstname);


//class 
class Mtu{
    constructor(firstname , lastname, dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.dob=new Date(dob);
    }
    getFullname(){
        return `${this.firstname} and ${lastname}`
    }

     
}
const mtu1=new Mtu("mwana","good","2023-06-10")
console.log(mtu1.getFullname());
console.log(mtu1.dob)




const tt=document.querySelector('#uu');
tt.textContent="JINA";

const btn=document.querySelector('.btn');
btn.style.background="red";

//works the same as bellow
/*
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("click");
})

// works the same as above
btn.addEventListener('click',onClick);

function onClick(e){
    e.preventDefault();
    console.log("click");
    
 }
    */
 const Form=document.getElementById("form");
 const Name=document.getElementById("name");
 const Email=document.getElementById("email");
 const Msg=document.getElementById("msg")
 

Form.addEventListener('submit',onSubmit)

function onSubmit(e){
    e.preventDefault();
    if(Name.value==""||Email.value==""){
        Msg.innerHTML="please fill the fields";
        setTimeout(()=>Msg.remove(), 3000);

    }
}

// to day adds file code
for(let {} of todos){
    console.log(tob.text)
}

const uu=todos;
const rrr=uu.id;
console.log(rrr);

//method for test how i can commit child branch only

function addnum(base,length,height){
    this.base=base;
    this.length=length;
    this.height=height;
}
const man=add(()=>{
    volume=this.base*this.length*this.height
    return volume;
})
const my=new addnum(2,4,3);
console.log(my.mani);














