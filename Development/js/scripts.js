let colors =["red","blue","yellow"]
function logger(x) {
for (let i=0;< x.length; i++){   
console.log(x[i])
}
}
logger(name);

let temps1 = [22,44,45,10]
let  value = 40
let temps2=[]

function hottestDays(array,TH,empty_array){
for(let i =0; i < temps.length; i++) {
if(temps[i]> TH) {
    empty_array.push(temps[i])
}
}
return temps2;
}
console.log(hottestDays(temps1,value,temps2));


let books=[
    {
        name:"book1"
        ID:1
    },
   { name:"book2"
       ID:2},
        { name:"book3"
        ID:3},
        { name:"book4"
        ID:4},

];
let bookId=5
;
function getBookById(bookId,books){
for(let i = 0; i<books.length;i++){
    if(books[i].ID ==bookId){
        return books[i]
    }
}
console.log(getBookById(bookId,books));

let userInput =""
while(userInput !=="انتهيت") {
    userInput =prompt("السلعة");
    if(userInput =="انتهيت")break;
    let price =parseFloat(prompt("السعر");
    let quantity =parseIntprompt("الكميه")
let object={
    name:userInput,
    price:price,
    quantity:quantity,
};
output.push(object);
}
let totalPrice=0
for(let i = 0; i<output.length;i++){
    console.log(output[i].quantity+""+output[i].name+""+output[i].quantity*output[i].price);

}
console.log(totalPrice);