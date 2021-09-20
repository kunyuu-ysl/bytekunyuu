const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    const {url,method} = request
    if (url === '/' && method === 'GET'){
        fs.readFile('index.html',(err, data) => {
            if (err){
                response .writeHead(500,{
                    'Content-Type':'test/plain;charset=utf-8'
                })
                response .end('500服务器挂了')
                return
            }
            response .statusCode = 200
            response .setHeaderValue('Content-Type','text/html')
            response .end(data)
        })
    }else{
        response .statusCode = 400
        response .setHeaderValue('Content-Type':'test/plain;charset=utf-8')
        response .end(404无了)
    }

})

.listener(3000,() => {
    console.log('Server at 3000')
})