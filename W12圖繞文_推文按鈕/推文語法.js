//分享到 Facebook//
void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href))));

//分享到 Twitter//
void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)) .concat(' ') .concat (encodeURIComponent(location.href))));

//分享到 LINE//
void(window.open('http://line.naver.jp/R/msg/text/?'.concat(encodeURIComponent(document.title)) .concat(encodeURIComponent(location.href))))