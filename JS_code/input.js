document.addEventListener("keydown", function(){
    document.getElementById("searchbar-buscar").onkeyup = function(){
        let bar = document.getElementById("searchResults");
        let inp = document.getElementById("searchbar-buscar");
        let sea = document.getElementById("buscarBut");
        let sug = document.getElementsByClassName("suggest")[0];

        if ( inp.value !== ""){
            bar.style.display = "block";
            sea.style.color = "black"
            inp.innerHTML = '<img src="images/lupa.svg" alt="lupa-inactive"/>Buscar';
            inp.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    buscarGif()
                }
            });
            sug.style.display = "none";


        } else if ( inp.value === ""){
            bar.style.display = "none";
            sea.style.color = "#B4B4B4";
            sea.innerHTML = '<img src="images/lupa_inactive.svg" alt="lupa-inactive"/>Buscar';
            sug.style.display = "block";
        }
    }
    });

function buscarGif() {
   
    let search = document.getElementById("searchbar-buscar").value;
    let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz";

    fetch (endpoint + "&q=" + search + "&limit=13")
    .then(response => { 
        return response.json()
    })
    .then(data => {
        return data.data;
    })
    .then(array => array.map((images) => images.images.downsized.url))
    .then(urls => {
        var i = 0;
        urls.forEach(element => {
            document.querySelectorAll("img.gifFra, img.gifFrameLong")[i].setAttribute("src", element);
            i++;
        });
    })
    .catch((error) => {
        return error
    })
} buscarGif()


function trendingName(){

    let endpoint = "https://api.giphy.com/v1/gifs/trending?api_key=vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz&limit=4";

    fetch(endpoint)
    .then(response => { 
        return response.json()
    })
    .then(data => {
        return data.data;
    })
    .then(arr => arr.map((title) => title.title)
    )
    .then(tit => {
        var i = 0;
            tit.forEach(element => {
                let img = document.querySelectorAll("a.imgNamet")[i];
                img.innerHTML = element.slice(0, 25) + "...";
                i++; 
        });
    })
    .catch((error) => {
        return error
    })

} trendingName()

function vermas () {
    let search = document.getElementById("searchbar-buscar").value;
        search = tit;
        let but = document.getElementsByClassName("verMasButt")
}

/* 
async function getDat () {
    let images = document.querySelectorAll("img.gifFra");
    console.log(images);
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("src", await buscarGif());
        };
} getDat()


 document.querySelector(".suggest-searchbar").innerHTML = search + ": working";

//WORKS::::
 .then(array => array.map((images) => 
            console.log(images.images.downsized.url))
        )




document.addEventListener('', function(){
document.getElementById("searchbar-buscar").onclick = function(){
    document.getElementsByClassName('searchResults')[0].textContent="Here is the message";
}
});

*/