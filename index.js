// sum of array

// let num = [1,2,3,4,5,6,7,8] ;

// const evenNum = num.filter((item)=> {
//     if(item % 2 === 0){
//         return item
//     }
// });

// const multipleOfNum = evenNum.map(item=> item*item)
// const sumOfNum = multipleOfNum.reduce((curr,acc)=>{
//     return curr + acc
// },0) ;

// console.log(sumOfNum) ;

// length of array

// let arrOfStrings = ['ronnie','ben','xbox','australia']

// const lengthOfStrings = arrOfStrings.map((item)=>{
//            return  item.split('').length
// })
// console.log(lengthOfStrings)


 //factorial of array


const factorialFormula= (n)=>{
    let m = 1
    if(n == 0 || n == 1){
        return n
    }
    else if(n>1){
        for(let i=n;i>=1;i--){
            m = m*i
           
       }
       return m
    }
    
}
console.log(factorialFormula(9))

// curried arrow function

// const add = x => y => z => x+y+z ;
// let firstResult = add(5)
// let secondResult = firstResult(6)
// let finalResult = secondResult(5)

// console.log(finalResult)


// objects arrow func

// const person = [
//     {
//         name:'ron',
//         age:23
//     },
//     {
//         name:'ben',
//         age:26
//     },
//     {
//         name:'messi',
//         age:32
//     },

// ]

// const calcAge = person.reduce((curr,acc)=>{
//     return curr + acc.age / person.length
// },0)

// console.log(calcAge)














