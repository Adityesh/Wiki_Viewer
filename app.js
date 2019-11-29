//Run the function when the scripts are fully loaded
$( document ).ready(function() {
    //input value from user
    var searchTerm = $("input[type=text]").val();
    //Api url to connect to wikipedia
    var api = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=`;
    var cb = '&callback=?'; 
    //Search button click
    $("#searchBtn").click(function(){
        var searchTerm = $("input[type=text]").val();
        var api = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=`;
        var cb = '&callback=?'; 
        //Search field empty then clear all results child nodes
        if(searchTerm == ''){
            $('.article-box').empty();
        }
        $(".article-box").empty();
        //Api call and store data in results title and extracts array
            $.getJSON(api + searchTerm + cb, function(data){
                 var results = data.query.pages; 
                 var titles = [];
                 var extracts = [];
                 var pages = [];
                for(let key in results){
                    extracts.push(results[key].extract);
                    titles.push(results[key].title);
                    pages.push(results[key].pageid);
                }
                //iterate and append to results class in html
                for(let i =0 ;i<titles.length;i++){
                    
                    $(".article-box").append(function(){   
                        return `<div class="articles">
                        <h3><a href="https://en.wikipedia.org/?curid=+${pages[i]}" target="_blank">${titles[i]}</a></h3>
                        <p>${extracts[i]}</p>
                        </div>`
                    })   
                }    
            });     
    });   
});