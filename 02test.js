//02test.js：認識網站模式的流程，抓別的網頁資料
//console.log('test');

//描述使用方式，require載入動作
//JS為一個(直譯的語言)，在funtion內錯誤不會被發現
var http = require('http');
//console.log('http'); → 查看資訊

//給予讀取權限
var fs = require("fs");

//createServer fuction
//Notejs 都是以code back function方式處理
http.createServer(function (req ,res){
    
    //使用者進來會得到一個req function，再給他一個res
    
    //網站模式必有的流程：
    //req rpute
    //req mine -> res
    //要知道網站的資料是怎麼跑的
    
    var content = '';
    //讀檔動作
    //何時執行完很重要，知道程式流很重要
    
    /*//設timeout 以防止不會給資料給使用者 → 不建議，效能也不好
    

        
        fs.readFile ("./02demo.html",fuction(err,file){
       
            content += file;
                setTimeout(function() {
                    res.end(content);
                     }, 5000);
    
        });
    */
    
    
    //放在應該放的位置
        fs.readFile ("./02demo.html",function(err,file){
       
        content += file;
        res.end(content); //end Response
        
    });
    
    //定期觸發
}).listen(3000);//連綴方式去聽
