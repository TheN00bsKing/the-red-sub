﻿// Created 6/16/2014 12:31:36 PM
function generateDOM(){el.createElement("div",{id:"bgDiv"},"body");if(system.platform.ios)var d=el.createElement("div",{id:"leftShiftContainer"},"body");var b=el.createElement("div",{id:"mainFrame","class":"mainFrame"});system.platform.ios?d.appendChild(b):document.getElementById("body").appendChild(b);b=el.createElement("aside",{id:"topToolbar","class":"toolbar horizontalToolbar topToolbar hidden"});if(publicationData.visibility.toc||publicationData.visibility.bookmarks){var a=el.createElement("div",
{id:"listField","class":"buttonsField horizontalField leftField listField"}),c=el.createElement("div",{id:"listButton","class":"button listButton"});a.appendChild(c);b.appendChild(a)}publicationData.shopInfo&&publicationData.shopInfo.usePublicationCart&&(a=el.createElement("div",{id:"cartField","class":"buttonsField horizontalField leftField cartField"}),c=el.createElement("div",{id:"cartButton","class":"button cartButton"}),a.appendChild(c),b.appendChild(a));a=el.createElement("div",{id:"moreField",
"class":"buttonsField horizontalField rightField moreField"});c=el.createElement("div",{id:"moreButton","class":"button moreButton"});a.appendChild(c);b.appendChild(a);publicationData.visibility.bookmarks&&(a=el.createElement("div",{id:"addField","class":"buttonsField horizontalField rightField addField"}),c=el.createElement("div",{id:"addButton","class":"button addButton"}),a.appendChild(c),b.appendChild(a));publicationData.visibility.search&&(a=el.createElement("div",{id:"searchField","class":"buttonsField horizontalField rightField searchField"}),
c=el.createElement("div",{id:"searchButton","class":"button searchButton"}),a.appendChild(c),b.appendChild(a));system.platform.ios?d.appendChild(b):document.getElementById("body").appendChild(b);var b=el.createElement("aside",{id:"pagerToolbar","class":"toolbar horizontalToolbar bottomToolbar pagerToolbar hidden"}),e=el.createElement("div",{id:"sliderField","class":"horizontalField sliderField"}),f=el.createElement("div",{id:"sliderBar","class":"sliderBar"}),g=el.createElement("div",{id:"sliderThumb",
"class":"sliderThumb"}),a=el.createElement("div",{id:"pagerField","class":"sliderLabel"}),c=el.createElement("div",{id:"pagerCurrentPage","class":"pagerFont"}),h=el.createElement("input",{id:"inputPage","class":"inputPage ableSelectText ableEditText invisible",type:"text"}),k=el.createElement("div",{id:"lastPage","class":"pagerFont"});a.appendChild(c);a.appendChild(h);a.appendChild(k);g.appendChild(a);f.appendChild(g);e.appendChild(f);b.appendChild(e);system.platform.ios?d.appendChild(b):document.getElementById("body").appendChild(b);
publicationData.visibility.search&&(b=el.createElement("aside",{id:"searchToolbar","class":"toolbar horizontalToolbar bottomToolbar searchToolbar hidden"}),a=el.createElement("div",{id:"prevResultField","class":"buttonsField horizontalField leftField prevResultField"}),c=el.createElement("div",{id:"prevResultButton","class":"button prevResultButton"}),a.appendChild(c),b.appendChild(a),a=el.createElement("div",{id:"resultField","class":"horizontalField resultField"}),b.appendChild(a),a=el.createElement("div",
{id:"closeResultField","class":"buttonsField horizontalField leftField closeResultField"}),c=el.createElement("div",{id:"closeResultButton","class":"button closeResultButton"}),a.appendChild(c),b.appendChild(a),a=el.createElement("div",{id:"nextResultField","class":"buttonsField horizontalField leftField nextResultField"}),c=el.createElement("div",{id:"nextResultButton","class":"button nextResultButton"}),a.appendChild(c),b.appendChild(a),system.ios?d.appendChild(b):document.getElementById("body").appendChild(b))}
;
