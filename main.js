//functions

function add(a,b){
    return a+b;
}

// expression of above function

var add1=function(a,b)
{
    return a+b;
}

// ES6 arrow function

const add2= (a,b) => {
    return a+b;
}

//one line statement

const add3 = (a,b) => a+b;
const sub=(a,b) =>a-b;
const mul=(a,b) =>a*b;

var res= sub(4,3);
console.log(res);

// default parameter value

function demo(a,b,c){
    if(b===undefined)
    {
        b=0;
    }
    if(c===undefined)
    {
        c=0;
    }

    return a+b+c;
};

let res1=demo(10,20);

const demo2 =(a,b=20,c=30) =>
{
    return a+b+c;
}

const result= demo2(10);
console.log(result);


//Template literals
var name='hey';
var greetings='can you pass me that stuff?';
var message=`${name} ${greetings}` 
console.log(message);

//arrrays

const arr=[1,2,3,4];
const arr2 =[];
for(let i=0 ;i<= arr.lenght-1;i++)
{
    arr2.push(arr[i] *2)
}

console.log(arr2);

//array helper method

const mul2=arr.map(function(e){
console.log(e);
})

const mul2=arr.map((item)) => {
    return item *2

})

console.log(arr);
console.log(mul2);


