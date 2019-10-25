var querySearch = document.getElementById("search-query").value;
var searchBtn = document.querySelector('.btn-search');


searchBtn.addEventListener('click',()=>{
    var api = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${querySearch}&limit=10&namespace=0&format=json`
    fetch(api,{mode: 'cors',})
        .then(response => response.json())
        .then(data =>console.log(data))
})



