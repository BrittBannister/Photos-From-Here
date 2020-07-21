let imageArray = []
navigator.geolocation.getCurrentPosition(useRealLocation, useFallbackLocation)

const fallbackLoc = { latitude: -41.838875, longitude: 171.7799 }

function useRealLocation(pos) {
    retrievePictures(pos.coords)
}

function useFallbackLocation() {
    retrievePictures(fallbackLoc)
}

//request sent to flickr
function retrievePictures(coords) {
    console.log("Lat: " + coords.latitude)
    console.log("Lon: " + coords.longitude)
    imageArray = []
    const url = "https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=d3bfc1adf01a36079d0c6711030a97e8&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=" + coords.latitude + "&lon=" + coords.longitude + "&text=outdoors"

    fetch(url)

    .then(function(responseObject) {
            return responseObject.json()
        })
        .then(function(data) {
            createURL(data)
            return data
        })
}

function createURL(data) {
    for (let i = 0; i < data.photos.photo.length; i++) {
        imageArray.push("https://farm" + data.photos.photo[i].farm + ".staticflickr.com/" + data.photos.photo[i].server + "/" + data.photos.photo[i].id + "_" + data.photos.photo[i].secret + ".jpg")
    }
    displayImages(imageArray)
    return imageArray
}


let i = 0
    //puts img webpage
function displayImages(imageArray) {
    if (i < 5) {
        const imgdisplay = document.getElementById("photoImage")
        imgdisplay.src = imageArray[i]

        const imgFlickrUrl = document.getElementById("urlHolder")
        imgFlickrUrl.href = imageArray[i]

        i++
    } else {
        i = 0
        displayImages(imageArray)
    }
}