const http=require('http');
 const port=8000;
 const fs=require('fs');
 function requestHandler(req,res){
    console.log(req.url);
    // res.end('hello ! how can i help u?');
    res.writeHead(200,{'content-type':'text/html'});
    // fs.readFile('./index.html',function(err,data){
    //     if(err){
    //         console.log('error',err);
    //         return res.end('<h1>Error!</h1>');
    //     }
    //     return res.end(data);
    // });
    let filepath;
    switch(req.url){
        case '/':
            filepath='./index.html'
            break;
            case '/profile':
                filepath='./profile.html'
                break;
                default:
                    filepath='./404.html'

    }
    fs.readFile(filepath,function(err,data){
        if(err){
            console.log("error",err);
            return res.end('<h1>Errror!</h1>')
        }
        return res.end(data);
    })

}
 const server =http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is  running on port:",port);   
});

