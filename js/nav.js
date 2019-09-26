function changeNav() {
    var element = document.getElementById("changetoDiv");
    element.classList.toggle("show");
}

var menu = document.querySelector(".hideHome"),
    drawer = document.querySelector(".hide-div");
    menu.addEventListener('click', function(e){
    drawer.classList.toggle('show');
 });
 var menu = document.querySelector(".hideAbout"),
    drawer = document.querySelector(".hide-div");
    menu.addEventListener('click', function(e){
    drawer.classList.toggle('show');
 });
 var menu = document.querySelector(".hideServices"),
    drawer = document.querySelector(".hide-div");
    menu.addEventListener('click', function(e){
    drawer.classList.toggle('show');
 });

 var menu = document.querySelector(".hideWork"),
    drawer = document.querySelector(".hide-div");
    menu.addEventListener('click', function(e){
    drawer.classList.toggle('show');
 });
 var menu = document.querySelector(".hideBlogs"),
    drawer = document.querySelector(".hide-div");
    menu.addEventListener('click', function(e){
    drawer.classList.toggle('show');
 });
 var menu = document.querySelector(".hideContacts"),
    drawer = document.querySelector(".hide-div");
    menu.addEventListener('click', function(e){
    drawer.classList.toggle('show');
 });