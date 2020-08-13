const url = "https://pokeapi.co/api/v2/region/";


let pokeTypeList = document.querySelector('ul');

fetch(url) 
.then(function(results) {
    return results.json();
})
.then(function(json) {
let type = json.results;
    for (t of type) {
        let typeList = document.createElement('li');
        typeList.innerHTML = '<p>' + t.name + '</p>';
        pokeTypeList.appendChild(typeList);
    }
 })
 .catch(function(err) {
     console.log(err);
 });

