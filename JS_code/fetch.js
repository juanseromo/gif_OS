// el siguiente es el codigo para traer la api

fetch('/json/cats.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerHTML = JSON.stringify(data);
    })

//When you're looping through these objects, you can use this imageLink property to display this image in an img element.
//Here's the code that does this:
  
    html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";


    //RANDOM INPUT:
// https://api.giphy.com/v1/gifs/random?api_key=vNMFm9NCe2b7kKg9kw43Y24BvKXiNECz&tag=unicorns&rating=G

//RESPONSE

/*
{
    "data":
    {
        "type": "gif",
        "id": "c6WpHKSf64yi2GRbA5",
        "url": "https://giphy.com/gifs/kraftbrand-unicorn-kraftmac-nationalunicornday-c6WpHKSf64yi2GRbA5",
        "slug": "kraftbrand-unicorn-kraftmac-nationalunicornday-c6WpHKSf64yi2GRbA5",
        "bitly_gif_url": "https://gph.is/g/46DeMqa",
        "bitly_url": "https://gph.is/g/46DeMqa",
        "embed_url": "https://giphy.com/embed/c6WpHKSf64yi2GRbA5",
        "username": "kraftbrand",
        "source": "",
        "title": "unicorn GIF by Kraft",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2019-04-08 22:32:30",
        "trending_datetime": "0000-00-00 00:00:00",
        "images":
        {
            "hd":
            {
                "height": "1360",
                "mp4": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy-hd.mp4?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy-hd.mp4",
                "mp4_size": "2065931",
                "width": "1360"
            },
            "downsized_large":
            {
                "height": "480",
                "size": "2309897",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy.gif",
                "width": "480"
            },
            "fixed_height_small_still":
            {
                "height": "100",
                "size": "7142",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100_s.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=100_s.gif",
                "width": "100"
            },
            "original":
            {
                "frames": "34",
                "hash": "588fb606486279b5ae2ff7fa77a73494",
                "height": "480",
                "mp4": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy.mp4?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy.mp4",
                "mp4_size": "470360",
                "size": "2309897",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy.gif",
                "webp": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy.webp?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy.webp",
                "webp_size": "999528",
                "width": "480"
            },
            "fixed_height_downsampled":
            {
                "height": "200",
                "size": "105097",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200_d.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200_d.gif",
                "webp": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200_d.webp?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200_d.webp",
                "webp_size": "91182",
                "width": "200"
            },
            "downsized_still":
            {
                "height": "480",
                "size": "76377",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy-downsized_s.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy-downsized_s.gif",
                "width": "480"
            },
            "fixed_height_still":
            {
                "height": "200",
                "size": "20882",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200_s.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200_s.gif",
                "width": "200"
            },
            "downsized_medium":
            {
                "height": "480",
                "size": "2309897",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy.gif",
                "width": "480"
            },
            "downsized":
            {
                "height": "480",
                "size": "1621590",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy-downsized.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy-downsized.gif",
                "width": "480"
            },
            "preview_webp":
            {
                "height": "108",
                "size": "49300",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy-preview.webp?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy-preview.webp",
                "width": "108"
            },
            "original_mp4":
            {
                "height": "480",
                "mp4": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy.mp4?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy.mp4",
                "mp4_size": "470360",
                "width": "480"
            },
            "fixed_height_small":
            {
                "height": "100",
                "mp4": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100.mp4?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=100.mp4",
                "mp4_size": "63137",
                "size": "139170",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=100.gif",
                "webp": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100.webp?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=100.webp",
                "webp_size": "144126",
                "width": "100"
            },
            "fixed_height":
            {
                "height": "200",
                "mp4": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200.mp4?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200.mp4",
                "mp4_size": "149311",
                "size": "418775",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200.gif",
                "webp": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200.webp?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200.webp",
                "webp_size": "341328",
                "width": "200"
            },
            "downsized_small":
            {
                "height": "312",
                "mp4": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy-downsized-small.mp4?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy-downsized-small.mp4",
                "mp4_size": "85840",
                "width": "312"
            },
            "preview":
            {
                "height": "294",
                "mp4": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy-preview.mp4?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy-preview.mp4",
                "mp4_size": "29132",
                "width": "294"
            },
            "fixed_width_downsampled":
            {
                "height": "200",
                "size": "105097",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200w_d.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200w_d.gif",
                "webp": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200w_d.webp?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200w_d.webp",
                "webp_size": "91182",
                "width": "200"
            },
            "fixed_width_small_still":
            {
                "height": "100",
                "size": "7142",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100w_s.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=100w_s.gif",
                "width": "100"
            },
            "fixed_width_small":
            {
                "height": "100",
                "mp4": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100w.mp4?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=100w.mp4",
                "mp4_size": "48011",
                "size": "139170",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100w.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=100w.gif",
                "webp": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100w.webp?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=100w.webp",
                "webp_size": "144126",
                "width": "100"
            },
            "original_still":
            {
                "height": "480",
                "size": "115692",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy_s.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy_s.gif",
                "width": "480"
            },
            "fixed_width_still":
            {
                "height": "200",
                "size": "20882",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200w_s.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200w_s.gif",
                "width": "200"
            },
            "looping":
            {
                "mp4": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy-loop.mp4?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy-loop.mp4",
                "mp4_size": "2815264"
            },
            "fixed_width":
            {
                "height": "200",
                "mp4": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200w.mp4?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200w.mp4",
                "mp4_size": "149311",
                "size": "418775",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200w.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200w.gif",
                "webp": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200w.webp?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=200w.webp",
                "webp_size": "341328",
                "width": "200"
            },
            "preview_gif":
            {
                "height": "87",
                "size": "49888",
                "url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy-preview.gif?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=giphy-preview.gif",
                "width": "87"
            },
            "480w_still":
            {
                "url": "https://media0.giphy.com/media/c6WpHKSf64yi2GRbA5/480w_s.jpg?cid=f45f2eb59e4f7cf55900fc79e17353286f86f4255b599a49&rid=480w_s.jpg",
                "width": "480",
                "height": "480"
            }
        },
        "user":
        {
            "avatar_url": "https://media4.giphy.com/avatars/kraftbrand/wRrWiV08ajaF.jpg",
            "banner_image": "https://media4.giphy.com/headers/kraftbrand/k3x8NC20csRc.png",
            "banner_url": "https://media4.giphy.com/headers/kraftbrand/k3x8NC20csRc.png",
            "profile_url": "https://giphy.com/kraftbrand/",
            "username": "kraftbrand",
            "display_name": "Kraft",
            "is_verified": true
        },
        "image_original_url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy.gif",
        "image_url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy.gif",
        "image_mp4_url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/giphy.mp4",
        "image_frames": "34",
        "image_width": "480",
        "image_height": "480",
        "fixed_height_downsampled_url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200_d.gif",
        "fixed_height_downsampled_width": "200",
        "fixed_height_downsampled_height": "200",
        "fixed_width_downsampled_url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/200w_d.gif",
        "fixed_width_downsampled_width": "200",
        "fixed_width_downsampled_height": "200",
        "fixed_height_small_url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100.gif",
        "fixed_height_small_still_url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100_s.gif",
        "fixed_height_small_width": "100",
        "fixed_height_small_height": "100",
        "fixed_width_small_url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100w.gif",
        "fixed_width_small_still_url": "https://media2.giphy.com/media/c6WpHKSf64yi2GRbA5/100w_s.gif",
        "fixed_width_small_width": "100",
        "fixed_width_small_height": "100",
        "caption": ""
    },
    "meta":
    {
        "status": 200,
        "msg": "OK",
        "response_id": "9e4f7cf55900fc79e17353286f86f4255b599a49"
    }
 } */
 