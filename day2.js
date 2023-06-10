/*
   let l = 2;
   let w = 7;
   let p = l+w;
   let perimeter = 2*(p);
   console.log(p);
   console.log(perimeter);

   let area = l*w;
   console.log(area);

   //Quiz Day 2
let number = 17;
if( number % 3 === 0 || number % 5 === 0); {
console.log (number + " divisible by 3 or 5");
}
 else (number % 3 !=== 0 || number % 5 !== 0);{
    console log (number + " NOT divisible by 3 or 5")
 }

 //Quiz Day 2
let num = 7;
let sum = 0;
let count = 0;
while(count<=num){
    sum =sum + count;
    count++;
}console.log(sum);


for (let num = 1; num <= 1; num++);
console.log(num)

if(num % 3 === 0 || num % 5 === 0){
    console.log(num + " divisible by 3 or 5");
}*/
   //Try 2

 
   function sumofnumbers(n) {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  
  const n = 15;
  const result = sumofnumbers(n);
  console.log(`The sum of numbers between 1 and ${n} divisible by 3 or 5 is: ${result}`);
  
