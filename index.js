window.onload = function() {
    if(performance.navigation.type === 1 ){
        window.location.href = '/'
    }
}

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });

});
