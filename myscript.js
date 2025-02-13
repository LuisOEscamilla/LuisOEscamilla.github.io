//Luis Escamilla
//02/11/25
//Javascript file

//sets dark mode
document.getElementById("theme-toggle").onclick = function() {
    document.getElementsByTagName("body")[0].classList.toggle("dark");
};