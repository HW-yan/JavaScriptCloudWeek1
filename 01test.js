//01test.js
//**建立一個簡單的server**\\
//console.log('test');

//描述使用方式，require載入動作
//JS為一個直譯的語言，在funtion內錯誤不會被發現
var http = require('http');
//console.log('http'); → 查看資訊

//createServer fuction
//Notejs 都是以code back function方式處理
http.createServer(function (req ,res){
    
    
    res.end('welcome to my srever ! ');
    
}).listen(3000);//連綴方式去聽Port ( 3000 )
