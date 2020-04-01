var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

function getData (){
    let urlLink = "https://api.giphy.com/v1/gifs/random?api_key=vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz&tag=cats&rating=G", requestOptions;
    
    let obj = fetch(urlLink)
    .then((response) => {
        return response.json() });

    obj.then ((data) =>{
        data.data.images.downsized.url;
    });
    

    obj.catch((error) => {
        console.error('Error:', error);
      });
    
} getData()

async function gifFram (getData){
    
    let images = document.querySelectorAll("img.gifFra");
    console.log(images);

    for await (let i of getData) {
        images[i].setAttribute("src", getData());
        };
        
} gifFram();

/*

images.forEach(function() {
            let attr = images[length].setAttribute("src", imagUrl);
        });

for (let i = 0; i < images.length; i++) {
            let attr = images[length].setAttribute("src", imagUrl);
            return attr;
            };
        


if (images === true) {
    gifFra.setAttribute("src", imagUrl)
}
else {
    var img = document.createElement('img');
    img.width = "280px";
    return img;*/


    //images.createElement("img")

/*document.getElementsByClassName("gifFrame").textContent = "Esto es un nuevo texto";

    let link = document.getElementsByTagName("section")[1];

    console.log(link);  
 

*/
    
/* fetch('api.giphy.com/v1/gifs/{gif_id}')
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerHTML = JSON.stringify(data);
    }) */



//RESPONSE