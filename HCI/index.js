function maphandle(x){
    document.getElementById("overlay").style.width = "100%";
    var array = ["sarah.png","bio.png","sarahs.png","mikes.jpg"];
    document.getElementById("focus").innerHTML = "<img src=\""+array[x]+"\" width=90% height=80%\/><img src=\""+array[x+2]+"\" width=90% height=80%\/>";
}
function closefocus() {
      document.getElementById("overlay").style.width = "0%";
}
jQuery(document).keyup(function(e) {
if (e.keyCode == 27) {
closefocus();
}
});
