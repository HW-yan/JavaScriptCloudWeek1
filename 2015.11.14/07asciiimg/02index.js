#!/usr/bin/env node
// ↑ 告訴它要做的shell類型


//02index.js 依據指令動態載入圖片

var pictureTube = require('picture-tube')
var tube = pictureTube();

var url = process.argv[2] || process.argv[1];
tube.pipe(process.stdout);

var request = require("request");
request.get(url).pipe(tube);
