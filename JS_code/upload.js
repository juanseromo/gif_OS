window.onload = function() {

    const myStorage = window.localStorage;
    const local = Object.keys(myStorage);

    for (let i = 0; i < 8; i++ ){

        let get = myStorage.getItem(local[i]);

        if (get) {
            let gifFra = document.getElementsByClassName("gifFra")[i];
            gifFra.setAttribute("src", get);
        }

    }
/*
    if (local.length >= 8) {

        local.splice(0, 4);
        console.log(local[8])
    } */
}


/*
window.onbeforeunload = function(){
    const myStorage = window.localStorage;
    myStorage.clear();
    alert("Window is being closed")
}*/