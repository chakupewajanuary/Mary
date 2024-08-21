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


