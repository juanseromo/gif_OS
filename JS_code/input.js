document.addEventListener("keydown", function(){
    document.getElementById("searchbar-buscar").onkeyup = function(){
        let bar = document.getElementById("searchResults");
        let inp = document.getElementById("searchbar-buscar");
        let sea = document.getElementById("buscarBut");
        let sug = document.getElementsByClassName("suggest")[0];

        if ( inp.value !== ""){
            bar.style.display = "block";
            sea.style.color = "black"
            sea.innerHTML = '<img src="images/lupa.svg" alt="lupa-inactive"/>Buscar';
            inp.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    buscarGif(); buscarGifTit();
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

function buscarGif(){
    let search = document.getElementById("searchbar-buscar").value;
    return buscarGif2(search)

}

let verMas = document.getElementsByClassName("verMasButt")
for (let i = 0; i < verMas.length; i++) {
    verMas[i].onclick = () => {
        let sugc = document.getElementsByClassName("suggest-imgt")[i];
        let cont = sugc.getElementsByClassName("img-tittle-containert")[0];
        let titg = cont.getElementsByClassName("imgNamet")[0].textContent;
        let search = document.getElementById("searchbar-buscar");
    
        search.value = titg;
        buscarGif();
        console.log(titg);
    }
}


function buscarGif2(busqueda) {
   
    const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz";

    fetch (endpoint + "&q=" + busqueda + "&limit=13")
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
    .catch(console.error)
}



function buscarGifTit() {
   
    let search = document.getElementById("searchbar-buscar").value;
    let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz";
    fetch (endpoint + "&q=" + search + "&limit=13")
    .then(response => { 
        return response.json()
    })
    .then(data => {
        return data.data;
    })
    .then(array => array.map((title) => title.title))
    .then(titt => {
        var i = 0;
        titt.forEach(element => {
            let tit = document.querySelectorAll("a.imgName")[i];
            tit.innerHTML = element.slice(0, 25) + "...";
            i++;
        });
    })
    .catch((error) => {
        return error
    })
} buscarGifTit()





/* 


function vermas () {

    document.addEventListener("click", function(){
        document.getElementsByClassName("verMasButt").onclick = function(){
            document.getElementById("searchbar-buscar").value = element;
        }
    })
} vermas()



*/