function changeNav() {
    var element = document.getElementById("changetoDiv");
    element.classList.toggle("show");
}

document.querySelectorAll('.hideNav').forEach (item => {
   item.addEventListener('click', turnOfNav);
});

function turnOfNav() {
   document.getElementById('changetoDiv').classList.remove('show');
}

