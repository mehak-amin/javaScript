//insertion 
let array = [4,6,1,3,1];
let element = 9;
let index = 2;
let z = array.length;


for(let i = z-1; i >= index-1; i--){
    
    array[i+1]=array[i]
    }

   array[(index)-1]= element ;
   console.log(array);

  