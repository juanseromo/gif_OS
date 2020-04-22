function getData (){
    let urlLink = "https://api.giphy.com/v1/gifs/random?api_key=vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz&tag=cats&rating=G";
    
    return fetch(urlLink)
    .then((response) => response.json())
    .then(response => response.data)
    .catch((error) => {
        console.error('Error:', error);
    });
}

async function gifFram (){
    
    let images = document.querySelectorAll("img.gifFra, img.gifFrameLong");

    let titulos = document.querySelectorAll("a.imgName");

    for (let i = 0; i < images.length; i++) {
        const img = await getData();
        const tit = img.title;

        images[i].setAttribute("src", img.images.downsized.url);
        titulos[i].innerHTML = tit.slice(0, 25) + "...";
        
        };
    
} gifFram().catch(console.error)



function trending(){

    let endpoint = "https://api.giphy.com/v1/gifs/trending?api_key=vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz&limit=4";

    fetch (endpoint)
    .then(response => { 
        return response.json()
    })
    .then(data => {
        return data.data
    })
    .then(array => array.map((images) => images.images.downsized.url))
    .then(urls => {
        var i = 0;
        urls.forEach(element => {
            document.querySelectorAll("img.gifTrend")[i].setAttribute("src", element);
            i++;
        });
    })
    .catch((error) => {
        return error
    })
} trending()



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
                i++
        });
    })
    .catch(console.error)

} trendingName()
