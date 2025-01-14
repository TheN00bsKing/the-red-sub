//black list
var blackList;
getXMLData("data/Gallery.xml", function(response) {
	blackList= function () {
		var docGallery = response.childNodes[0];
		var docBlackList = docGallery.getElementsByTagName("blackList")[0];
		var blackListArray = new Array(docBlackList.children.length);
		for (var i = 0; i < blackListArray.length; i++) {
			blackListArray[i] = docBlackList.children[i].textContent;
		}
		return blackListArray;
	}();
	initPage();
}, false);

//init page
function encodeLikeButton(link) {
	var div = document.createElement("div")
	div.setAttribute("class", "fbPlugin");

	//like button
    var likeBT = document.createElement("fb:like");
    likeBT.setAttribute("href", link);
    //likeBT.setAttribute("colorscheme", "dark"); for dark background

	//share button
    var shareBT = document.createElement("fb:share-button");
    shareBT.setAttribute("href", link);
    shareBT.setAttribute("type", "button_count");

	div.appendChild(likeBT);
	div.appendChild(shareBT);

    return div;
}

function dayToString(number) {
    var weekday=new Array(7);
    weekday[0]="ראשון";
    weekday[1]="שני";
    weekday[2]="שלישי";
    weekday[3]="רביעי";
    weekday[4]="חמישי";
    weekday[5]="שישי";
    weekday[6]="שבת";
    
    return weekday[number];
}

function encodeThumbnail(album) {
    
    var h1 = document.createElement("h1");
    var name = document.createTextNode(album.name);
    h1.appendChild(name);
    
    var p = document.createElement("p");
    var description;
    if(album.description) {
        description = document.createTextNode(album.description);
    } else {
        description = document.createTextNode("אין תיאור");
    }
    p.appendChild(description);
    
    var h2 = document.createElement("h2");
    var count = document.createTextNode(album.count);
    h2.appendChild(count);
    
    var h3 = document.createElement("h3");
    var dateString = new Date(album.created_time);
    var day = dayToString(dateString.getDay());
    var date = document.createTextNode(dateString.toLocaleDateString() + " " + day);
    h3.appendChild(date);
    
    var likeButton = encodeLikeButton("https://www.facebook.com/media/set/?set=a." + album.id);
    
    var details = document.createElement("div");
    details.setAttribute("class", "details")
    details.appendChild(h1);
    details.appendChild(p);
    details.appendChild(h2);
    details.appendChild(h3);
    details.appendChild(likeButton);
    
    var imageURL = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
    var img = document.createElement('img');
    img.setAttribute("src", "" + imageURL);
    
    var image = document.createElement("div");
    image.setAttribute("class", "image");
    image.setAttribute("onclick", "href('album.html?id=" + album.id + "');");
    image.appendChild(img);
    image.appendChild(details);
	
    var gridItem = document.createElement("div");
    gridItem.setAttribute("class", "grid-item");
    gridItem.appendChild(image);
    
    var grid = document.getElementById("grid-container");
    grid.appendChild(gridItem);
    
    FB.XFBML.parse(document.getElementById(album.id));
}

function initPage() {
    getData("Red.Sub.2003/albums?fields=id, name, link, count, description, photos.limit(1), created_time", function (response) {
        var albums = response.data;
        for (var i = 0; i < albums.length; i++) {
            var album = albums[i];
			if(blackList.indexOf(album.id) <= -1)
            	encodeThumbnail(album);
        }
    });
    
}

function href(link) {
    window.location.href = link;
}
