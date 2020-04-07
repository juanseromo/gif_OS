function buscarGif() {
    let search = document.querySelector("input").value;
    const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz";
    let found = fetch(endpoint + "&q=" + search)
        .then((res) => res.json())
        .then((data) => data.data)
        .then((array) => array.map((images) => images.images.preview_webp.url))
        .then((urls, e)=> {
            let images = document.querySelectorAll("img.gifFra");
            console.log(images);

            for (let i = 0; i < images.length; i++) {
                images[i].setAttribute("src", e);
                };
        });
    console.log(search);
    
    document.querySelector(".suggest-searchbar").innerHTML = search + ":";

    fetch (endpoint)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((title) => title.title))
        .then((text, e) => {
            let images = document.querySelectorAll("img.gifFra");
            for (let i = 0; i < images.length; i++) {
            images[i].innerHTML = e;
            };
        });

    document.querySelector(".img-tittle-container").scrollIntoView({
        behavior: "smooth"
    })

document.querySelector(".img-tittle-container").innerHTML = search + ":";

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.data)
    .then((array) => array.map((title) => title.title))
    .then((text) => {
        let i = 0;
    });


let input = document.getElementById("searchbar-buscar");

if (input.value === true){

    document.getElementsByClassName("searchResults").style.display("block");

    console.log(input)

} else {

    document.getElementsByClassName("searchResults").display = "none";

}
};

/* 

let imgsearch = document.querySelectorAll("img.gifFra");

    console.log(imgsearch);

    imgsearch.length.setAttribute("src", () => {
        for (let i = 0; i < imgsearch.length; i++) {
            imgsearch[i].innerHTML = e;
            };
            return imgsearch
    }); 
    }

document.addEventListener('DOMContentLoaded', function(){
document.getElementById("searchbar-buscar").onclick = function(){
    document.getElementsByClassName('searchResults')[0].textContent="Here is the message";
}
});
keydown
Fired when a key is pressed.
Also available via the onkeydown property.


//EXAMPLE OF STYLES IN LINE:::

var styles = {
    container: {
        background: 'f6f7f8 url(/images) repeat-x', 
        border: '1px solid color',
        borderRadius: 2,
        boxShadow: '0 1px 1px rgba'
    },
    depressed: {
        backgroundColor: '#4e69a2',
        borderColor: '·c6c7ca',
        color: '#5890ff'
    },
};
<div style={styles.container}>
*/