let num1 = 3
let num2 = 5


setTimeout(function(){
    let result = num1 + num2
    console.log(result)
}, 1000);

function fetchResult(callback){
    setTimeout(()=>{
        let result = num1 + num2;
        callback(result);
    }, 3000);
}
fetchResult(function(result){
    console.log(result);
});

console.log("Result is being fetched...");