var querySearch = document.getElementById("search-query").value;
var searchBtn = document.querySelector('.btn-search');

searchBtn.addEventListener('click',()=>{
    alert(querySearch)
})

var query = '';


var api = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&limit=10&namespace=0&format=json`