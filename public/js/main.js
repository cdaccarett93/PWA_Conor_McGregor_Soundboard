$(document).ready(function () {
    
    var baseUrl = "audio/";
    var audio = ["youlldofookinnuttin.mp3", "fooked.mp3", "fookshowtimetoo.mp3", "fookoff.mp3", "doesthismicwork.mp3", "dada.mp3", "hewontdoshit.mp3", "whothefuckisthatguy.mp3", "liltwerp.mp3", "whatthatmeans.mp3", "thatswhatimtalkinbout.mp3", "snake.mp3", "nocalls.mp3", "gods.mp3", "mysticmac.mp3"];

$('button').click(function() {
  var i = $(this).attr('id').substring(1);           //get the index of button
  new Audio(baseUrl + audio[i - 1]).play();          //play corresponding audio
});
});

