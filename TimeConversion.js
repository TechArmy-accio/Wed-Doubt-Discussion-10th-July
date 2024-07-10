// https://course.acciojob.com/idle?question=354f7964-86b9-4bcc-8f31-d070f1336bce

function timeConversion(s) {
    // Write your code here
     let amPM =  s.slice(-2) // PM
     let str = s.slice(0,-2)
     let arr = str.split(":")
     // console.log(arr)
     let hr = +arr[0]
     
     if( hr < 12 && amPM == "AM" ){
        console.log(arr[0]+":"+arr[1]+":"+arr[2])
     }
     else if( hr < 12 && amPM == "PM" ){
        console.log((+arr[0]+12)+":"+arr[1]+":"+arr[2])
     }
     
     else if(hr == 12 && amPM == "PM"){
       console.log(arr[0]+":"+arr[1]+":"+arr[2])
     } 
      else if(hr == 12 && amPM == "AM"){
       console.log("00"+":"+arr[1]+":"+arr[2])
     }
     
  }