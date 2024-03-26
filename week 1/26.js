//insertion  2
let array = [4,6,1,3,1];
let element = 9;
let index = 9;
let z = array.length;


for(let i = z-1; i >= index-1; i--){
    
    array[i+1]=array[i]
    }

   array[(index)-1]= element ;
   if (index > z){
    console.log(" there is no space available in the array");
   }

  