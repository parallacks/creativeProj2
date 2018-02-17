$(document).ready(function(){
  console.log("THIS IS A TEST");
  var submitButton=$("#marvelSubmit");
  console.log(submitButton);
  $("#marvelSubmit").click(function(e){
    e.preventDefault();
    value=$("#marvelInput").val();
    console.log(value);
    var myurl="https://gateway.marvel.com:443/v1/public/characters?name="+value+"&apikey=629ac310b1223e833811afac7e80a49b";
     // var myurl = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=5e11cda334cfa1b73a8784aafb80fd8d";
    $.ajax({
      url:myurl,
      dataType:"json",
      success: function(json){
        console.log(json);
        var result="";
        var picture="";
        picture+="<p> <img src=\""+json.data.results[0].thumbnail.path+".jpg\" height=480/></p>"
        result+="<h2>"+json.data.results[0].name+"!!</h2>";
        result+="<p>"+json.data.results[0].description+"</p><br/>";
        result+="<p>Here is a link to the <a href=\""+json.data.results[0].urls[1].url+"\">Wiki page</a>"
        $("#marvelPicture").html(picture);
        $("#marvelResults").html(result);
      }
    });
  });
});
