var titles = [];
var text = [];
var selcted = 0;

function init() {
    var btn = document.getElementById("myBtn");
    btn.disabled = true;
   
    loadJson(function(response){
        var data = JSON.parse(response);
        outPutFlashCards(data)
    });
}
function loadJson(callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    
    xobj.open('GET', 'Data/FlashCardData.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200"){
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function outPutFlashCards(json){
    var total = json.Total;
    
 
   
    for(var i = 0; i < total; i++){
       titles[i] = json[i].title;
       text[i] = json[i].text;
       
	}
    for(var i = 0; i < total; i++){
      
        var title = titles[i].trim();
        var cardText = text[i].trim();
        document.getElementById('card').innerHTML += title + "<div class=display><h2>Show</h2><div class=toDisplay>" + cardText + "</div></div>";        
    }
}	
      

