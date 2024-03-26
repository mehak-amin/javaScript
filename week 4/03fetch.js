const url = "https://cat-fact.herokuapp.com/facts";
        let result = fetch(url);// fetch returns a promise 
        console.log(result);

        // fetching this url using async / await
        const fact = document.getElementById('fact');
        const fact2 = document.getElementById('btn');
        const getFacts = async function(){
            let response1 = await fetch(url);
            let response =  await response1.json()

           fact.innerText =  response[2].text ;
        } ;
        
        fact2.addEventListener('click', getFacts); 