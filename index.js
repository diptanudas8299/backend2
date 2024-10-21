const http = require('http')
const port = 5001;


const server = http.createServer(function(req,resp){
    resp.end('diptanu')
})

server.listen(port,undefined,()=> console.log(`sever is listining on port :${port}`))