// creating a server

// Nodejs uses repl -> read evaluate print execute


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SignIn- Twitter</title>
      <link rel="shortcut icon" href="twitter.png" type="image/x-icon">
      <style>
          body{
              background-color: rgba(41,41,41);
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          .container{
              height: 29rem;
              width: 29rem;
              color: white;
              background-color: black;
              text-align: center;
              margin-left: 29%;
              margin-top: 2rem;
              border-radius: 1rem;
          }
          #twitter{
              height: 36px;
              width: 40px;
              border-radius: 5px;
              margin-top: 7px;
          }
          h2{
              color: white;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          button{
              display: block;
              margin-left: 21%;
              width: 338px;
              height: 39px;
              margin-top: 10px;
              border-radius: 1rem;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          #p-inline{
              display: inline;
          }
          input{
               background-color: black;
               color: white;
               margin-top: 1rem;
               margin-bottom: 1rem;
               height: 4rem;
               width: 16rem;
               font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
               border-radius: 5px;
          }
          #box{
              margin-top: 1rem;
          }
          a{
              text-decoration: none;
              color: #5ed7ff;
          }
          #logo{
              height: 19px;
              width: 19px;
          }
          .btn{
              background-color: black;
              color: white;
              border: 1px solid white;
          }
          span:before{
              content: "";
              display: inline-block;
              width: 25%;
              border-bottom: 2px solid white;
              vertical-align: middle;
          }
          span:after{
              content: "";
              display: inline-block;
              width: 25%;
              border-bottom: 2px solid white;
              vertical-align: middle;
          }
          
          
      </style>
  </head>
  <body>
      <div class="container">
          <img id="twitter" src="https://tse3.mm.bing.net/th?id=OIP.3cETvKOq9nZr9jNLChvG1wHaHa&pid=Api&P=0&h=180" alt="twitterLogo">
          <h2>Sign In to twitter</h2>
          <button><img id="logo" src="https://tse1.mm.bing.net/th?id=OIP.M45DMMHUpEwPeAsh9isdyAHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123" alt="Google logo">  Sign In with Google</button> 
          <button><img id="logo" src="https://s.yimg.com/fz/api/res/1.2/_Q6zhu372kE__Fkv7np8Jg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEyMDtxPTgwO3c9MTIw/https://s.yimg.com/zb/imgv1/2cc2074d-9408-3c85-a3a8-6bc85315781d/t_500x300" alt="Apple logo">  Sign In with Apple</button>
          <div id="or">
          <span> or </span>
          </div>
          
          <input type="text" name="text" id="text" placeholder="Phone,email address, username">
          <button>Next</button>
          <button class="btn">Forgot Password?</button>
          <div id="box">
          <p id="p-inline">Don't have an account?</p>
          <a href="#">SignUp</a>
          </div>
          
  
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});