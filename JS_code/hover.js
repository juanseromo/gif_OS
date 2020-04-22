let testlong = document.getElementsByClassName("longImg");

    for (let i = 0; i < testlong.length; i++) {
        testlong[i].addEventListener("mouseover", () => {   
            let barl = document.getElementsByClassName("img-title-container-long");
            barl[i].style.display = "block";
        })
        testlong[i].addEventListener("mouseleave", () => {   
            let barl = document.getElementsByClassName("img-title-container-long");
            barl[i].style.display = "none";
            })
    //element.addEventListener("mouseleave")
}
let test = document.getElementsByClassName("suggest-img");

    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener("mouseover", () => {   
            let bar = document.getElementsByClassName("img-title-container");
            bar[i].style.display = "block";
        })
        test[i].addEventListener("mouseleave", () => {   
            let bar = document.getElementsByClassName("img-title-container");
            bar[i].style.display = "none";
            })
}
