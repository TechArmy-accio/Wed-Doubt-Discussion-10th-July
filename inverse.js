// https://course.acciojob.com/idle?question=8d50680f-6db2-4d60-b9b6-f298660d9e13

// I Am A JavaProgrammer


// function solution(str) {
//     // str = str + " "

//     let word = ""
//     for(let t of str){ // "P"
//       if(t>= 'a' && t<= 'z'){
//         word =  word + t // P
//       }
//       else if((t>= 'A' && t<= 'Z')){
//         word.length>0 && console.log(word)
        
//         word = t // P
//       }
//     }
//     console.log(word)
  
// }

// solution("IAmLearningJavaProgrammer")

let str = "IAmLearningJavaProgrammer"
let s1 = ""
for(let i = 0; i<str.length; i++){
    t = str[i]
    if(t >= 'A' && t <= 'Z'){
        s1 = s1 + " " + t
    }
    else{
        s1 = s1 + t
    }

}
s1 = s1.trim()
let arr = s1.split(" ")

for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}

// "\n"