var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

function getData (){
    let urlLink = "https://api.giphy.com/v1/gifs/random?api_key=vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz&tag=cats&rating=G", requestOptions;
    
    return fetch(urlLink)
    .then((response) => {
        return response.json() 
    })
    .then ((data) =>{
        return data.data.images.downsized.url;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}

async function gifFram (){
    
    let images = document.querySelectorAll("img.gifFra, img.gifFrameLong");
    console.log(images);

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("src", await getData());
        };
        
} gifFram();

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

