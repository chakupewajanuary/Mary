alert("hello");
console.log("hellow world");

const todos=[
    {
        id:1,
        text:'meet with boss',
        iscompleted:true
    },
    {
        id:1,
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