const imagemurl = document.querySelector('img')

function geolocalizacao() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
            fetch(`https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=b72f2d5c00939efbeecbf2b0b7c9a409&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=${latitude}&lon=${longitude}&text=cachorro`)
                .then((res) => res.json())
                .then((photoObj) => {
                    const imageUrl = "https://farm" + photoObj.photos.photo[0].farm + ".staticflickr.com/" + photoObj.photos.photo[0].server + "/" + photoObj.photos.photo[0].id + "_" + photoObj.photos.photo[0].secret + ".jpg";
                    imagemurl.src = imageUrl
                })
        })
    } else {
        alert("I'm sorry, but geolocation services are not supported by your browser.");
    }
}
geolocalizacao()



const botaoformulario = document.querySelector('#botaoformulario')
botaoformulario.addEventListener("click", pegarfoto)

function pegarfoto() {
    fetch(`https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=b72f2d5c00939efbeecbf2b0b7c9a409&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=-25.4284&lon=-49.2733&text=cachorro`)
        .then((res) => res.json())
        .then((photoObj) => {
            const imageUrl = "https://farm" + photoObj.photos.photo[0].farm + ".staticflickr.com/" + photoObj.photos.photo[0].server + "/" + photoObj.photos.photo[0].id + "_" + photoObj.photos.photo[0].secret + ".jpg";
            imagemurl.src = imageUrl
        })
}

pegarfoto()
