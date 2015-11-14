//index.js靜態載入圖片

var pictureTube = require('picture-tube')
var tube = pictureTube();
tube.pipe(process.stdout);

var fs = require('fs');

//fs.createReadStream('載入的圖片檔名.png').pipe(tube); → 只能用png檔案
fs.createReadStream('9E7F1.png').pipe(tube);
//fs.createReadStream('moon.png').pipe(tube);