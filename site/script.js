var mirror;
const reader = new FileReader();

//when the file has been read, set mirror equal to its contents
reader.addEventListener('loadend', (e) => {
  const text = e.srcElement.result;
  mirror = text;
});

fetch('https://cdn.jsdelivr.net/gh/PiethonCoder/mirror.css/mirror.css')
    .then(res => res.blob()) // Gets the response and returns it as a blob
    .then(blob => {
        // Here's where you get access to the blob
        // And you can use it for whatever you want
        // Like calling ref().put(blob)

        // Here, I use it to make an image appear on the page
         reader.readAsText(blob);
    });



function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


$("#download").click(function() {
    download("mirror.css", mirror);
})