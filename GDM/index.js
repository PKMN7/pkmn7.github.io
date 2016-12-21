function videohandle(x){
    document.getElementById("overlay").style.width = "100%";
    var array = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","11.jpg","12.jpg","13.jpg"];
    document.getElementById("focus").innerHTML = "<img src=\""+array[x]+"\" width=90% \/>";
}
function closefocus() {
      document.getElementById("overlay").style.width = "0%";
}
jQuery(document).keyup(function(e) {
if (e.keyCode == 27) {
closefocus();
}
});
