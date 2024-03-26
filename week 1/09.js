let  a=112;
if(a<=1){
    console.log("not prime");
}
for (let i = 2; i < a; i++){
    if(a%i ==0){
        console.log("not prime");
    }
    else{
        console.log(" prime");
    }
    break;
}
