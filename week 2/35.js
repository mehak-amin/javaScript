// nested functions
function parentFunction(parentParameter) {
    let parentVariable = "mehak";
    function childFunction(childParameter){
        return parentVariable + childParameter
    }
    return childFunction;
}
let myfunction = parentFunction();
console.log(myfunction ("is good") );


