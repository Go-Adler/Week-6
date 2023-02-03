 const { log } = require('console')
const http = require('http')
const fs = require('fs')
const path = require('path')

// const html = fs.readFileSync('./views/index.html', 'utf-8')
fs.readFile(path.join(__dirname , 'views' , 'index.html'),'utf-8', (err, data) => {
    
});
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(html)
    res.end()
    console.log(req.url);
 })
 
 const PORT = process.env.PORT || 3000
 server.listen(PORT, () => console.log(`Running on ${PORT}`))

