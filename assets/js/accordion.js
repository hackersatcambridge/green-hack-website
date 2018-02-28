var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      var caret = this.getElementsByTagName("i")[0];
      console.log(caret);
      caret.className = "fa fa-angle-right";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      var caret = this.getElementsByTagName("i")[0];
      console.log(caret);
      caret.className = "fa fa-angle-down";
    }
  });
}