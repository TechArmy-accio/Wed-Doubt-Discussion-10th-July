// https://course.acciojob.com/idle?question=09f6911f-992e-43cb-98dc-75f7848a14e3

function NthEvenFibonacci(n) {
    //Write your code here
      let a  = 1
      let b =  1
       let count = 0 // 5
  
       while(true){
            let c = a+b  // 3
             a = b // 2
             b = c // 3
            if(c%2 == 0){
                count++
            }
            if(count == n){
                 return c %(10**9 + 7)
            }
       }
  
      
  }