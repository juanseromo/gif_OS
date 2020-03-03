function myFunction() {
    fetch('https://api.chucknorris.io/jokes/random').then (res => res.json()).then(console.log);

};
