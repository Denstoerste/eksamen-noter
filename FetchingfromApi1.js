fetch("http://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(data =>{

    console.log(data);
    ///document.querySelector(`body`).innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;//

})