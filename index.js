 const express = require("express");
 const app = express();

 let port = 8000;

 app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
 });

//  app.use((req , res) => {
//    // console.log(req);
//    // console.log("Request received");
//    // res.send("this is a basic responce")

//    // res.send({
//    //    name:"apple",
//    //    color: "red",
//    // });

//    let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//    res.send(code);
//  });


   //  for Routing

   // gor get 
app.get("/", (req, res) => {
   res.send("you contacted root path");
});

app.get("/apple", (req, res) => {
   res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
   res.send("you contacted orange path");
});

app.get("*", (req, res) => {
   res.send("This path doesn't exist");
});

   // for post
app.post("/", (req, res) => {
   res.send("you sent a post to root path");
});