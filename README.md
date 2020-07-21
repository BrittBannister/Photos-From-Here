DEVELOPMENT PLAN:

ALOT OF THIS CODE CAME FROM RANDY'S DEMO ON 7/20
I HAVE COMMENTED THE CODE THAT I HAVE ADDED

SIGN UP FOR FLICKR
CREATE API KEY
d3bfc1adf01a36079d0c6711030a97e8

EXAMPLE QUERY URL:
https://flickr.com/services/rest/?api_key=d3bfc1adf01a36079d0c6711030a97e8&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=39.76574&lon=-86.1579024&text=dog

1. Get the location that we want to see photos of
    1. use geolocation from browser
    2. if can't get location, hardcode lat/long of choice
        https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
        https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
    3. set up query URL
        * use a text value
        * use lat/long from the geolocation API
        * per page < 5
        * set safe search to 1

2. Get photo information from Flickr for that location
    1. send fetch() request
        * send requests through a proxy. 
        * Add the following to the beginning of URL:
            https://shrouded-mountain-15003.herokuapp.com/
        * rehydrate string into an object
    2. use reponse data from object to make URL for image source
        * use values in object array of photos to construct an URL
        * Example code to construct URL:
            function constructImageURL (photoObj) {
                return "https://farm" + photoObj.farm +
                ".staticflickr.com/" + photoObj.server +
                "/" + photoObj.id + "_" + photoObj.secret + ".jpg";
            }
                const imageUrl = constructImageURL(response.photos.photo[0]);

3. Display a photo
    1. copy URL and append image to page
        * Use URL from ^^ for the src attribute
        * Browser will fetch and display photo

4. Provide a way to advance through the photos
    1. button to move from photo to photo
        * first photo should appear after last photo as well