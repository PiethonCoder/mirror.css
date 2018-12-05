function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


$("#download").click(function(){
	download("mirror.css",mirror)
})


var mirror = `/* library zone */ :root { --shade: black; } /* glass */ /* looks good with all images and colors except black */ .glass { border-radius: 15px; background: linear-gradient(to right, rgba(226, 226, 226, 0) 0%, rgba(254, 254, 254, .3) 23%, rgba(228, 228, 228, .3) 80%, rgba(219, 219, 219, 0) 100%); box-shadow: 5px 10px 15px 3px rgba(1, 1, 1, .5); } /* foggy glass */ /* give the element a backgroud image, same as body background for fog effect */ /* use background-image, not background so that background-attachment: fixed works */ .foggy-glass { border-radius: 15px; background: inherit; box-shadow: 5px 10px 15px 3px rgba(1, 1, 1, .5); overflow: hidden; position: relative; background-attachment: fixed; } .foggy-glass:before { content: ""; position: absolute; right: -10px; top: 0px; z-index: 0; background: inherit; display: block; width: 102%; height: 102%; -webkit-filter: blur(7px); -moz-filter: blur(7px); -o-filter: blur(7px); -ms-filter: blur(7px); filter: blur(7px); } /* mirror */ /* change :root --shade to your color */ /* only works with solid background color */ .mirror { background: url(https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) 100% / cover; position: relative; z-index: 3; } .mirror:after { color: inherit; z-index: 1; background-image: inherit; transform: scaleY(-1); opacity: .5; } .mirror:before { z-index: 2; background: linear-gradient(to bottom, rgba(1, 1, 1, 0.1), var(--shade), var(--shade)); /* background: linear-gradient(to bottom, rgba(1, 1, 1, 0.1),currentColor, currentColor); */ } .mirror:after, .mirror:before { content: ""; position: absolute; display: block; width: 100%; height: 100%; bottom: -100%; margin-bottom: -6px; } /* mirror text */ .mirror-text { position: relative; } .mirror-text:after { color: inherit; position: absolute; z-index: 1; right: 0; left: 0; display: block; content: attr(data-content); transform: scaleY(-1); opacity: .9; font-size: inherit; background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 35%, currentColor 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
`