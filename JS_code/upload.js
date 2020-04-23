window.onload = function() {

    const myStorage = window.localStorage;
    const local = Object.keys(myStorage);

    for (let i = 0; i < 8; i++ ){

        let gifFra = document.getElementsByClassName("gifFra")[i];
        let get = myStorage.getItem(local[i]);
        gifFra.setAttribute("src", get);

    }
}
/*
window.onbeforeunload = function(){
    const myStorage = window.localStorage;
    myStorage.clear();
    alert("Window is being closed")
}*/