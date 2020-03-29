document.addEventListener('DOMContentLoaded', function(){
document.getElementById("searchbar-buscar").onclick = function(){
    document.getElementsByClassName('searchResults')[0].textContent="Here is the message";
}
});