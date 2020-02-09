const req =  new XMLHttpRequest();
const url= 'https://jsonplaceholder.typicode.com/posts';
const methodeGet = "POST";
const data = {
 body : "blablabla",
 titre :"Titre du poste",
userId : 16
};


req.open(methodeGet, url);


req.onreadystatechange = function (event) {

    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 201) {
            alert(this.responseText);
            console.log(this.responseText);
        } else {
            alert('Il y a eu un problème avec la requête.');
        }
    }
}

req.send(data);



