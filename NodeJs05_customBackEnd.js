const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("css_08_navBar_displayProperty.html");
const about = fs.readFileSync("css_19_transitions.html");
const form = fs.readFileSync("css_forms.html");

const hostname ='127.0.0.1';
const port=3000;


const server = http.createServer((req,res)=>{
    url = req.url;
    console.log(req.url);
    res.statusCode =200;
    res.setHeader('Content-Type','text/html');
    if (url=='/') {
        res.end(home); 
    }
    else if (url=='/css_19_transitions.html'){
        res.end(about); 
    }
    else if (url=='/css_08_navBar_displayProperty.html'){
        res.end(home); 
    }
    else if (url=='/css_forms.html'){
        res.end(form); 
    }
    else{
        res.statusCode =404;
        res.end("<h1> Error 404: File not found </h1>");
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });