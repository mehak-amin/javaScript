const form = document.querySelector('form');
// we know when ever we submit the form , the values of form are by default sent to the server(url). i.e by get/post method. Thus we have to stop that default behaviour . We dont have to here send our content on the server

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value); // parse int converts string value to integer
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height';
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please give a valid weight';
  }
  else {
     const bmi = (weight/ ((height*height)/10000)).toFixed(2) // "toFixed" will give us result only upto 2 decimal 
     if(bmi < 18.6){
      results.innerHTML = ` <span>${bmi}   under weight </span>`
     }
     else if (bmi >= 18.6 && bmi <= 24.9){
      results.innerHTML = ` <span>${bmi}   normal range  </span>`
     }
     else if (bmi > 24.9){
      results.innerHTML = ` <span>${bmi}   over weight  </span>`
     }
     
  }
});
