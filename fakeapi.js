var http = require('http');
var url = require('url');
var fs   = require('fs');
server = http.createServer(function(req, res) {
    var params = url.parse(req.url, true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    var data={
        data: 'tt',
        iRet: 1,
        info: "success"
    };
    // var currenData=JSON.parse(fs.readFileSync('seat.json','utf8'))
    // data.data=currenData;
    setTimeout(function() {

        switch (params.pathname){
            case "/api":
                if (params.query && params.query.callback) {
                    res.write(params.query.callback + '(' + JSON.stringify(data) + ')');
                } else {
                    res.write(JSON.stringify(data));
                }

                break
            case "/api/t1":
                data.data='t1'
                if (params.query && params.query.callback) {
                    res.write(params.query.callback + '(' + JSON.stringify(data) + ')');
                } else {
                    res.write(JSON.stringify(data));
                }

                break
        }




        return res.end();
    }, 0);

}).listen(1234);


