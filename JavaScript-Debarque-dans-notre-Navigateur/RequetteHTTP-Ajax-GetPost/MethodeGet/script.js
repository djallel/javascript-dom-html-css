const req =  new XMLHttpRequest();
const url= 'https://jsonplaceholder.typicode.com/posts';
const methodeGet = "GET";

req.open(methodeGet, url);


req.onreadystatechange = function (event) {

    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            alert(this.responseText);
            console.log(this.responseText);
        } else {
            alert('Il y a eu un problème avec la requête.');
        }
    }
}

req.send();



