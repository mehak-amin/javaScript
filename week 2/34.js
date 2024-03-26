function abc(a,b,c) {
    console.log("a = " +a , "b = "+b);

    c=a;
    a=b;
    b=c;
    console.log("a = " +a , "b = "+b);
}
abc(3,4);

