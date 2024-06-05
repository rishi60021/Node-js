const http=require("http")
const server=http.createServer((req,res)=>{

    if(req.url==="/"){
        res.end("here is our short hstory")
    }
    if(req.url==="/about"){
        res.end("here is about history")
    }
    res.end(`
    <h1>Opps!</h1>
    <p>page not found </p>
    <a href="/">Go back</a>
    `)
    // res.write("Welcome to our home page")
    // res.end();

})

server.listen(5000)